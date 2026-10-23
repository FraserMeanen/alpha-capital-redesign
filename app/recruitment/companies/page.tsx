"use client";

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const smoothEase = [0.65, 0, 0.35, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.75, ease: smoothEase },
};

export default function CompaniesPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden text-[#10283b]">
        {/* COMPACT EDITORIAL HERO */}
        <section className="relative isolate overflow-hidden border-b border-[#10283b]/10 bg-[#f8f7f2]">
          {/* Alpha diagonal geometry */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] lg:block"
          >
            <div
              className="absolute inset-0 bg-[#e5eaed]/45"
              style={{
                clipPath: "polygon(68% 0, 100% 0, 40% 100%, 0 100%)",
              }}
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
              {/* Page heading */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  ease: smoothEase,
                }}
              >
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]">
                  Recruitment
                </p>

                <h1 className="font-display text-[4.15rem] leading-[0.94] tracking-[-0.035em] sm:text-[5.2rem] lg:text-[5.8rem]">
                  For
                  <br />
                  <span className="text-[#2d7fa8]">Companies.</span>
                </h1>
              </motion.div>

              {/* Full original opening paragraph */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.12,
                  ease: smoothEase,
                }}
                className="relative z-10 border-t border-[#10283b]/15 pt-6 lg:mb-1"
              >
                <p className="max-w-[650px] text-[14px] font-medium leading-[1.9] text-[#51616d] sm:text-[15px]">
                  We do not act as a recruitment or headhunting service however,
                  we often become aware of available candidates at all levels,
                  periodically. If you have a position to fill, please submit
                  your vacancy details by email to{" "}
                  <a
                    href="mailto:recruitment@alphaccl.co.uk"
                    className="font-semibold text-[#2d7fa8] underline decoration-[#2d7fa8]/30 underline-offset-4 transition-colors duration-300 hover:text-[#214f78]"
                  >
                    recruitment@alphaccl.co.uk
                  </a>{" "}
                  and we will seek to match it with available candidates on our
                  database.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* RECRUITMENT FEE AND ENQUIRY */}
        <section className="border-b border-[#10283b]/10 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-[1500px]">
            <motion.div
              {...reveal}
              className="grid gap-9 border-t border-[#10283b]/15 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pt-10"
            >
              {/* Left heading */}
              <div>
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]">
                  Recruitment arrangements
                </p>

                <h2 className="font-display text-[2.9rem] leading-[1.04] tracking-[-0.025em] sm:text-[3.5rem] lg:text-[4.2rem]">
                  Placement
                  <br />
                  <span className="text-[#2d7fa8]">fees.</span>
                </h2>
              </div>

              {/* Original fee information */}
              <div className="lg:pt-7">
                <p className="max-w-[630px] text-[14px] leading-[1.95] text-[#51616d] sm:text-[15px]">
                  There will be a simple, one-off payment of 15% of the agreed
                  gross, annual salary, should a candidate we supply be offered,
                  and accept, a position within your organisation.
                </p>

                {/* Primary CTA — matches Candidates and About Us */}
                <a
                  href="mailto:recruitment@alphaccl.co.uk"
                  className="group mt-9 inline-flex h-[54px] shrink-0 items-center gap-4 rounded-[4px] bg-[#214f78] px-7 text-[14px] font-semibold text-white! transition-colors duration-300 hover:bg-[#173e60]"
                >
                  Email your vacancy
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DATA PROTECTION — ORIGINAL INFORMATION */}
        <section className="bg-[#f8f7f2] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-[1500px]">
            <motion.div
              {...reveal}
              className="grid gap-9 border-t border-[#10283b]/15 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pt-10"
            >
              {/* Left heading */}
              <div>
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]">
                  Data protection
                </p>

                <h2 className="font-display text-[2.9rem] leading-[1.04] tracking-[-0.025em] sm:text-[3.5rem] lg:text-[4.2rem]">
                  Your
                  <br />
                  <span className="text-[#2d7fa8]">information.</span>
                </h2>
              </div>

              {/* Original ICO and confidentiality statement */}
              <div className="lg:pt-7">
                <p className="max-w-[630px] text-[14px] leading-[1.95] text-[#51616d] sm:text-[15px]">
                  ACCL is registered with the Information Commissioner&apos;s
                  Office in accordance with the Data Protection Act 1998 under
                  reference number: ZA094968. ACCL will maintain the
                  confidentiality of all your data at all times in compliance
                  with the Act. Our entry can be checked here:{" "}
                  <a
                    href="https://ico.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit the Information Commissioner's Office website (opens in a new tab)"
                    className="inline-flex items-center gap-1 font-semibold text-[#2d7fa8] underline decoration-[#2d7fa8]/30 underline-offset-4 transition-colors duration-300 hover:text-[#214f78]"
                  >
                    www.ico.org.uk
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
