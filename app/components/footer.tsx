import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Services", href: "/services" },
  { label: "Recruitment", href: "/recruitment" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

const usefulLinks = [
  { label: "Financial Conduct Authority", href: "https://www.fca.org.uk/" },
  {
    label: "Financial Ombudsman Service",
    href: "https://www.financial-ombudsman.org.uk/",
  },
  {
    label: "Financial Services Compensation Scheme",
    href: "https://www.fscs.org.uk/",
  },
  {
    label: "Companies House",
    href: "https://find-and-update.company-information.service.gov.uk/",
  },
  { label: "Information Commissioner's Office", href: "https://ico.org.uk/" },
  {
    label: "Association of Professional Compliance Consultants",
    href: "https://apcc.org.uk/",
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t-2 border-[#2d7fa8] bg-[#18222d] text-[#f8f7f2]">
      {/* A very faint financial-data motif, behind the content. */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -right-[5%] top-0 h-full w-[42%] bg-white/[0.025]"
          style={{
            clipPath: "polygon(44% 0%, 100% 0%, 56% 100%, 0% 100%)",
          }}
        />
        <svg
          className="absolute bottom-0 right-[-6%] h-[290px] w-[90%] opacity-[0.13] sm:h-[360px] sm:w-[65%]"
          viewBox="0 0 850 340"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            <pattern
              id="footer-finance-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 60 0 L 0 0 0 60" stroke="#9ac2d5" strokeWidth="0.7" />
            </pattern>
            <linearGradient
              id="footer-finance-line"
              x1="0"
              y1="1"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#8ab6c8" stopOpacity="0" />
              <stop offset="100%" stopColor="#8ab6c8" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect width="850" height="340" fill="url(#footer-finance-grid)" />
          <path
            d="M 0 300 C 85 280 115 305 185 256 S 300 277 367 214 S 480 237 553 170 S 660 190 730 113 S 803 108 850 46"
            stroke="url(#footer-finance-line)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="553" cy="170" r="5" fill="#8ab6c8" />
          <circle cx="730" cy="113" r="5" fill="#8ab6c8" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 gap-x-7 gap-y-9 py-11 sm:gap-x-12 sm:py-14 lg:grid-cols-[1.2fr_0.7fr_1fr_1.15fr] lg:gap-x-10 lg:py-16">
          {/* Company identity */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="Alpha Capital Compliance home"
              className="relative inline-block h-[68px] w-[214px] rounded-[3px] bg-[#f8f7f2] transition-colors hover:bg-white"
            >
              <Image
                src="/alphanewlogo.png"
                alt="Alpha Capital Compliance"
                fill
                sizes="214px"
                className="object-contain p-2"
              />
            </Link>
            <p className="mt-5 max-w-[300px] text-[13px] leading-[1.8] text-white/70">
              Practical compliance consultancy for financial services firms in
              the UK and internationally.
            </p>
            <p className="mt-4 max-w-[310px] text-[11px] leading-[1.8] text-white/45">
              Alpha Capital Compliance Limited is incorporated in England and
              Wales. Company number 08655649.
            </p>
            <p className="mt-2 max-w-[310px] text-[11px] leading-[1.7] text-white/45">
              Registered office: 34 Westway, Caterham-on-the-Hill, Surrey, CR3
              5TP, United Kingdom.
            </p>
          </div>

          {/* Website pages */}
          <div>
            <h2 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#90bed5]">
              Explore
            </h2>
            <nav
              aria-label="Footer navigation"
              className="flex flex-col items-start gap-3"
            >
              {navigation.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[12px] leading-[1.5] text-white/75 transition-colors duration-200 hover:text-white focus-visible:outline-offset-4"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Regulator and professional resources */}
          <div>
            <h2 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#90bed5]">
              Useful links
            </h2>
            <div className="flex flex-col items-start gap-3">
              {usefulLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-1.5 text-[12px] leading-[1.5] text-white/75 transition-colors duration-200 hover:text-white focus-visible:outline-offset-4"
                >
                  <span>{label}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    size={12}
                    className="mt-[3px] shrink-0 text-[#90bed5] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact details */}
          <div className="col-span-2 lg:col-span-1">
            <h2 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#90bed5]">
              Contact Alpha
            </h2>
            <div className="flex flex-col gap-4 text-[12px] leading-[1.7] text-white/75">
              <div className="flex items-start gap-3">
                <MapPin
                  aria-hidden="true"
                  size={17}
                  className="mt-0.5 shrink-0 text-[#90bed5]"
                />
                <address className="not-italic">
                  Acorn Lodge, 2 West Avenue,
                  <br />
                  Hullbridge, Hockley, Essex,
                  <br />
                  SS5 6JU, United Kingdom
                </address>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  aria-hidden="true"
                  size={17}
                  className="mt-0.5 shrink-0 text-[#90bed5]"
                />
                <div className="flex flex-col gap-1">
                  <a href="tel:+441268661696" className="hover:text-white">
                    +44 (0) 1268 661 696
                  </a>
                  <a href="tel:+447776410521" className="hover:text-white">
                    +44 (0) 7776 410 521
                  </a>
                </div>
              </div>
              <a
                href="mailto:info@alphaccl.co.uk"
                className="flex w-fit items-start gap-3 transition-colors hover:text-white"
              >
                <Mail
                  aria-hidden="true"
                  size={17}
                  className="mt-0.5 shrink-0 text-[#90bed5]"
                />
                info@alphaccl.co.uk
              </a>
              <a
                href="https://uk.linkedin.com/in/pdsawyer"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-3 transition-colors hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0 text-[#90bed5]"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
                </svg>
                <span>Connect with Paul on LinkedIn</span>
                <ArrowUpRight
                  aria-hidden="true"
                  size={13}
                  className="text-[#90bed5] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Compact closing strip */}
        <div className="flex flex-col gap-2 border-t border-white/15 py-5 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p>
            © {new Date().getFullYear()} Alpha Capital Compliance Limited. All
            rights reserved.
          </p>
          <p>
            Website by{" "}
            <a
              href="https://fm-digital.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#a6d4e9] transition-colors hover:text-white"
            >
              FM Digital{" "}
              <ArrowUpRight
                aria-hidden="true"
                size={12}
                className="inline-block align-[-2px]"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
