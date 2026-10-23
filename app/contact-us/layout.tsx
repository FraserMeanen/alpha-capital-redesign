import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Alpha Capital Compliance",
  description:
    "Contact Alpha Capital Compliance for financial services compliance, regulatory support and money laundering prevention enquiries. Find contact details or send a message.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | Alpha Capital Compliance",
    description:
      "Get in touch with Alpha Capital Compliance about financial services compliance and regulatory enquiries.",
    url: "/contact-us",
    type: "website",
  },
};

export default function ContactUsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
