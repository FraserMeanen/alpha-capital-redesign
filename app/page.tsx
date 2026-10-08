"use client";
import Image from "next/image";
import Header from "@/app/components/header";
import LatestNews from "./components/latest-news";
import Affiliations from "@/app/components/affiliations";
import Footer from "@/app/components/footer";
import { useRouter } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  RefreshCw,
  Lock,
  Calculator,
  ChartColumn,
  ClipboardCheck,
  FileText,
  CreditCard,
  LogIn,
  CornerUpRight,
  ArrowUpRight,
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
const serviceItems = [
  {
    title: "Compliance Services",
    description:
      "ACCL can assist you with financial services compliance not only in the UK and wider EU, but in all global jurisdictions.",
    icon: ClipboardCheck,
  },
  {
    title: "Compliance Documentation",
    description:
      "ACCL can supply Compliance documents as part of a managed project or on an ad-hoc basis.",
    icon: FileText,
  },
  {
    title: "Money Laundering Prevention",
    description:
      "ACCL is well placed to help you with all issues relating to Money Laundering Prevention.",
    icon: CreditCard,
  },
  {
    title: "Applications For Authorisation",
    description:
      "ACCL can help you to obtain authorisation from regulators both in the UK and abroad.",
    icon: LogIn,
  },
  {
    title: "FCA Financial Returns",
    description:
      "At ACCL our own models for collating data have been validated by reputable London based auditors.",
    icon: ChartColumn,
  },
  {
    title: "Other FCA Returns",
    description:
      "ACCL can project manage your FCA GABRIEL schedule in an efficient and timely fashion.",
    icon: CornerUpRight,
  },
];

const partnerItems = [
  {
    name: "AMLBenson",
    description: "Chartered Accountants",
    website: "www.amlbenson.co.uk",
    url: "https://www.amlbenson.co.uk",
    logo: "/ambleson.jpg",
  },
  {
    name: "Arkk Solutions UK",
    description: "XBRL conversion software",
    website: "www.arkksolutions.com",
    url: "https://www.arkksolutions.com",
    logo: "/arkksolutions.jpg",
  },
  {
    name: "Complyport Ltd",
    description: "Compliance consultants",
    website: "www.complyport.com",
    url: "https://www.complyport.com",
    logo: "/complyport.jpg",
  },
  {
    name: "S H Landes LLP",
    description: "Chartered Accountants",
    website: "www.shlandes.com",
    url: "https://www.shlandes.com",
    logo: "/shlandes.jpg",
  },
  {
    name: "Quaife",
    description: "Payments in 190 currencies worldwide",
    website: "www.quaife.net",
    url: "https://www.quaife.net",
    logo: "/Quaife-1.png",
  },
];

