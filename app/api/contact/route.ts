import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  website?: unknown;
  token?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const stringValue = (value: unknown): string =>
  typeof value === "string" ? value.trim() : "";

function result(message: string, status: number, success = false) {
  return NextResponse.json({ success, message }, { status });
}

export async function POST(request: NextRequest) {
  const configured =
    process.env.TURNSTILE_SECRET_KEY &&
    process.env.RESEND_API_KEY &&
    process.env.RESEND_FROM_EMAIL &&
    process.env.CONTACT_TO_EMAIL;

  if (!configured) {
    return result("The enquiry form is not yet configured. Please email info@alphaccl.co.uk instead.", 503);
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return result("Invalid request.", 415);
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > 20000) {
    return result("Your message is too long.", 413);
  }

  let fields: ContactPayload;
  try {
    const raw: unknown = await request.json();
    if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
      return result("Invalid request.", 400);
    }
    fields = raw as ContactPayload;
  } catch {
    return result("Invalid request.", 400);
  }

  const name = stringValue(fields.name);
  const email = stringValue(fields.email);
  const company = stringValue(fields.company);
  const message = stringValue(fields.message);
  const website = stringValue(fields.website);
  const token = stringValue(fields.token);

  // Trap common automated form submissions without sending any email.
  if (website) return result("Thank you for your message.", 200, true);

  if (
    name.length < 2 || name.length > 120 ||
    !emailPattern.test(email) || email.length > 254 ||
    company.length > 160 ||
    message.length < 10 || message.length > 5000
  ) {
    return result("Please check the form fields and try again.", 400);
  }

  if (!token || token.length > 2048) {
    return result("Please complete the security verification and try again.", 400);
  }

  try {
    // Turnstile MUST be checked on the server: a client-side widget alone is insufficient.
    const verificationResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: token,
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(10000),
      },
    );

    if (!verificationResponse.ok) {
      return result("Security verification is temporarily unavailable. Please try again.", 503);
    }

    const verified: { success?: boolean } = await verificationResponse.json();
    if (!verified.success) {
      return result("Security verification expired or failed. Please try again.", 400);
    }

    // Plain text is intentional: visitor input is never rendered as unsafe HTML.
    const emailText = [
      "New enquiry from Alpha Capital Compliance website",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const deliveryResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY!}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL,
        to: [process.env.CONTACT_TO_EMAIL],
        reply_to: email,
        subject: "New website enquiry — Alpha Capital Compliance",
        text: emailText,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });

    if (!deliveryResponse.ok) {
      console.error("Contact form: email delivery provider returned an error", deliveryResponse.status);
      return result("Your enquiry could not be sent. Please email info@alphaccl.co.uk directly.", 502);
    }

    return result("Your enquiry has been sent.", 200, true);
  } catch (error) {
    console.error("Contact form request failed:", error);
    return result("Your enquiry could not be sent. Please email info@alphaccl.co.uk directly.", 503);
  }
}
