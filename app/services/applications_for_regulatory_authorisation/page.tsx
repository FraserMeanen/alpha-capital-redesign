"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import ServicesSubnav from "@/app/components/services-subnav";

const smoothEase = [0.65, 0, 0.35, 1] as const;

export default function RegulatoryAuthorisationPage() {
  const reducedMotion = useReducedMotion();

  const heroReveal = (delay: number) => ({
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reducedMotion ? 0.25 : 0.85,
      delay: reducedMotion ? 0 : delay,
      ease: smoothEase,
    },
  });

  const scrollReveal = {
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reducedMotion ? 0.25 : 0.8,
      ease: smoothEase,
    },
  };

  return (
    <>
      <Header />

      <main className="overflow-hidden text-[#10283b]">
        {/* TOP SECTION */}
        <section className="relative isolate overflow-hidden border-b border-[#10283b]/10 bg-[#f8f7f2]">
          {/* Alpha diagonal background geometry */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[40%] lg:block"
          >
            <div
              className="absolute inset-0 bg-[#e5eaed]/50"
              style={{
                clipPath: "polygon(60% 0, 100% 0, 64% 100%, 16% 100%)",
              }}
            />

            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent 0, transparent 70px, rgba(45,127,168,0.11) 71px, transparent 72px)",
                clipPath: "polygon(72% 0, 100% 0, 66% 100%, 34% 100%)",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-[1500px] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24 xl:px-16">
            {/* BACK LINK */}
            <motion.div {...heroReveal(0.05)}>
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 text-[13px] font-semibold text-[#214f78] transition-colors duration-300 hover:text-[#2d7fa8]"
              >
                <ArrowLeft
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                  aria-hidden="true"
                />
                Back to Services
              </Link>
            </motion.div>

            <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              {/* LEFT CONTENT */}
              <div>
                {/* EYEBROW */}
                <motion.p
                  {...heroReveal(0.12)}
                  className="mb-5 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]"
                >
                  Our services
                </motion.p>

                {/* HEADLINE */}
                <motion.h1
                  {...heroReveal(0.2)}
                  className="font-display text-[3.2rem] leading-[0.98] tracking-[-0.035em] text-[#10283b] sm:text-[4.2rem] lg:text-[4.6rem] xl:text-[5.2rem]"
                >
                  Applications For{" "}
                  <span className="text-[#2d7fa8]">
                    Regulatory Authorisation.
                  </span>
                </motion.h1>

                {/* ORIGINAL SERVICE DESCRIPTION */}
                <motion.div
                  {...heroReveal(0.35)}
                  className="mt-8 border-t border-[#10283b]/15 pt-6"
                >
                  <p className="max-w-[680px] text-[14px] leading-[1.95] text-[#51616d] sm:text-[15px]">
                    ACCL specialises in helping firms seeking authorisation to
                    undertake investment business in the UK or other global
                    jurisdictions, obtain their license from the FCA or other
                    local regulators.
                  </p>
                </motion.div>
              </div>

              {/* ANIMATED IMAGE */}
              <motion.div
                initial={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: 24, scale: 0.98 }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: reducedMotion ? 0.25 : 1.15,
                  delay: reducedMotion ? 0 : 0.3,
                  ease: smoothEase,
                }}
                className="relative isolate"
              >
                {/* Subtle offset layer */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 translate-y-3 bg-[#2d7fa8]/12"
                  style={{
                    clipPath: "polygon(12% 0, 100% 0, 88% 100%, 0 100%)",
                  }}
                />

                {/* Diagonally clipped image */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)",
                  }}
                >
                  <Image
                    src="/regulatory_auth_image.png"
                    alt="A business professional holding a pen during a regulatory application discussion"
                    width={1448}
                    height={1086}
                    priority
                    sizes="(max-width: 1023px) 100vw, 55vw"
                    className="block h-auto w-full object-cover"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[#10283b]/[0.05]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FEES AND APPLICATION PROCESS */}
        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-8 border-t border-[#10283b]/15 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pt-10">
              {/* SECTION HEADING */}
              <motion.div {...scrollReveal}>
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]">
                  Application fees
                </p>

                <h2 className="font-display text-[2.8rem] leading-[1.02] tracking-[-0.025em] text-[#10283b] sm:text-[3.5rem] lg:text-[4.1rem]">
                  A clear, agreed{" "}
                  <span className="text-[#2d7fa8]">fee structure.</span>
                </h2>
              </motion.div>

              {/* SECTION CONTENT */}
              <motion.div
                {...scrollReveal}
                transition={{
                  duration: reducedMotion ? 0.25 : 0.8,
                  delay: reducedMotion ? 0 : 0.12,
                  ease: smoothEase,
                }}
                className="lg:pt-3"
              >
                <p className="max-w-[700px] text-[14px] leading-[1.95] text-[#51616d] sm:text-[15px]">
                  Prices for this service can be mutually agreed on a case by
                  case basis depending on the type of license application
                  however, there are no hidden costs or excessive charges for
                  &lsquo;telephone time&rsquo;. The costs are payable in two
                  distinct elements being:
                </p>

                {/* PAYMENT STAGES */}
                <ol className="mt-9 border-t border-[#10283b]/15">
                  <li className="border-b border-[#10283b]/15 py-7">
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="font-display text-[1.65rem] leading-[1.15] tracking-[-0.02em] text-[#10283b] sm:text-[1.9rem]">
                        Commencement Fee and Submission Fee
                      </h3>

                      <span className="shrink-0 font-display text-[2rem] leading-none text-[#2d7fa8] sm:text-[2.4rem]">
                        70%
                      </span>
                    </div>

                    <p className="mt-4 text-[14px] leading-[1.95] text-[#51616d] sm:text-[15px]">
                      Being 70% of the agreed fee payable immediately on
                      commencement. This will cover all preparatory work, the
                      provision of all required manuals, policies, procedures
                      and other documentation, the submission and responsibility
                      of progressing the application and liaison with the
                      relevant regulator.
                    </p>
                  </li>

                  <li className="border-b border-[#10283b]/15 py-7">
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="font-display text-[1.65rem] leading-[1.15] tracking-[-0.02em] text-[#10283b] sm:text-[1.9rem]">
                        Authorisation Fee
                      </h3>

                      <span className="shrink-0 font-display text-[2rem] leading-none text-[#2d7fa8] sm:text-[2.4rem]">
                        30%
                      </span>
                    </div>

                    <p className="mt-4 text-[14px] leading-[1.95] text-[#51616d] sm:text-[15px]">
                      Being 30% of the agreed fee payable only upon the
                      successful awarding of the license by the relevant
                      regulator to the applicant.
                    </p>
                  </li>
                </ol>

                {/* CONTACT INFORMATION */}
                <p className="mt-8 max-w-[700px] text-[14px] leading-[1.95] text-[#51616d] sm:text-[15px]">
                  To discuss your requirements further or to obtain a blank,
                  template copy of ACCL&apos;s Proposal Document for your
                  information and with no obligation, please contact ACCL at{" "}
                  <a
                    href="mailto:info@alphaccl.co.uk"
                    className="font-semibold text-[#2d7fa8] underline decoration-[#2d7fa8]/30 underline-offset-4 transition-colors duration-300 hover:text-[#214f78]"
                  >
                    info@alphaccl.co.uk
                  </a>{" "}
                  or{" "}
                  <a
                    href="tel:+441268661696"
                    className="font-semibold text-[#2d7fa8] underline decoration-[#2d7fa8]/30 underline-offset-4 transition-colors duration-300 hover:text-[#214f78]"
                  >
                    by telephone
                  </a>
                  .
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SHARED NAVIGATION BETWEEN SERVICE PAGES */}
        <ServicesSubnav />
      </main>

      <Footer />
    </>
  );
}