const smoothEase = [0.65, 0, 0.35, 1] as const;
export default function Home() {
  const router = useRouter();
  const heroRef = useRef<HTMLElement>(null);
  const mobileImageRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isFeatureHovered, setIsFeatureHovered] = useState(false);
  const [mobileActiveFeature, setMobileActiveFeature] = useState(0);
  const [mobileActiveService, setMobileActiveService] = useState(0);
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
  // Desktop feature rotation: 10 seconds per item, paused during interaction.
  useEffect(() => {
    if (!heroVisible || isFeatureHovered) return;
    const interval = window.setInterval(() => {
      setActiveFeature((previous) => (previous + 1) % featureCards.length);
    }, 10000);
    return () => window.clearInterval(interval);
  }, [heroVisible, isFeatureHovered]);
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
                  <button
                    onClick={() => router.push("/contact-us")}
                    className="group inline-flex h-[54px] items-center gap-4 rounded-[4px] bg-[#214f78] px-7 text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-[#173e60]"
                  >
                    Talk to Alpha
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                  <button
                    onClick={() => router.push("/services")}
                    className="group inline-flex h-[54px] items-center gap-4 px-1 text-[14px] font-semibold text-[#183247]"
                  >
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
                {/* DESKTOP FEATURE SELECTOR */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.72 }}
                  onMouseEnter={() => setIsFeatureHovered(true)}
                  onMouseLeave={() => setIsFeatureHovered(false)}
                  onFocus={() => setIsFeatureHovered(true)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setIsFeatureHovered(false);
                    }
                  }}
                  className="relative mt-7 rounded-t-[3px] border-x border-t border-[#10283b]/10 bg-white/70 px-3 pt-3"
                >
                  <div className="grid grid-cols-4">
                    {featureCards.map(({ title, icon: Icon }, index) => {
                      const isActive = activeFeature === index;
                      return (
                        <button
                          key={title}
                          type="button"
                          onMouseEnter={() => setActiveFeature(index)}
                          onFocus={() => setActiveFeature(index)}
                          onClick={() => setActiveFeature(index)}
                          aria-label={title}
                          aria-pressed={isActive}
                          className={`relative flex min-h-[100px] w-full flex-col items-center px-1 pb-1 text-center focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2d7fa8] ${
                            index === 0 ? "" : "border-l border-[#10283b]/10"
                          }`}
                        >
                          <span
                            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition-colors duration-500 ${
                              isActive
                                ? "bg-[#2d7fa8] text-white"
                                : "bg-[#edf3f6] text-[#2d7fa8]"
                            }`}
                          >
                            <Icon size={24} strokeWidth={1.8} />
                          </span>
                          <span className="mt-2 min-h-[34px] text-[11px] font-semibold leading-[1.35] text-[#10283b]">
                            {title}
                          </span>
                          {isActive && (
                            <motion.span
                              layoutId="desktop-feature-indicator"
                              className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#2d7fa8]"
                              transition={{
                                type: "spring",
                                stiffness: 250,
                                damping: 28,
                              }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {/* Description visually joined to the selector, without resizing the hero. */}
                  <div className="pointer-events-none absolute -left-px -right-px top-full z-30 min-h-[88px] rounded-b-[3px] border-x border-b border-t border-[#10283b]/10 bg-white/70 px-5 py-3">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.p
                        key={activeFeature}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.3, ease: smoothEase }}
                        className="text-[13px] font-semibold leading-[1.55] text-[#10283b]"
                      >
                        {featureCards[activeFeature].description}
                      </motion.p>
                    </AnimatePresence>
                  </div>
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
                  <button
                    onClick={() => router.push("/contact-us")}
                    className="inline-flex h-[52px] items-center gap-4 rounded-[4px] bg-[#214f78] px-6 text-[14px] font-semibold text-white"
                  >
                    Talk to Alpha
                    <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={() => router.push("/services")}
                    className="inline-flex h-[52px] items-center gap-3 px-1 text-[14px] font-semibold text-[#183247]"
                  >
                    Explore our services
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#10283b]/20">
                      <ArrowRight size={15} />
                    </span>
                  </button>
                </div>
              </div>
              {/* MOBILE IMAGE */}
              <div
                ref={mobileImageRef}
                className="relative mb-10 aspect-[3/2] w-full overflow-hidden"
              >
                <motion.div
                  style={{ scale: mobileImageScale }}
                  className="absolute inset-0 transform-gpu will-change-transform"
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
              </div>
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
        <LatestNews />
        <Affiliations />

        {/* SERVICES — DESKTOP GRID / MOBILE INTERACTIVE SELECTOR */}
        <section
          id="services"
          aria-labelledby="home-services-heading"
          className="relative overflow-hidden border-b border-[#10283b]/10 bg-[#f8f7f2] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24 xl:px-16"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-9 text-center lg:mb-12 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:text-left">
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]">
                  What we do
                </p>
                <motion.h2
                  id="home-services-heading"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.75, ease: smoothEase }}
                  className="font-display text-[3rem] leading-[0.95] tracking-[-0.025em] text-[#10283b] sm:text-[3.7rem] lg:text-[4.4rem]"
                >
                  Our <span className="text-[#2d7fa8]">services.</span>
                </motion.h2>
              </div>

              <p className="mx-auto mt-5 max-w-[430px] text-[13px] leading-[1.8] text-[#51616d] sm:text-[14px] lg:mx-0 lg:mb-1 lg:mt-0">
                Open to both local and global investment and payment services
                firms.
              </p>
            </div>

            {/* DESKTOP: OPEN EDITORIAL GRID, NOT FLOATING CARDS */}
            <div className="hidden grid-cols-3 gap-x-10 lg:grid">
              {serviceItems.map(({ title, description, icon: Icon }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: (index % 3) * 0.08,
                    ease: smoothEase,
                  }}
                  className={`group flex min-h-[265px] flex-col border-b border-[#10283b]/15 py-8 ${
                    index < 3 ? "border-t" : ""
                  }`}
                >
                  <div className="mb-6 flex items-start justify-between">
                    <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#e4eff4] text-[#2d7fa8] transition-colors duration-300 group-hover:bg-[#2d7fa8] group-hover:text-white">
                      <Icon size={23} strokeWidth={1.7} />
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-2 h-px w-8 bg-[#2d7fa8]/45"
                    />
                  </div>

                  <h3 className="font-display text-[1.95rem] leading-[1.06] tracking-[-0.015em] text-[#10283b] xl:text-[2.15rem]">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-[365px] text-[13px] leading-[1.75] text-[#51616d]">
                    {description}
                  </p>
                  <button
                    type="button"
                    onClick={() => router.push("/services")}
                    className="group/link mt-auto inline-flex w-fit items-center gap-3 pt-6 text-[12px] font-semibold text-[#214f78] transition-colors duration-300 hover:text-[#2d7fa8]"
                  >
                    Find out more
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </button>
                </motion.article>
              ))}
            </div>

            {/* MOBILE: TAP A SERVICE ICON TO REVEAL ITS DETAILS */}
            <div className="lg:hidden">
              <div className="grid grid-cols-3 gap-x-3 gap-y-5 border-t border-[#10283b]/10 pt-7">
                {serviceItems.map(({ title, icon: Icon }, index) => {
                  const isActive = mobileActiveService === index;

                  return (
                    <button
                      key={title}
                      type="button"
                      aria-label={title}
                      aria-pressed={isActive}
                      onClick={() => setMobileActiveService(index)}
                      className="flex flex-col items-center text-center"
                    >
                      <span
                        className={`flex h-[56px] w-[56px] items-center justify-center rounded-full transition-colors duration-300 ${
                          isActive
                            ? "bg-[#2d7fa8] text-white"
                            : "bg-[#e4eff4] text-[#2d7fa8]"
                        }`}
                      >
                        <Icon size={23} strokeWidth={1.8} />
                      </span>
                      <span className="mt-2 min-h-[37px] max-w-[110px] text-[10px] font-semibold leading-[1.3] text-[#10283b] sm:text-[11px]">
                        {title}
                      </span>
                      <span
                        className={`mt-2 h-[2px] rounded-full transition-all duration-300 ${
                          isActive ? "w-9 bg-[#2d7fa8]" : "w-5 bg-transparent"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="mt-7 min-h-[205px] border-t border-[#10283b]/10 pt-6">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={mobileActiveService}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: smoothEase }}
                  >
                    <h3 className="font-display text-[1.8rem] leading-[1.05] text-[#10283b]">
                      {serviceItems[mobileActiveService].title}
                    </h3>
                    <p className="mt-3 max-w-[550px] text-[13px] leading-[1.8] text-[#51616d]">
                      {serviceItems[mobileActiveService].description}
                    </p>
                    <button
                      type="button"
                      onClick={() => router.push("/services")}
                      className="mt-5 inline-flex items-center gap-3 text-[13px] font-semibold text-[#214f78]"
                    >
                      Find out more
                      <ArrowRight size={16} />
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS — FIVE COLUMNS DESKTOP / COMPACT ROWS MOBILE */}
        <section
          id="partners"
          aria-labelledby="home-partners-heading"
          className="border-b border-[#10283b]/10 bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.23em] text-[#2d7fa8]">
                  Professional network
                </p>
                <motion.h2
                  id="home-partners-heading"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.75, ease: smoothEase }}
                  className="font-display text-[3rem] leading-[0.95] tracking-[-0.025em] text-[#10283b] sm:text-[3.7rem] lg:text-[4.4rem]"
                >
                  Our <span className="text-[#2d7fa8]">partners.</span>
                </motion.h2>
              </div>
              <p className="max-w-[370px] text-[13px] leading-[1.75] text-[#51616d] sm:text-[14px]">
                Specialist organisations across compliance, accounting,
                technology and payments.
              </p>
            </div>

            <div className="grid grid-cols-1 border-y border-[#10283b]/10 lg:grid-cols-5">
              {partnerItems.map((partner, index) => (
                <motion.a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${partner.name} website (opens in a new tab)`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                    ease: smoothEase,
                  }}
                  className="group flex min-h-[94px] items-center justify-between gap-4 border-b border-[#10283b]/10 px-1 py-4 transition-colors duration-300 last:border-b-0 hover:bg-[#f2f7f9] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2d7fa8] lg:min-h-[202px] lg:flex-col lg:items-start lg:justify-start lg:gap-3 lg:border-b-0 lg:border-l lg:px-5 lg:py-7 lg:first:border-l-0 xl:px-7"
                >
                  <div className="min-w-0 lg:w-full">
                    <h3 className="sr-only">{partner.name}</h3>
                    <div className="relative h-[54px] w-[175px] max-w-full sm:h-[60px] sm:w-[195px] lg:h-[64px] lg:w-full">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        fill
                        sizes="(max-width: 640px) 175px, (max-width: 1023px) 195px, 225px"
                        className="object-contain object-left"
                      />
                    </div>
                    <p className="mt-2 text-[12px] leading-[1.55] text-[#61717c] lg:mt-4 lg:min-h-[56px]">
                      {partner.description}
                    </p>
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-2 text-[11px] font-semibold text-[#2d7fa8] transition-colors duration-300 group-hover:text-[#10283b] lg:mt-auto">
                    <span className="hidden xl:inline">{partner.website}</span>
                    <span className="hidden lg:inline xl:hidden">
                      Visit website
                    </span>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
