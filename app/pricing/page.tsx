"use client";

import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { motion } from "motion/react";

const smoothEase = [0.65, 0, 0.35, 1] as const;

export default function PricingPage() {
  return (
    <>
      <Header />

      <main className="text-[#10283b]">
        {/* PRICING — original information, now with an architectural image. */}
        <section className="relative overflow-hidden border-b border-[#10283b]/10 bg-[#f8f7f2]">
          {/* Quiet diagonal background detail, consistent with the homepage. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[32%] bg-[#e5eaed]/40 lg:block"
            style={{ clipPath: "polygon(65% 0, 100% 0, 42% 100%, 0 100%)" }}
          />

          <div className="relative mx-auto max-w-[1500px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-20 xl:px-16">
            <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 xl:gap-12">
              {/* Original heading and enquiry information. */}
              <div className="relative z-10">
                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: smoothEase }}
                  className="font-display text-[4.2rem] leading-[0.95] tracking-[-0.035em] text-[#10283b] sm:text-[5rem] lg:text-[6rem]"
                >
                  Pricing<span className="text-[#2d7fa8]">.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.12, ease: smoothEase }}
                  className="mt-8 max-w-[510px] border-t border-[#10283b]/15 pt-6 text-[14px] leading-[1.9] text-[#51616d] sm:text-[15px] lg:mt-10"
                >
                  Please contact Alpha Capital Compliance directly at{" "}
                  <a
                    href="mailto:info@alphaccl.co.uk"
                    className="font-semibold text-[#2d7fa8] underline decoration-[#2d7fa8]/30 underline-offset-4 transition-colors hover:text-[#214f78]"
                  >
                    info@alphaccl.co.uk
                  </a>{" "}
                  with information regarding your project to receive a tailored
                  quote.
                </motion.p>
              </div>

              {/* Image — clipped by Alpha-inspired diagonals, not a stock-style card. */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.18, ease: smoothEase }}
                className="relative isolate h-[250px] w-full sm:h-[340px] lg:h-[435px]"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 bg-[#2d7fa8]/15 lg:translate-x-5"
                  style={{
                    clipPath: "polygon(19% 0, 100% 0, 81% 100%, 0 100%)",
                  }}
                />
                <div className="absolute inset-0 overflow-hidden [clip-path:polygon(0_0,100%_0,91%_100%,0_100%)] lg:[clip-path:polygon(18%_0,100%_0,82%_100%,0_100%)]">
                  <Image
                    src="/SkyscrapersBeneathBlueSkies.png"
                    alt="Looking up between modern glass office buildings towards the sky"
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 55vw"
                    className="object-cover object-center"
                  />
                  {/* Very light cool overlay brings the photograph into Alpha's palette. */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#10283b]/[0.07]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* DOCUMENT TEMPLATES — original content and layout retained. */}
        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-[1500px]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: smoothEase }}
              className="grid gap-7 border-t border-[#10283b]/15 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pt-10"
            >
              <h2 className="font-display text-[2.9rem] leading-[1] tracking-[-0.025em] text-[#10283b] sm:text-[3.6rem] lg:text-[4.2rem]">
                Document <span className="text-[#2d7fa8]">Templates</span>
              </h2>

              <p className="max-w-[610px] text-[14px] leading-[1.9] text-[#51616d] sm:text-[15px] lg:pt-2">
                A full set of template manuals, policies, procedures and account
                opening documents can be provided upon request. Individual
                templates can also be provided. Please contact ACCL at{" "}
                <a
                  href="mailto:info@alphaccl.co.uk"
                  className="font-semibold text-[#2d7fa8] underline decoration-[#2d7fa8]/30 underline-offset-4 transition-colors hover:text-[#214f78]"
                >
                  info@alphaccl.co.uk
                </a>{" "}
                to discuss your requirements and associated costs.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
