"use client";

import Header from "@/app/components/header";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowRight,
  RefreshCw,
  Lock,
  Calculator,
  ChartColumn,
} from "lucide-react";

const featureCards = [
  {
    title: "Honest, Forthright and Intuitive",
    description:
      "A compliance consultancy service that attempts to demystify the jargon, legalese and sound byte intensive world of Compliance and Money Laundering Prevention.",
    icon: RefreshCw,
  },
  {
    title: "Trustworthy",
    description:
      "All of our arrangements are conducted under a Non-Disclosure / Confidentiality Agreement for the client’s protection.",
    icon: Lock,
  },
  {
    title: "With No Hidden Costs",
    description:
      "All fees are transparent and mutually agreed prior to the commencement of any project. You will not incur any consultancy charges for excessive telephone or email time.",
    icon: Calculator,
  },
  {
    title: "Investor / Trader friendly",
    description:
      "For a small monthly retainer, Alpha can advise on your relationship with your broker of choice.",
    icon: ChartColumn,
  },
];

const smoothEase = [0.65, 0, 0.35, 1] as const;

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const mobileImageRef = useRef<HTMLDivElement>(null);

  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [mobileActiveFeature, setMobileActiveFeature] = useState(0);

  const heroVisible = useInView(heroRef, {
    once: true,
    amount: 0.12,
  });

  const { scrollYProgress } = useScroll({
    target: mobileImageRef,
    offset: ["start 92%", "end 35%"],
  });

  const mobileLeftReveal = useTransform(
    scrollYProgress,
    [0, 0.14, 0.62, 1],
    [
      "inset(0% 0% 100% 0%)",
      "inset(0% 0% 100% 0%)",
      "inset(0% 0% 0% 0%)",
      "inset(0% 0% 0% 0%)",
    ],
  );

  const mobileMiddleReveal = useTransform(
    scrollYProgress,
    [0, 0.16, 0.7, 1],
    [
      "inset(100% 0% 0% 0%)",
      "inset(100% 0% 0% 0%)",
      "inset(0% 0% 0% 0%)",
      "inset(0% 0% 0% 0%)",
    ],
  );

  const mobileRightReveal = useTransform(
    scrollYProgress,
    [0, 0.24, 0.78, 1],
    [
      "inset(0% 0% 100% 0%)",
      "inset(0% 0% 100% 0%)",
      "inset(0% 0% 0% 0%)",
      "inset(0% 0% 0% 0%)",
    ],
  );

  const mobileFullImageOpacity = useTransform(
    scrollYProgress,
    [0.72, 0.92, 1],
    [0, 1, 1],
  );

  const mobileImageScale = useTransform(scrollYProgress, [0, 0.8], [0.97, 1]);

  return (
    <>
      <Header />

      <main className="bg-white text-[#10283b] lg:bg-[#f8f7f2]">
        <section
          ref={heroRef}
          className="relative overflow-hidden border-b border-[#10283b]/10 bg-white lg:bg-[#f8f7f2]"
        >
          <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
            <div
              className="absolute right-[3%] top-0 h-full w-[25%] bg-[#e5eaed]/55"
              style={{
                clipPath: "polygon(39% 0%, 100% 0%, 69% 100%, 0% 100%)",
              }}
            />

            <div
              className="absolute left-[25%] top-0 h-full w-[12%] bg-white/38"
              style={{
                clipPath: "polygon(43% 0%, 100% 0%, 57% 100%, 0% 100%)",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-[1500px] px-5 pt-10 sm:px-8 lg:px-12 lg:pb-16 lg:pt-12 xl:px-16">
            {/* DESKTOP */}

            <div className="hidden items-center gap-10 lg:grid lg:grid-cols-[0.9fr_1.1fr] xl:gap-14">
              {/* LEFT */}

              <div className="relative z-20">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 1.1,
                    delay: 0.25,
                    ease: smoothEase,
                  }}
                  className="font-display max-w-[650px] text-[4.8rem] leading-[0.88] tracking-[-0.035em] text-[#10283b] xl:text-[5.5rem]"
                >
                  Compliance,
                  <br />
                  without the
                  <br />
                  <span className="text-[#2d7fa8]">complexity.</span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.55,
                  }}
                  className="mt-8 flex items-center gap-5"
                >
                  <button className="group inline-flex h-[54px] items-center gap-4 rounded-[4px] bg-[#214f78] px-7 text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-[#173e60]">
                    Talk to Alpha
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  <button className="group inline-flex h-[54px] items-center gap-4 px-1 text-[14px] font-semibold text-[#183247]">
                    Explore our services
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#10283b]/20 transition-all duration-300 group-hover:border-[#2d7fa8] group-hover:text-[#2d7fa8]">
                      <ArrowRight size={16} />
                    </span>
                  </button>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.42,
                  }}
                  className="mt-7 max-w-[510px] text-[1rem] leading-[1.8] text-[#51616d]"
                >
                  At ACCL, our mission is to develop a Compliance consultancy
                  that is:
                </motion.p>

                {/* DESKTOP FEATURE ICONS */}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.72,
                  }}
                  onMouseLeave={() => setActiveFeature(null)}
                  className="mt-7 grid grid-cols-4 border-t border-[#10283b]/10 pt-5"
                >
                  {featureCards.map(({ title, icon: Icon }, index) => (
                    <div
                      key={title}
                      onMouseEnter={() => setActiveFeature(index)}
                      className={
                        index === 0
                          ? "group cursor-default px-2 text-center"
                          : "group cursor-default border-l border-[#10283b]/10 px-2 text-center"
                      }
                    >
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#edf3f6] text-[#2d7fa8] transition-all duration-300 group-hover:bg-[#2d7fa8] group-hover:text-white">
                        <Icon size={24} strokeWidth={1.8} />
                      </div>

                      <h3 className="mt-2 min-h-[34px] text-[11px] font-semibold leading-[1.35] text-[#10283b]">
                        {title}
                      </h3>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* RIGHT IMAGE */}

              <div className="relative z-10">
                <div className="relative h-[610px] w-full">
                  <div className="absolute inset-y-0 left-0 right-[125px]">
                    {/* LEFT */}

                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        clipPath: "polygon(18% 0%, 56% 0%, 32% 100%, 0% 100%)",
                      }}
                    >
                      <motion.div
                        initial={{ y: "-105%" }}
                        animate={heroVisible ? { y: "0%" } : {}}
                        transition={{
                          duration: 3.6,
                          delay: 0.1,
                          ease: smoothEase,
                        }}
                        className="absolute inset-0 will-change-transform"
                        style={{
                          backgroundImage: "url('/london_finance.png')",
                          backgroundSize: "cover",
                          backgroundPosition: "48% center",
                          backgroundRepeat: "no-repeat",
                          filter:
                            "saturate(0.84) contrast(0.97) brightness(0.98)",
                        }}
                      />
                    </div>

                    {/* MIDDLE */}

                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        clipPath: "polygon(45% 0%, 84% 0%, 60% 100%, 21% 100%)",
                      }}
                    >
                      <motion.div
                        initial={{ y: "105%" }}
                        animate={heroVisible ? { y: "0%" } : {}}
                        transition={{
                          duration: 3.9,
                          delay: 0.25,
                          ease: smoothEase,
                        }}
                        className="absolute inset-0 will-change-transform"
                        style={{
                          backgroundImage: "url('/london_finance.png')",
                          backgroundSize: "cover",
                          backgroundPosition: "48% center",
                          backgroundRepeat: "no-repeat",
                          filter:
                            "saturate(0.84) contrast(0.97) brightness(0.98)",
                        }}
                      />
                    </div>

                    {/* RIGHT */}

                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        clipPath:
                          "polygon(74% 0%, 100% 0%, 80% 100%, 50% 100%)",
                      }}
                    >
                      <motion.div
                        initial={{ y: "-105%" }}
                        animate={heroVisible ? { y: "0%" } : {}}
                        transition={{
                          duration: 4.1,
                          delay: 0.4,
                          ease: smoothEase,
                        }}
                        className="absolute inset-0 will-change-transform"
                        style={{
                          backgroundImage: "url('/london_finance.png')",
                          backgroundSize: "cover",
                          backgroundPosition: "48% center",
                          backgroundRepeat: "no-repeat",
                          filter:
                            "saturate(0.84) contrast(0.97) brightness(0.98)",
                        }}
                      />
                    </div>
                  </div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 260,
                    }}
                    animate={
                      heroVisible
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 1.8,
                      delay: 2.6,
                      ease: smoothEase,
                    }}
                    className="absolute right-0 top-[105px] w-[118px]"
                  >
                    <div className="border-l border-[#10283b]/15 pl-4">
                      <p className="text-[10px] font-bold uppercase leading-[2] tracking-[0.2em] text-[#526977]">
                        Practical
                        <br />
                        Expertise
                        <br />
                        Regulatory
                        <br />
                        Focus
                        <br />
                        Global Reach
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 220,
                    }}
                    animate={
                      heroVisible
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 1.7,
                      delay: 2.8,
                      ease: smoothEase,
                    }}
                    className="absolute bottom-[105px] right-0 w-[118px]"
                  >
                    <div className="mb-4 h-px w-12 bg-[#10283b]/20" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#617681]">
                      Est. 2002
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* MOBILE */}

            <div className="bg-white lg:hidden">
              <div className="pb-20">
                <h1 className="font-display text-[3.55rem] leading-[0.88] tracking-[-0.035em] text-[#10283b] sm:text-[4.3rem]">
                  Compliance,
                  <br />
                  without the
                  <br />
                  <span className="text-[#2d7fa8]">complexity.</span>
                </h1>

                <p className="mt-6 max-w-[520px] text-[0.96rem] leading-[1.75] text-[#51616d]">
                  At ACCL, our mission is to develop a Compliance consultancy
                  that is:
                </p>

                <div className="mt-7 flex flex-col items-start gap-3 min-[430px]:flex-row min-[430px]:items-center">
                  <button className="inline-flex h-[52px] items-center gap-4 rounded-[4px] bg-[#214f78] px-6 text-[14px] font-semibold text-white">
                    Talk to Alpha
                    <ArrowRight size={16} />
                  </button>

                  <button className="inline-flex h-[52px] items-center gap-3 px-1 text-[14px] font-semibold text-[#183247]">
                    Explore our services
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#10283b]/20">
                      <ArrowRight size={15} />
                    </span>
                  </button>
                </div>
              </div>

              {/* MOBILE IMAGE */}

              <motion.div
                ref={mobileImageRef}
                style={{
                  scale: mobileImageScale,
                }}
                className="relative mb-10 aspect-[3/2] w-full overflow-hidden"
              >
                <motion.div
                  style={{
                    opacity: mobileFullImageOpacity,
                    backgroundImage: "url('/london_finance.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="absolute inset-0"
                />

                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    clipPath: "polygon(0% 0%, 43% 0%, 33% 100%, 0% 100%)",
                  }}
                >
                  <motion.div
                    style={{
                      clipPath: mobileLeftReveal,
                      backgroundImage: "url('/london_finance.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="absolute inset-0"
                  />
                </div>

                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    clipPath: "polygon(36% 0%, 76% 0%, 66% 100%, 26% 100%)",
                  }}
                >
                  <motion.div
                    style={{
                      clipPath: mobileMiddleReveal,
                      backgroundImage: "url('/london_finance.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="absolute inset-0"
                  />
                </div>

                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    clipPath: "polygon(69% 0%, 100% 0%, 100% 100%, 59% 100%)",
                  }}
                >
                  <motion.div
                    style={{
                      clipPath: mobileRightReveal,
                      backgroundImage: "url('/london_finance.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="absolute inset-0"
                  />
                </div>
              </motion.div>

              {/* MOBILE INFO */}

              <div className="bg-white pb-14">
                <div className="mb-10">
                  <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b7d88]">
                    Practical Expertise · Regulatory Focus · Global Reach · Est.
                    2002
                  </p>
                </div>

                {/* MOBILE FEATURE SELECTOR */}

                <div className="border-t border-[#10283b]/10 pt-8">
                  <div className="grid grid-cols-4 gap-2">
                    {featureCards.map(({ title, icon: Icon }, index) => {
                      const isActive = mobileActiveFeature === index;

                      return (
                        <button
                          key={title}
                          type="button"
                          aria-label={title}
                          onClick={() => setMobileActiveFeature(index)}
                          className="flex flex-col items-center"
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#edf3f6] text-[#2d7fa8]">
                            <Icon size={24} strokeWidth={1.8} />
                          </div>

                          <span
                            className={`mt-3 h-[2px] rounded-full transition-all duration-300 ${
                              isActive
                                ? "w-9 bg-[#2d7fa8]"
                                : "w-5 bg-transparent"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-7 min-h-[170px] border-t border-[#10283b]/10 pt-6">
                    <motion.div
                      key={mobileActiveFeature}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: smoothEase,
                      }}
                    >
                      <h3 className="font-display text-[1.65rem] font-semibold leading-[1.05] text-[#10283b]">
                        {featureCards[mobileActiveFeature].title}
                      </h3>

                      <p className="mt-4 text-[13px] leading-[1.8] text-[#51616d]">
                        {featureCards[mobileActiveFeature].description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DESKTOP HOVER TEXT AREA */}

        <div className="hidden min-h-[150px] border-b border-[#10283b]/10 bg-[#f8f7f2] lg:block">
          <div className="mx-auto flex min-h-[150px] max-w-[1500px] items-center px-12 xl:px-16">
            {activeFeature !== null && (
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: smoothEase,
                }}
                className="mx-auto max-w-[850px] text-center"
              >
                <p className="text-[13px] leading-[1.8] text-[#51616d]">
                  {featureCards[activeFeature].description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
