"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  "Home",
  "Pricing",
  "Services",
  "Recruitment",
  "About Us",
  "Contact Us",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#10283b]/10 bg-[#f8f7f2]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[94px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Logo */}
        <Link
          href="#"
          aria-label="Alpha Capital Compliance home"
          className="relative block h-[58px] w-[215px] shrink-0 sm:h-[62px] sm:w-[240px]"
        >
          <Image
            src="/alphanewlogo.png"
            alt="Alpha Capital Compliance"
            fill
            priority
            sizes="(max-width: 640px) 215px, 240px"
            className="object-contain object-left"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          {navItems.map((item, index) => (
            <Link
              key={item}
              href="#"
              className={`group relative py-3 text-[13px] font-semibold tracking-[0.01em] transition-colors duration-300 ${
                index === 0
                  ? "text-[#267da7]"
                  : "text-[#263746] hover:text-[#267da7]"
              }`}
            >
              {item}

              <span
                className={`absolute bottom-[5px] left-0 h-[1.5px] bg-[#267da7] transition-all duration-300 ease-out ${
                  index === 0
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="ml-1 flex h-10 w-10 items-center justify-center text-[#263746] transition-all duration-300 hover:text-[#267da7]"
          >
            <Search size={18} strokeWidth={1.8} />
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            aria-label="Search"
            className="flex h-11 w-11 items-center justify-center text-[#10283b] transition-colors duration-300 hover:text-[#267da7]"
          >
            <Search size={20} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center text-[#10283b] transition-colors duration-300 hover:text-[#267da7]"
          >
            {mobileOpen ? (
              <X size={25} strokeWidth={1.6} />
            ) : (
              <Menu size={26} strokeWidth={1.6} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-[#f8f7f2] transition-[max-height,opacity] duration-500 ease-out lg:hidden ${
          mobileOpen
            ? "max-h-[550px] border-t border-[#10283b]/10 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto max-w-[1500px] px-5 pb-7 pt-3 sm:px-8"
        >
          {navItems.map((item, index) => (
            <Link
              key={item}
              href="#"
              onClick={() => setMobileOpen(false)}
              className="group flex items-center justify-between border-b border-[#10283b]/10 py-[18px]"
            >
              <div className="flex items-center gap-5">
                <span className="text-[10px] font-semibold tracking-[0.14em] text-[#7d8991]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`text-[18px] font-medium tracking-[-0.02em] ${
                    index === 0
                      ? "text-[#267da7]"
                      : "text-[#10283b]"
                  }`}
                >
                  {item}
                </span>
              </div>

              <span className="text-[20px] font-light text-[#849099] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#267da7]">
                →
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}