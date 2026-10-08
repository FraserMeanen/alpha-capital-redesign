"use client";

import { motion } from "motion/react";

export default function LatestNews() {
  return (
    <section
      id="latest-news"
      className="border-b border-[#10283b]/10 bg-white px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1400px] text-center">
        {/* SECTION HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-[2.3rem] leading-[1] tracking-[-0.025em] text-[#10283b] sm:text-[2.8rem] lg:text-[3.2rem]"
        >
          Latest <span className="text-[#2d7fa8]">News.</span>
        </motion.h2>

        {/* NEWS CONTENT */}
        <div className="mx-auto mt-5 max-w-[1300px] space-y-3 text-[13px] leading-[1.65] text-[#51616d] sm:text-[14px] lg:mt-7 lg:space-y-4 lg:text-[14px] lg:leading-[1.8]">
          <p>
            Alpha Capital Compliance is very proud to announce that it is now a
            member of Complyport’s Associate Program.
          </p>

          <p>
            Complyport is the largest, leading compliance and regulatory
            consultancy providing bespoke, practical solutions for regulated
            firms both in the UK and overseas, with presence in the UK, the EU
            and Hong Kong. Established in 2002, Complyport has assisted over 300
            firms with their FCA authorisations. Their team is comprised of a
            combination of former regulators, industry practitioners and legally
            qualified experts, ensuring their clients receive exceptional
            service at all levels.
          </p>

          <p>
            Paul Sawyer, Alpha’s Director, believes that “By entering this
            Agreement with such a renowned firm, it opens the door for Alpha to
            access huge reserves of exceptional knowledge, expertise and support
            and represents a very exciting time for Alpha and its clients.”
          </p>

          <p>
            Paul Granger, Complyport’s CEO welcomed Alpha Capital Compliance and
            its team into Complyport’s family, confirming that “Complyport’s
            resources and technology are now available to the experienced and
            well-established team of Alpha Capital Compliance”.
          </p>
        </div>
      </div>
    </section>
  );
}
