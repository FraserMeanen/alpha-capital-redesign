"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import ServicesSubnav from "@/app/components/services-subnav";

const smoothEase = [0.65, 0, 0.35, 1] as const;

export default function FCAFinancialReturnsPage() {
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
                  className="font-display text-[3.7rem] leading-[0.96] tracking-[-0.035em] text-[#10283b] sm:text-[4.9rem] lg:text-[5.8rem]"
                >
                  FCA Financial <span className="text-[#2d7fa8]">Returns.</span>
                </motion.h1>

                {/* ORIGINAL SERVICE INTRODUCTION */}
                <motion.div
                  {...heroReveal(0.35)}
                  className="mt-8 border-t border-[#10283b]/15 pt-6"
                >
                  <p className="max-w-[680px] text-[14px] leading-[1.95] text-[#51616d] sm:text-[15px]">
                    ACCL are experienced in handling regulatory financial
                    returns and have developed our own Microsoft Excel models
                    for producing the required financial information based on
                    the provision by the client of a Trial Balance as at the
                    reporting period end date.
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
                    src="/financial_returns_image.png"
                    alt="A financial professional reviewing documents and using a calculator"
                    width={1448}
                    height={1086}
                    priority
                    sizes="(max-width: 1023px) 100vw, 55vw"
                    className="block h-auto w-full object-cover"
                  />

                  {/* Subtle colour treatment */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[#10283b]/[0.05]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FINANCIAL REPORTING CONTENT */}
        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-8 border-t border-[#10283b]/15 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pt-10">
              {/* SECTION HEADING */}
              <motion.div {...scrollReveal}>
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]">
                  Regulatory financial reporting
                </p>

                <h2 className="font-display text-[2.8rem] leading-[1.02] tracking-[-0.025em] text-[#10283b] sm:text-[3.5rem] lg:text-[4.1rem]">
                  Financial data,{" "}
                  <span className="text-[#2d7fa8]">carefully prepared.</span>
                </h2>
              </motion.div>

              {/* ORIGINAL CONTENT */}
              <motion.div
                {...scrollReveal}
                transition={{
                  duration: reducedMotion ? 0.25 : 0.8,
                  delay: reducedMotion ? 0 : 0.12,
                  ease: smoothEase,
                }}
                className="lg:pt-3"
              >
                {/* INDEPENDENT VALIDATION */}
                <p className="max-w-[700px] text-[14px] leading-[1.95] text-[#51616d] sm:text-[15px]">
                  All Excel models have been independently validated by a very
                  reputable firm of London-based auditors.
                </p>

                {/* COREP SUBMISSIONS */}
                <div className="mt-8 border-t border-[#10283b]/10 pt-7">
                  <h3 className="font-display text-[1.8rem] leading-[1.1] tracking-[-0.02em] text-[#10283b] sm:text-[2.1rem]">
                    COREP submissions
                  </h3>

                  <p className="mt-4 max-w-[700px] text-[14px] leading-[1.95] text-[#51616d] sm:text-[15px]">
                    The data collated in the Excel models can then be used to
                    populate the templates required for COREP (.xbrl) submission
                    and again, in keeping with ACCL&apos;s strong control ethic,
                    the mapping processes for the COREP spreadsheets has been
                    determined in conjunction with a highly reputable firm of
                    London-based Chartered Accountants.
                  </p>
                </div>

                {/* ARKK SOLUTIONS */}
                <div className="mt-8 border-t border-[#10283b]/10 pt-7">
                  <h3 className="font-display text-[1.8rem] leading-[1.1] tracking-[-0.02em] text-[#10283b] sm:text-[2.1rem]">
                    Software and submission
                  </h3>

                  <p className="mt-4 max-w-[700px] text-[14px] leading-[1.95] text-[#51616d] sm:text-[15px]">
                    For the software used to convert the COREP templates into
                    .xbrl format, ACCL has developed a strong relationship with,
                    and can highly recommend Arkk Solutions UK, who can be found
                    at{" "}
                    <a
                      href="https://www.arkksolutions.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#2d7fa8] underline decoration-[#2d7fa8]/30 underline-offset-4 transition-colors duration-300 hover:text-[#214f78]"
                    >
                      www.arkksolutions.com
                    </a>
                    .
                  </p>

                  <p className="mt-2 text-[12px] text-[#657783]">
                    This external link opens in a new tab.
                  </p>
                </div>

                {/* CONTACT INFORMATION */}
                <div className="mt-8 border-t border-[#10283b]/10 pt-7">
                  <h3 className="font-display text-[1.8rem] leading-[1.1] tracking-[-0.02em] text-[#10283b] sm:text-[2.1rem]">
                    Further information
                  </h3>

                  <p className="mt-4 max-w-[700px] text-[14px] leading-[1.95] text-[#51616d] sm:text-[15px]">
                    For further information, please email us at{" "}
                    <a
                      href="mailto:support@alphaccl.co.uk"
                      className="font-semibold text-[#2d7fa8] underline decoration-[#2d7fa8]/30 underline-offset-4 transition-colors duration-300 hover:text-[#214f78]"
                    >
                      support@alphaccl.co.uk
                    </a>
                    .
                  </p>
                </div>
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
