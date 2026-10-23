"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import ServicesSubnav from "@/app/components/services-subnav";

const smoothEase = [0.65, 0, 0.35, 1] as const;

export default function MoneyLaunderingPreventionPage() {
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

  const amlTopics = [
    'Advice on "Know Your Customer" ("KYC") issues',
    'Customer Due Diligence ("CDD")',
    'Enhanced Due Diligence ("EDD")',
    "Sanction Lists",
    'Politically Exposed Persons ("PEPs")',
    "External reference check agencies",
    'The Financial Action Task Force ("FATF")',
    `FATF's Non-Cooperative Countries and Territories ("NCCT") List`,
    `FATF's 40 Recommendations`,
    `FATF's 9 Special Recommendations on Terrorist Financing`,
    "High Risk Jurisdictions",
    'The Proceeds of Crime Act 2002 ("POCA")',
    "The Money Laundering Regulations",
    "The Joint Money Laundering Steering Group Notes",
  ];

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
                <motion.p
                  {...heroReveal(0.12)}
                  className="mb-5 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]"
                >
                  Our services
                </motion.p>

                <motion.h1
                  {...heroReveal(0.2)}
                  className="font-display text-[3.7rem] leading-[0.96] tracking-[-0.035em] text-[#10283b] sm:text-[4.9rem] lg:text-[5.8rem]"
                >
                  Money Laundering{" "}
                  <span className="text-[#2d7fa8]">Prevention.</span>
                </motion.h1>

                <motion.div
                  {...heroReveal(0.35)}
                  className="mt-8 border-t border-[#10283b]/15 pt-6"
                >
                  <p className="max-w-[680px] text-[14px] leading-[1.95] text-[#51616d] sm:text-[15px]">
                    ACCL is well placed to help you with all issues relating to
                    Money Laundering Prevention, including but not limited to:
                  </p>
                </motion.div>
              </div>

              {/* IMAGE */}
              <motion.div
                initial={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: 24, scale: 0.98 }
                }
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: reducedMotion ? 0.25 : 1.15,
                  delay: reducedMotion ? 0 : 0.3,
                  ease: smoothEase,
                }}
                className="relative isolate"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 translate-y-3 bg-[#2d7fa8]/12"
                  style={{
                    clipPath: "polygon(12% 0, 100% 0, 88% 100%, 0 100%)",
                  }}
                />

                <div
                  className="relative overflow-hidden"
                  style={{
                    clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)",
                  }}
                >
                  <Image
                    src="/money_laundering_image.png"
                    alt="Banknotes inside a washing machine drum representing money laundering prevention"
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

        {/* AML TOPICS */}
        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-8 border-t border-[#10283b]/15 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pt-10">
              <motion.div {...scrollReveal}>
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]">
                  Areas of support
                </p>

                <h2 className="font-display text-[2.8rem] leading-[1.02] tracking-[-0.025em] text-[#10283b] sm:text-[3.5rem] lg:text-[4.1rem]">
                  Guidance across key AML{" "}
                  <span className="text-[#2d7fa8]">requirements.</span>
                </h2>
              </motion.div>

              <motion.div
                {...scrollReveal}
                transition={{
                  duration: reducedMotion ? 0.25 : 0.8,
                  delay: reducedMotion ? 0 : 0.12,
                  ease: smoothEase,
                }}
                className="lg:pt-3"
              >
                <ul className="grid gap-3 text-[14px] leading-[1.9] text-[#51616d] sm:text-[15px]">
                  {amlTopics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[10px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#2d7fa8]"
                      />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <ServicesSubnav />
      </main>

      <Footer />
    </>
  );
}
