"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function Affiliations() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="affiliations-heading"
      className="relative isolate overflow-hidden bg-[#214f78] text-white"
    >
      {/* SUBTLE ALPHA DIAGONAL BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] top-0 h-full w-[45%] bg-white/[0.035]"
        style={{
          clipPath: "polygon(35% 0%, 100% 0%, 65% 100%, 0% 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[32%] h-full w-[14%] bg-white/[0.025]"
        style={{
          clipPath: "polygon(60% 0%, 100% 0%, 40% 100%, 0% 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-12 lg:py-20 xl:px-16">
        {/* LEFT — CONTACT INFORMATION */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: smoothEase,
          }}
        >
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/60">
            Alpha Capital Compliance
          </p>

          <h2
            id="affiliations-heading"
            className="font-display max-w-[480px] text-[2.9rem] leading-[0.98] tracking-[-0.025em] sm:text-[3.6rem] lg:text-[4rem]"
          >
            We are ready
            <br />
            <span className="text-[#b7dcea]">to assist you.</span>
          </h2>

          <p className="mt-6 max-w-[390px] text-[14px] leading-[1.85] text-white/75">
            Speak to Alpha about your compliance requirements and find out how
            we can support your business.
          </p>

          <Link
            href="/contact-us"
            className="group mt-8 inline-flex h-[50px] items-center justify-center gap-4 rounded-[3px] bg-white px-6 transition-all duration-300 hover:bg-[#e6f0f5]"
          >
            <span className="text-[13px] font-semibold text-[#10283b]">
              Get in touch
            </span>

            <ArrowRight
              size={17}
              color="#10283b"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* RIGHT — PROFESSIONAL AFFILIATIONS */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            delay: 0.12,
            ease: smoothEase,
          }}
          className="lg:border-l lg:border-white/20 lg:pl-12"
        >
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/60">
            Professional affiliations
          </p>

          <div className="space-y-3">
            {/* APCC */}
            <div className="flex min-h-[108px] items-center justify-between gap-5 rounded-[3px] border border-white/20 bg-white/[0.06] px-4 py-4 sm:px-6">
              <p className="max-w-[360px] text-[14px] font-medium leading-[1.65] text-white/90 sm:text-[15px]">
                Member of the Association of Professional Compliance Consultants
              </p>

              <div className="relative h-[70px] w-[100px] shrink-0 rounded-[2px] bg-white sm:w-[120px]">
                <Image
                  src="/apcc.jpg"
                  alt="Association of Professional Compliance Consultants logo"
                  fill
                  sizes="120px"
                  className="object-contain p-2"
                />
              </div>
            </div>

            {/* COMPLIANCE REGISTER */}
            <div className="flex min-h-[108px] items-center justify-between gap-5 rounded-[3px] border border-white/20 bg-white/[0.06] px-4 py-4 sm:px-6">
              <p className="max-w-[360px] text-[14px] font-medium leading-[1.65] text-white/90 sm:text-[15px]">
                Alpha Capital Compliance is a member of The Compliance Register
              </p>

              <div className="relative h-[70px] w-[100px] shrink-0 rounded-[2px] bg-white sm:w-[120px]">
                <Image
                  src="/complianceregister.jpg"
                  alt="The Compliance Register logo"
                  fill
                  sizes="120px"
                  className="object-contain p-2"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
