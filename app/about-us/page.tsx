"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const smoothEase = [0.65, 0, 0.35, 1] as const;

// Tries common extensions because the image was supplied as "ACC_profile_picture"
// without an extension. Once the correct file is known, this can be a single path.
const portraitSources = [
  "/ACC_profile_picture.jpg",
  "/ACC_profile_picture.png",
  "/ACC_profile_picture.jpeg",
  "/ACC_profile_picture.webp",
];

const milestones = [
  {
    year: "1976",
    heading: "A career in financial services",
    description:
      "Paul entered the industry in back-office operations, progressing into senior management during his first fifteen years.",
  },
  {
    year: "1996",
    heading: "A focus on compliance",
    description:
      "Following four years in market risk, Paul moved into compliance and money laundering prevention, where he has worked ever since.",
  },
];

export default function AboutUsPage() {
  const [portraitIndex, setPortraitIndex] = useState(0);

  return (
    <>
      <Header />

      <main className="overflow-hidden text-[#10283b]">
        {/* INTRODUCTION: Paul's words and portrait, with no added stock photography. */}
        <section className="relative isolate overflow-hidden border-b border-[#10283b]/10 bg-[#f8f7f2]">
          {/* An architectural facade made entirely from code: angled planes + fine lines. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block"
          >
            <div
              className="absolute inset-0 bg-[#e7eef1]/70"
              style={{ clipPath: "polygon(63% 0, 100% 0, 41% 100%, 0 100%)" }}
            />
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent 0px, transparent 47px, rgba(45,127,168,0.16) 48px, transparent 49px)",
                clipPath: "polygon(71% 0, 100% 0, 46% 100%, 12% 100%)",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-[1500px] px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24 xl:px-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16 xl:gap-24">
              <div className="relative z-10">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: smoothEase }}
                  className="mb-5 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]"
                >
                  Our approach
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: smoothEase }}
                  className="font-display text-[4.1rem] leading-[0.9] tracking-[-0.035em] sm:text-[5.5rem] lg:text-[6.3rem] xl:text-[7.2rem]"
                >
                  About <span className="text-[#2d7fa8]">Us.</span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.25, ease: smoothEase }}
                  className="mt-9 max-w-[610px] border-t border-[#10283b]/15 pt-7 sm:mt-11 sm:pt-8"
                >
                  <blockquote>
                    <p className="text-[15px] leading-[1.95] text-[#405463] sm:text-[16px]">
                      Financial services Compliance and Money Laundering
                      Prevention are very complex topics however, at Alpha, we
                      aim to assist firms from all jurisdictions by providing
                      blunt and uncompromising advice in this specialist arena
                      whilst developing a positive and respectful interaction
                      with all clients.
                    </p>
                    <p className="mt-5 text-[15px] leading-[1.95] text-[#405463] sm:text-[16px]">
                      We operate on a retainer and open-access basis, which
                      coupled with our forthright approach, provides a unique,
                      no-nonsense service that identifies and takes advantage of
                      a space in the industry which we hope will be both
                      welcomed and appreciated by clients, allowing us to make a
                      distinctive and substantial impact.
                    </p>
                    <footer className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 border-l-2 border-[#2d7fa8] pl-4">
                      <span className="text-[13px] font-semibold text-[#10283b]">
                        Paul Sawyer
                      </span>
                      <span className="text-[12px] text-[#657783]">
                        September 2016
                      </span>
                    </footer>
                  </blockquote>
                </motion.div>
              </div>

              <motion.figure
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.23, ease: smoothEase }}
                className="relative mx-auto w-full max-w-[500px] lg:mr-0"
              >
                {/* The portrait itself stays rectangular and natural. */}
                <div
                  aria-hidden="true"
                  className="absolute -right-3 -top-4 h-full w-full bg-[#2d7fa8]/15 sm:-right-5 sm:-top-5"
                  style={{
                    clipPath:
                      "polygon(16% 0,100% 0,100% 84%,84% 100%,0 100%,0 16%)",
                  }}
                />
                <div className="relative aspect-[4/4.7] overflow-hidden bg-[#e4eff4]">
                  <Image
                    src={portraitSources[portraitIndex]}
                    alt="Paul Sawyer, Managing Director of Alpha Capital Compliance"
                    fill
                    priority
                    sizes="(max-width: 1023px) 90vw, 38vw"
                    className="object-cover object-top"
                    onError={() => {
                      setPortraitIndex((index) =>
                        Math.min(index + 1, portraitSources.length - 1),
                      );
                    }}
                  />
                </div>
                <figcaption className="mt-5 flex items-end justify-between gap-4 border-t border-[#10283b]/15 pt-4">
                  <span className="font-display text-[2rem] leading-none text-[#10283b] sm:text-[2.25rem]">
                    Paul Sawyer
                  </span>
                  <span className="pb-1 text-right text-[10px] font-bold uppercase tracking-[0.16em] text-[#627581]">
                    Managing Director
                  </span>
                </figcaption>
              </motion.figure>
            </div>
          </div>
        </section>

        {/* BIOGRAPHY AND A CSS-ONLY ARCHITECTURAL / TIMELINE DETAIL. */}
        <section className="relative isolate overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28 xl:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] lg:block"
          >
            <div
              className="absolute inset-0 bg-[#edf3f6]/65"
              style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 0 100%)" }}
            />
            <div
              className="absolute inset-0 opacity-45"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(45,127,168,0.17) 1px, transparent 1px), linear-gradient(to bottom, rgba(45,127,168,0.12) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
                clipPath: "polygon(58% 0,100% 0,100% 100%,8% 100%)",
              }}
            />
            <div className="absolute -right-14 top-1/2 h-[380px] w-[250px] -translate-y-1/2 -skew-x-[18deg] border border-[#2d7fa8]/20" />
            <div className="absolute right-10 top-1/2 h-[320px] w-[210px] -translate-y-1/2 -skew-x-[18deg] border border-[#2d7fa8]/15" />
          </div>

          <div className="relative mx-auto max-w-[1500px]">
            <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20 xl:gap-28">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.8, ease: smoothEase }}
              >
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]">
                  The managing director
                </p>
                <h2 className="font-display text-[3.3rem] leading-[0.95] tracking-[-0.025em] sm:text-[4rem] lg:text-[4.8rem]">
                  Experience <br className="hidden sm:block" /> behind the{" "}
                  <span className="text-[#2d7fa8]">advice.</span>
                </h2>
                <div className="mt-8 max-w-[590px] border-t border-[#10283b]/15 pt-7 text-[14px] leading-[1.95] text-[#51616d] sm:text-[15px]">
                  <p>
                    Paul Sawyer entered the financial services industry in 1976
                    and has worked across a broad range of areas, including
                    stockbroking, investment and retail banking, fund and asset
                    management, energy commodities, and online Forex and CFD
                    broking.
                  </p>
                  <p className="mt-5">
                    He began his career in back-office operations, reaching
                    senior management positions during his first fifteen years.
                    He then spent four years in market risk before moving into
                    compliance and money laundering prevention in 1996, where he
                    has remained ever since.
                  </p>
                </div>
              </motion.div>

              <div className="relative lg:pt-12">
                <div className="border-t border-[#10283b]/20">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.75,
                        delay: index * 0.1,
                        ease: smoothEase,
                      }}
                      className="grid grid-cols-[90px_1fr] gap-5 border-b border-[#10283b]/15 py-8 sm:grid-cols-[125px_1fr] sm:gap-8 sm:py-10"
                    >
                      <span className="font-display text-[2.8rem] leading-none tracking-[-0.025em] text-[#2d7fa8] sm:text-[3.7rem]">
                        {milestone.year}
                      </span>
                      <div>
                        <h3 className="font-display text-[1.65rem] leading-[1.1] text-[#10283b] sm:text-[1.9rem]">
                          {milestone.heading}
                        </h3>
                        <p className="mt-3 max-w-[440px] text-[13px] leading-[1.85] text-[#51616d] sm:text-[14px]">
                          {milestone.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compact closing CTA, rather than another full promotional block. */}
        <section className="border-t border-[#10283b]/10 bg-[#f8f7f2] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 xl:px-16">
          <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-16">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]">
                Get in touch
              </p>
              <h2 className="font-display text-[2.9rem] leading-[0.98] tracking-[-0.02em] sm:text-[3.6rem] lg:text-[4.3rem]">
                Let&apos;s discuss your{" "}
                <span className="text-[#2d7fa8]">requirements.</span>
              </h2>
              <p className="mt-4 max-w-[600px] text-[14px] leading-[1.8] text-[#51616d] sm:text-[15px]">
                Contact Alpha Capital Compliance to discuss your firm&apos;s
                compliance needs.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="group inline-flex h-[54px] shrink-0 items-center gap-4 rounded-[4px] bg-[#214f78] px-7 text-[14px] font-semibold text-white! transition-colors duration-300 hover:bg-[#173e60]"
            >
              Contact Us
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
