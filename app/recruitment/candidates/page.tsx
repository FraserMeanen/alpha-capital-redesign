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

export default function CandidatesPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden text-[#10283b]">
        {/* COMPACT EDITORIAL HERO */}
        <section className="relative isolate overflow-hidden border-b border-[#10283b]/10 bg-[#f8f7f2]">
          {/* Alpha diagonal background geometry — no images */}
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
                  <span className="text-[#2d7fa8]">Candidates.</span>
                </h1>
              </motion.div>

              {/* Original recruitment explanation */}
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
                <p className="max-w-[620px] text-[14px] font-medium leading-[1.9] text-[#51616d] sm:text-[15px]">
                  ACCL does not operate as a recruitment or headhunting service
                  however, during the course of our operations, we may become
                  aware of vacancies within companies and / or have knowledge of
                  candidates that may be a suitable fit for these roles.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CANDIDATE CV INFORMATION */}
        <section className="border-b border-[#10283b]/10 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-[1500px]">
            <motion.div
              {...reveal}
              className="grid gap-9 border-t border-[#10283b]/15 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pt-10"
            >
              {/* Left heading */}
              <div>
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]">
                  Candidate enquiries
                </p>

                <h2 className="font-display text-[2.9rem] leading-[1.04] tracking-[-0.025em] sm:text-[3.5rem] lg:text-[4.2rem]">
                  Submit your
                  <br />
                  <span className="text-[#2d7fa8]">CV.</span>
                </h2>
              </div>

              {/* Original content */}
              <div className="lg:pt-7">
                <p className="max-w-[630px] text-[14px] leading-[1.95] text-[#51616d] sm:text-[15px]">
                  Feel free to submit your CV by email to{" "}
                  <a
                    href="mailto:recruitment@alphaccl.co.uk"
                    className="font-semibold text-[#2d7fa8] underline decoration-[#2d7fa8]/30 underline-offset-4 transition-colors duration-300 hover:text-[#214f78]"
                  >
                    recruitment@alphaccl.co.uk
                  </a>{" "}
                  and we will store it on file for reference purposes and should
                  we become aware of any vacancies that match your skill set, we
                  will advise you immediately.
                </p>

                {/* Direct email action */}
                <a
                  href="mailto:recruitment@alphaccl.co.uk"
                  className="group mt-9 inline-flex h-[54px] shrink-0 items-center gap-4 rounded-[4px] bg-[#214f78] px-7 text-[14px] font-semibold text-white! transition-colors duration-300 hover:bg-[#173e60]"
                >
                  Email your CV
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

              {/* ICO and confidentiality information */}
              <div className="lg:pt-7">
                <p className="max-w-[630px] text-[14px] leading-[1.95] text-[#51616d] sm:text-[15px]">
                  ACCL is registered with the Information Commissioner&apos;s
                  Office in accordance with the Data Protection Act 1998 under
                  reference number: ZA094968. We will maintain the
                  confidentiality of all your data at all times in compliance
                  with the Act. Our entry can be checked here:
                </p>

                {/* External ICO link — new tab */}
                <a
                  href="https://ico.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit the Information Commissioner's Office website (opens in a new tab)"
                  className="group mt-8 inline-flex items-center gap-3 border-b border-[#2d7fa8]/30 pb-2 text-[13px] font-semibold text-[#214f78] transition-colors duration-300 hover:border-[#2d7fa8] hover:text-[#2d7fa8]"
                >
                  www.ico.org.uk
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
