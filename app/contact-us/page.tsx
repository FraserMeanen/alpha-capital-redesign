"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const smoothEase = [0.65, 0, 0.35, 1] as const;

// Keep the captcha OFF while the contact form is being configured.
// Enable it later with NEXT_PUBLIC_CONTACT_FORM_ENABLED=true and a real site key.
const siteKey = (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "").trim();
const formEnabled =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENABLED === "true" && Boolean(siteKey);

type SubmissionState = "idle" | "sending" | "success" | "error";

const fieldClass =
  "mt-2 w-full rounded-[3px] border border-[#10283b]/15 bg-[#fbfcfc] px-4 py-3.5 text-[14px] text-[#10283b] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#82919a] focus:border-[#2d7fa8] focus:ring-2 focus:ring-[#2d7fa8]/10";

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.75, ease: smoothEase },
};

export default function ContactUsPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const [verificationToken, setVerificationToken] = useState("");
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submissionState === "sending") return;

    if (!formEnabled || !verificationToken) {
      setSubmissionState("error");
      setFeedback(
        "Online enquiries are not available yet. Please email info@alphaccl.co.uk instead.",
      );
      return;
    }

    const fields = new FormData(event.currentTarget);
    setSubmissionState("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(fields.get("name") ?? ""),
          email: String(fields.get("email") ?? ""),
          company: String(fields.get("company") ?? ""),
          message: String(fields.get("message") ?? ""),
          website: String(fields.get("website") ?? ""),
          token: verificationToken,
        }),
      });

      const result: { success?: boolean; message?: string } =
        await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Your enquiry could not be sent.");
      }

      formRef.current?.reset();
      setSubmissionState("success");
      setFeedback("Your message has been sent to Alpha Capital Compliance.");
    } catch (error) {
      setSubmissionState("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Your enquiry could not be sent. Please email info@alphaccl.co.uk.",
      );
    } finally {
      setVerificationToken("");
      turnstileRef.current?.reset();
    }
  }

  return (
    <>
      <Header />

      <main className="overflow-hidden text-[#10283b]">
        {/* Compact editorial hero, matching the homepage and Pricing page. */}
        <section className="relative isolate overflow-hidden border-b border-[#10283b]/10 bg-[#f8f7f2]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] lg:block"
          >
            <div
              className="absolute inset-0 bg-[#e5eaed]/45"
              style={{ clipPath: "polygon(68% 0, 100% 0, 40% 100%, 0 100%)" }}
            />
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent 0, transparent 76px, rgba(45,127,168,0.12) 77px, transparent 78px)",
                clipPath: "polygon(75% 0, 100% 0, 43% 100%, 17% 100%)",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-[1500px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
            <div className="grid items-end gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: smoothEase }}
                className="font-display text-[4.15rem] leading-[0.94] tracking-[-0.035em] sm:text-[5.2rem] lg:text-[6.15rem]"
              >
                Contact <span className="text-[#2d7fa8]">Us.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.12, ease: smoothEase }}
                className="max-w-[590px] border-t border-[#10283b]/15 pt-6 text-[14px] leading-[1.9] text-[#51616d] sm:text-[15px] lg:relative lg:z-10 lg:mb-1"
              >
                For enquiries about financial services compliance, regulatory
                support or money laundering prevention, please send Alpha
                Capital Compliance a message or use the contact details below.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Form and contact details: one calm, open editorial layout. */}
        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 xl:gap-28">
            <motion.div {...reveal}>
              <div className="border-t border-[#10283b]/15 pt-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2d7fa8]">
                  Enquiries
                </p>
                <h2 className="mt-4 font-display text-[2.9rem] leading-[1.04] tracking-[-0.025em] sm:text-[3.5rem]">
                  Send us a <span className="text-[#2d7fa8]">message.</span>
                </h2>
                <p className="mt-4 max-w-[550px] text-[13px] leading-[1.85] text-[#51616d] sm:text-[14px]">
                  Complete the form below to get in touch. Fields marked with an
                  asterisk are required.
                </p>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-9 space-y-5 sm:mt-10"
              >
                {/* Honeypot field: checked by the existing API route. */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="contact-website">Leave this empty</label>
                  <input
                    id="contact-website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-[13px] font-semibold text-[#10283b]"
                    >
                      Your name <span className="text-[#2d7fa8]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      minLength={2}
                      maxLength={120}
                      placeholder="Your name"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-[13px] font-semibold text-[#10283b]"
                    >
                      Email address <span className="text-[#2d7fa8]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      placeholder="you@example.com"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="text-[13px] font-semibold text-[#10283b]"
                  >
                    Company <span className="font-normal text-[#75838d]">(optional)</span>
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    maxLength={160}
                    placeholder="Company name"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-[13px] font-semibold text-[#10283b]"
                  >
                    Your message <span className="text-[#2d7fa8]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={6}
                    placeholder="Please tell us about your enquiry..."
                    className={`${fieldClass} resize-y`}
                  />
                </div>

                {formEnabled ? (
                  <div className="border-t border-[#10283b]/10 pt-5">
                    <p className="mb-4 text-[12px] text-[#61717d]">
                      Security verification
                    </p>
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={siteKey}
                      options={{ theme: "light", size: "flexible", action: "contact_enquiry" }}
                      onSuccess={(token) => {
                        setVerificationToken(token);
                        if (submissionState === "error") {
                          setSubmissionState("idle");
                          setFeedback("");
                        }
                      }}
                      onExpire={() => setVerificationToken("")}
                      onError={() => {
                        setVerificationToken("");
                        setSubmissionState("error");
                        setFeedback(
                          "Security verification is unavailable. Please try again later or email Alpha directly.",
                        );
                      }}
                    />
                  </div>
                ) : null}

                <div className="border-t border-[#10283b]/15 pt-6">
                  {!formEnabled && (
                    <p className="mb-5 max-w-[490px] text-[12px] leading-[1.8] text-[#60717d]">
                      Online form submissions are being configured. In the
                      meantime, please email{" "}
                      <a
                        href="mailto:info@alphaccl.co.uk"
                        className="font-semibold text-[#214f78] underline decoration-[#214f78]/30 underline-offset-4 hover:text-[#2d7fa8]"
                      >
                        info@alphaccl.co.uk
                      </a>
                      .
                    </p>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-5">
                    <p className="max-w-[260px] text-[12px] leading-[1.7] text-[#61717d]">
                      Your details will be used to respond to your enquiry.
                    </p>
                    <button
                      type="submit"
                      disabled={
                        !formEnabled ||
                        !verificationToken ||
                        submissionState === "sending"
                      }
                      className="group inline-flex h-[54px] shrink-0 items-center gap-4 rounded-[4px] bg-[#214f78] px-7 text-[14px] font-semibold text-white! transition-colors duration-300 hover:bg-[#173e60] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submissionState === "sending" ? "Sending..." : "Send enquiry"}
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </div>

                {feedback && (
                  <p
                    role={submissionState === "error" ? "alert" : "status"}
                    aria-live="polite"
                    className={`border-l-2 px-4 py-3 text-[13px] leading-[1.7] ${
                      submissionState === "success"
                        ? "border-[#2d7fa8] bg-[#edf3f6] text-[#10283b]"
                        : "border-[#a34b4b] bg-[#fff5f3] text-[#8d3333]"
                    }`}
                  >
                    {feedback}
                  </p>
                )}
              </form>
            </motion.div>

            <motion.aside
              {...reveal}
              transition={{ duration: 0.75, delay: 0.08, ease: smoothEase }}
              aria-labelledby="contact-details-heading"
              className="self-start"
            >
              <div className="border-t border-[#10283b]/15 pt-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2d7fa8]">
                  Direct contact
                </p>
                <h2
                  id="contact-details-heading"
                  className="mt-4 font-display text-[2.9rem] leading-[1.04] tracking-[-0.025em] sm:text-[3.5rem]"
                >
                  Contact <span className="text-[#2d7fa8]">details.</span>
                </h2>
                <p className="mt-4 max-w-[480px] text-[13px] leading-[1.85] text-[#51616d] sm:text-[14px]">
                  You can also contact Alpha Capital Compliance directly using
                  the details below.
                </p>
              </div>

              <div className="mt-9 border-t border-[#10283b]/15 sm:mt-10">
                <div className="flex gap-5 border-b border-[#10283b]/10 py-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e4eff4] text-[#2d7fa8]">
                    <MapPin size={20} strokeWidth={1.7} />
                  </span>
                  <div className="pt-1">
                    <h3 className="text-[13px] font-semibold">Address</h3>
                    <address className="mt-2 not-italic text-[14px] leading-[1.9] text-[#51616d]">
                      Acorn Lodge, 2 West Avenue
                      <br />
                      Hullbridge, Hockley, Essex
                      <br />
                      SS5 6JU, United Kingdom
                    </address>
                  </div>
                </div>

                <div className="flex gap-5 border-b border-[#10283b]/10 py-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e4eff4] text-[#2d7fa8]">
                    <Phone size={20} strokeWidth={1.7} />
                  </span>
                  <div className="pt-1">
                    <h3 className="text-[13px] font-semibold">Telephone</h3>
                    <a
                      href="tel:+441268661696"
                      className="mt-2 block text-[14px] leading-[1.9] text-[#51616d] transition-colors hover:text-[#2d7fa8]"
                    >
                      +44 (0) 1268 661 696
                    </a>
                    <a
                      href="tel:+447776410521"
                      className="block text-[14px] leading-[1.9] text-[#51616d] transition-colors hover:text-[#2d7fa8]"
                    >
                      +44 (0) 7776 410 521
                    </a>
                  </div>
                </div>

                <div className="flex gap-5 border-b border-[#10283b]/10 py-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e4eff4] text-[#2d7fa8]">
                    <Mail size={20} strokeWidth={1.7} />
                  </span>
                  <div className="min-w-0 pt-1">
                    <h3 className="text-[13px] font-semibold">Email</h3>
                    <a
                      href="mailto:info@alphaccl.co.uk"
                      className="mt-2 block break-all text-[14px] leading-[1.9] text-[#51616d] underline decoration-[#2d7fa8]/30 underline-offset-4 transition-colors hover:text-[#2d7fa8]"
                    >
                      info@alphaccl.co.uk
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://uk.linkedin.com/in/paul-sawyer-289241437"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-3 text-[13px] font-semibold text-[#214f78] transition-colors duration-300 hover:text-[#2d7fa8]"
              >
                Connect with Paul on LinkedIn
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
