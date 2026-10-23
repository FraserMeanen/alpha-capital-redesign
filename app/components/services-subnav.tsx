"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

const serviceLinks = [
  {
    title: "Compliance Services",
    description:
      "ACCL can help you with all issues relating to financial services Compliance in the UK, the EU and in other global jurisdictions.",
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
      "ACCL specialises in helping UK startup firms and established firms obtain FCA licenses.",
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

export default function ServicesSubnav() {
  const pathname = usePathname();

  const otherServices = serviceLinks.filter(
    (service) => service.href !== pathname,
  );

  return (
    <section className="border-t border-[#10283b]/10 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 border-t border-[#10283b]/15 pt-8 sm:mb-12 lg:mb-14 lg:pt-10">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]">
            Other services
          </p>

          <h2 className="font-display text-[2.6rem] leading-[1.02] tracking-[-0.025em] text-[#10283b] sm:text-[3.3rem] lg:text-[4rem]">
            Explore more <span className="text-[#2d7fa8]">services.</span>
          </h2>

          <p className="mt-4 max-w-[640px] text-[14px] leading-[1.9] text-[#51616d] sm:text-[15px]">
            Find out about the other services we provide.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {otherServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex h-full flex-col justify-between rounded-[6px] border border-[#10283b]/10 bg-[#f8f7f2] p-6 transition-all duration-300 hover:border-[#2d7fa8]/30 hover:bg-white hover:shadow-[0_14px_30px_rgba(16,40,59,0.06)]"
            >
              <div>
                <h3 className="font-display text-[1.8rem] leading-[1.05] tracking-[-0.025em] text-[#10283b] transition-colors duration-300 group-hover:text-[#2d7fa8]">
                  {service.title}
                </h3>

                <p className="mt-4 text-[13px] leading-[1.85] text-[#51616d] sm:text-[14px]">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 inline-flex items-center gap-3 text-[13px] font-semibold text-[#214f78] transition-colors duration-300 group-hover:text-[#2d7fa8]">
                Find out more
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
