import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Services | Alpha Capital Compliance",
  description:
    "Explore Alpha Capital Compliance services, including compliance documentation, money laundering prevention, regulatory authorisation, FCA returns and company formations.",
};

const services = [
  {
    title: "Compliance Services",
    description:
      "ACCL can assist you with financial services compliance not only in the UK and wider EU, but in all global jurisdictions.",
    href: "/services/compliance_services",
  },
  {
    title: "Compliance Documentation",
    description:
      "ACCL can supply Compliance documents as part of a managed project or on an ad-hoc basis.",
    href: "/services/compliance_documentation",
  },
  {
    title: "Money Laundering Prevention",
    description:
      "ACCL is well placed to help you with all issues relating to Money Laundering Prevention.",
    href: "/services/money_laundering_prevention",
  },
  {
    title: "Applications For Regulatory Authorisation",
    description:
      "ACCL can help you to obtain authorisation from regulators both in the UK and abroad.",
    href: "/services/applications_for_regulatory_authorisation",
  },
  {
    title: "FCA Financial Returns",
    description:
      "AT ACCL our own models for collating data have been validated by reputable London based auditors.",
    href: "/services/fca_financial_returns",
  },
  {
    title: "Other FCA Returns",
    description:
      "ACCL can project manage your FCA GABRIEL schedule in an efficient and timely fashion.",
    href: "/services/other_fca_returns",
  },
  {
    title: "UK And Global Company Formations",
    description:
      "If you are looking to incorporate a company in the UK, wider EU, and other global jurisdictions, then ACCL can help you.",
    href: "/services/uk_and_global_company_formations",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden text-[#10283b]">
        {/* SERVICES HERO */}
        <section className="relative isolate overflow-hidden border-b border-[#10283b]/10 bg-[#f8f7f2]">
          {/* Distinctive Alpha diagonal geometry */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[43%] lg:block"
          >
            <div
              className="absolute inset-0 bg-[#e5eaed]/55"
              style={{
                clipPath: "polygon(56% 0%, 100% 0%, 61% 100%, 7% 100%)",
              }}
            />

            <div
              className="absolute inset-0 bg-[#b9cdd8]/35"
              style={{
                clipPath: "polygon(67% 0%, 71% 0%, 32% 100%, 28% 100%)",
              }}
            />

            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent 0, transparent 67px, rgba(45,127,168,0.11) 68px, transparent 69px)",
                clipPath: "polygon(72% 0%, 100% 0%, 62% 100%, 34% 100%)",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-[1500px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
            <div className="grid items-end gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <div>
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]">
                  Alpha Capital Compliance
                </p>

                <h1 className="font-display text-[4.15rem] leading-[0.94] tracking-[-0.035em] sm:text-[5.2rem] lg:text-[6.15rem]">
                  Our <span className="text-[#2d7fa8]">services.</span>
                </h1>
              </div>

              <p className="relative z-10 max-w-[590px] border-t border-[#10283b]/15 pt-6 text-[14px] leading-[1.9] text-[#51616d] sm:text-[15px] lg:mb-1">
                Explore our services in financial services compliance,
                documentation, money laundering prevention, regulatory
                authorisation, regulatory reporting and company formation.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES DIRECTORY */}
        <section className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 flex flex-col gap-4 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]">
                  Areas of expertise
                </p>

                <h2 className="font-display text-[2.8rem] leading-[1.02] tracking-[-0.025em] sm:text-[3.6rem] lg:text-[4.2rem]">
                  How we can <span className="text-[#2d7fa8]">help.</span>
                </h2>
              </div>

              <p className="max-w-[350px] text-[13px] leading-[1.8] text-[#51616d] sm:text-[14px]">
                Select a service to read more about the support available.
              </p>
            </div>

            {/* INTERNAL SERVICE LINKS */}
            <div className="border-t border-[#10283b]/20">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group relative grid gap-4 border-b border-[#10283b]/15 py-8 transition-colors duration-300 hover:bg-[#f8f7f2]/70 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2d7fa8] sm:py-10 lg:grid-cols-[0.9fr_1.1fr_auto] lg:items-center lg:gap-12 lg:px-5"
                >
                  {/* Subtle hover accent */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 top-0 w-[2px] origin-center scale-y-0 bg-[#2d7fa8] transition-transform duration-300 group-hover:scale-y-100 group-focus-visible:scale-y-100"
                  />

                  {/* Service title */}
                  <h3 className="max-w-[490px] font-display text-[2rem] leading-[1.09] tracking-[-0.025em] text-[#10283b] transition-colors duration-300 group-hover:text-[#2d7fa8] sm:text-[2.35rem] lg:text-[2.55rem]">
                    {service.title}
                  </h3>

                  {/* Paul's original description */}
                  <p className="max-w-[540px] text-[13px] leading-[1.9] text-[#51616d] sm:text-[14px]">
                    {service.description}
                  </p>

                  {/* Internal navigation indicator */}
                  <span className="mt-1 inline-flex shrink-0 items-center gap-3 text-[12px] font-semibold text-[#214f78] transition-colors duration-300 group-hover:text-[#2d7fa8] lg:mt-0">
                    Find out more
                    <ArrowRight
                      size={17}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT AND CONTACT */}
        <section className="border-t border-[#10283b]/10 bg-[#f8f7f2] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-2 lg:gap-20">
            {/* About Alpha */}
            <div className="border-t border-[#10283b]/15 pt-8">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]">
                About Alpha
              </p>

              <h2 className="font-display text-[2.9rem] leading-[1.04] tracking-[-0.025em] sm:text-[3.5rem]">
                About <span className="text-[#2d7fa8]">Us.</span>
              </h2>

              <p className="mt-5 max-w-[500px] text-[14px] leading-[1.9] text-[#51616d] sm:text-[15px]">
                To find out more about Alpha Capital Compliance Ltd, please
                click the link below.
              </p>

              <Link
                href="/about-us"
                className="group mt-7 inline-flex items-center gap-3 text-[13px] font-semibold text-[#214f78] transition-colors duration-300 hover:text-[#2d7fa8]"
              >
                Find out more
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Contact Alpha */}
            <div className="border-t border-[#10283b]/15 pt-8">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]">
                Contact Alpha
              </p>

              <h2 className="font-display text-[2.9rem] leading-[1.04] tracking-[-0.025em] sm:text-[3.5rem]">
                Get in <span className="text-[#2d7fa8]">touch.</span>
              </h2>

              <p className="mt-5 max-w-[500px] text-[14px] leading-[1.9] text-[#51616d] sm:text-[15px]">
                Please don&apos;t hesitate to get in touch to see how we can
                help you.
              </p>

              <Link
                href="/contact-us"
                className="group mt-7 inline-flex h-[54px] shrink-0 items-center gap-4 rounded-[4px] bg-[#214f78] px-7 text-[14px] font-semibold text-white! transition-colors duration-300 hover:bg-[#173e60]"
              >
                Get in touch
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
