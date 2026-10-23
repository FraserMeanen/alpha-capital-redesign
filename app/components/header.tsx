"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Mail, Menu, Phone, Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SiteSearch from "./site-search";

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Compliance Services",
        href: "/services/compliance_services",
      },
      {
        label: "Compliance Documentation",
        href: "/services/compliance_documentation",
      },
      {
        label: "Money Laundering Prevention",
        href: "/services/money_laundering_prevention",
      },
      {
        label: "Applications For Regulatory Authorisation",
        href: "/services/applications_for_regulatory_authorisation",
      },
      {
        label: "FCA Financial Returns",
        href: "/services/fca_financial_returns",
      },
      {
        label: "Other FCA Returns",
        href: "/services/other_fca_returns",
      },
      {
        label: "UK And Global Company Formations",
        href: "/services/uk_and_global_company_formations",
      },
    ],
  },
  {
    label: "Recruitment",
    href: "/recruitment/candidates",
    children: [
      {
        label: "For Candidates",
        href: "/recruitment/candidates",
      },
      {
        label: "For Companies",
        href: "/recruitment/companies",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [desktopOpenMenu, setDesktopOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  const isRecruitmentActive =
    pathname === "/recruitment" || pathname.startsWith("/recruitment/");

  const isItemActive = (item: NavItem) => {
    if (item.label === "Services") return isServicesActive;
    if (item.label === "Recruitment") return isRecruitmentActive;
    return pathname === item.href;
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileMenu = () => {
    if (mobileOpen) {
      closeMobileMenu();
      return;
    }

    setMobileOpen(true);

    if (isServicesActive) {
      setMobileExpanded("Services");
    } else if (isRecruitmentActive) {
      setMobileExpanded("Recruitment");
    } else {
      setMobileExpanded(null);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#10283b]/10 bg-[#f8f7f2]/95 backdrop-blur-xl">
      {/* CONTACT STRIP */}
      <div className="border-b border-[#10283b]/10 bg-white/90">
        <div className="mx-auto flex h-[37px] max-w-[1500px] items-center justify-between gap-3 px-5 sm:justify-start sm:gap-7 sm:px-8 lg:px-12 xl:px-16">
          <a
            href="tel:+441268661696"
            aria-label="Call Alpha Capital Compliance on +44 (0) 1268 661 696"
            className="inline-flex shrink-0 items-center gap-2 text-[11px] font-medium text-[#52616d] transition-colors duration-300 hover:text-[#2d7fa8] sm:text-[12px]"
          >
            <Phone size={13} strokeWidth={1.9} aria-hidden="true" />

            <span className="min-[470px]:hidden">Call us</span>

            <span className="hidden min-[470px]:inline">
              +44 (0) 1268 661 696
            </span>
          </a>

          <a
            href="mailto:info@alphaccl.co.uk"
            className="inline-flex min-w-0 items-center gap-2 text-[11px] font-medium text-[#2d7fa8] transition-colors duration-300 hover:text-[#214f78] sm:text-[12px]"
          >
            <Mail
              size={14}
              strokeWidth={1.8}
              className="shrink-0 text-[#52616d]"
              aria-hidden="true"
            />

            <span>info@alphaccl.co.uk</span>
          </a>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="mx-auto flex h-[94px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* LOGO */}
        <Link
          href="/"
          aria-label="Alpha Capital Compliance home"
          className="relative block h-[58px] w-[215px] shrink-0 sm:h-[62px] sm:w-[240px]"
        >
          <Image
            src="/alphanewlogo.png"
            alt="Alpha Capital Compliance"
            loading="eager"
            fill
            priority
            sizes="(max-width: 640px) 215px, 240px"
            className="object-contain object-left"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          {navItems.map((item) => {
            const isActive = isItemActive(item);

            {
              /* SERVICES AND RECRUITMENT DROPDOWNS */
            }
            if (item.children) {
              const isOpen = desktopOpenMenu === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDesktopOpenMenu(item.label)}
                  onMouseLeave={() =>
                    setDesktopOpenMenu((current) =>
                      current === item.label ? null : current,
                    )
                  }
                  onFocus={() => setDesktopOpenMenu(item.label)}
                  onBlur={(event) => {
                    if (
                      !event.currentTarget.contains(
                        event.relatedTarget as Node | null,
                      )
                    ) {
                      setDesktopOpenMenu((current) =>
                        current === item.label ? null : current,
                      );
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      event.preventDefault();
                      setDesktopOpenMenu(null);
                      event.currentTarget.querySelector("a")?.focus();
                    }
                  }}
                >
                  {/* MAIN NAVIGATION LINK */}
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`group relative flex items-center gap-1.5 py-3 text-[13px] font-semibold tracking-[0.01em] transition-colors duration-300 ${
                      isActive
                        ? "text-[#267da7]"
                        : "text-[#263746] hover:text-[#267da7]"
                    }`}
                  >
                    {item.label}

                    <ChevronDown
                      size={14}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />

                    <span
                      className={`absolute bottom-[5px] left-0 h-[1.5px] bg-[#267da7] transition-all duration-300 ease-out ${
                        isActive || isOpen ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>

                  {/* DESKTOP DROPDOWN */}
                  <div
                    className={`absolute left-1/2 top-full z-50 -translate-x-1/2 border-t-2 border-[#267da7] bg-[#f8f7f2] p-2 shadow-[0_18px_45px_rgba(16,40,59,0.13)] transition-[opacity,transform,visibility] duration-300 ${
                      item.label === "Services" ? "w-[360px]" : "w-[230px]"
                    } ${
                      isOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible pointer-events-none translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="max-h-[65vh] overflow-y-auto">
                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href;

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            aria-current={isChildActive ? "page" : undefined}
                            tabIndex={isOpen ? 0 : -1}
                            onClick={() => setDesktopOpenMenu(null)}
                            className={`group flex items-center justify-between gap-4 px-4 py-3.5 text-[13px] font-medium leading-[1.5] transition-all duration-300 ${
                              isChildActive
                                ? "bg-[#267da7]/10 text-[#267da7]"
                                : "text-[#263746] hover:bg-[#267da7]/10 hover:text-[#267da7]"
                            }`}
                          >
                            <span>{child.label}</span>

                            <span
                              aria-hidden="true"
                              className={`shrink-0 text-[#267da7] transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 ${
                                isChildActive ? "opacity-100" : "opacity-0"
                              }`}
                            >
                              →
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            {
              /* STANDARD DESKTOP NAVIGATION LINK */
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative py-3 text-[13px] font-semibold tracking-[0.01em] transition-colors duration-300 ${
                  isActive
                    ? "text-[#267da7]"
                    : "text-[#263746] hover:text-[#267da7]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-[5px] left-0 h-[1.5px] bg-[#267da7] transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          {/* DESKTOP SEARCH */}
          <button
            type="button"
            aria-label="Search the website"
            aria-haspopup="dialog"
            onClick={() => {
              setDesktopOpenMenu(null);
              setSearchOpen(true);
            }}
            className="ml-1 flex h-10 w-10 items-center justify-center text-[#263746] transition-all duration-300 hover:text-[#267da7]"
          >
            <Search size={18} strokeWidth={1.8} />
          </button>
        </nav>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            aria-label="Search the website"
            aria-haspopup="dialog"
            onClick={() => {
              closeMobileMenu();
              setSearchOpen(true);
            }}
            className="flex h-11 w-11 items-center justify-center text-[#10283b] transition-colors duration-300 hover:text-[#267da7]"
          >
            <Search size={20} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMobileMenu}
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

      {/* MOBILE MENU */}
      <div
        id="mobile-navigation"
        inert={!mobileOpen}
        className={`bg-[#f8f7f2] transition-[max-height,opacity] duration-500 ease-out lg:hidden ${
          mobileOpen
            ? "max-h-[calc(100dvh-131px)] overflow-y-auto border-t border-[#10283b]/10 opacity-100"
            : "max-h-0 overflow-hidden border-transparent opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto max-w-[1500px] px-5 pb-7 pt-3 sm:px-8"
        >
          {navItems.map((item) => {
            const isActive = isItemActive(item);

            {
              /* MOBILE SERVICES AND RECRUITMENT */
            }
            if (item.children) {
              const isExpanded = mobileExpanded === item.label;

              return (
                <div key={item.label} className="border-b border-[#10283b]/10">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`mobile-submenu-${item.label.toLowerCase()}`}
                    onClick={() =>
                      setMobileExpanded((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                    className="group flex w-full items-center justify-between py-[18px] text-left"
                  >
                    <span
                      className={`text-[18px] font-medium tracking-[-0.02em] ${
                        isActive ? "text-[#267da7]" : "text-[#10283b]"
                      }`}
                    >
                      {item.label}
                    </span>

                    <ChevronDown
                      size={20}
                      strokeWidth={1.6}
                      className={`text-[#849099] transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-[#267da7]" : ""
                      }`}
                    />
                  </button>

                  {/* MOBILE SUBMENU */}
                  <div
                    id={`mobile-submenu-${item.label.toLowerCase()}`}
                    inert={!isExpanded}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mb-3 border-l-2 border-[#267da7]/40 pl-5">
                        {/* LINK TO MAIN SERVICES DIRECTORY */}
                        {item.label === "Services" && (
                          <Link
                            href="/services"
                            aria-current={
                              pathname === "/services" ? "page" : undefined
                            }
                            onClick={closeMobileMenu}
                            className={`group flex items-center justify-between gap-4 py-3 text-[15px] transition-colors duration-300 ${
                              pathname === "/services"
                                ? "font-semibold text-[#267da7]"
                                : "text-[#52616d] hover:text-[#267da7]"
                            }`}
                          >
                            All Services
                            <span
                              aria-hidden="true"
                              className="text-[#849099] transition-transform duration-300 group-hover:translate-x-1"
                            >
                              →
                            </span>
                          </Link>
                        )}

                        {/* CHILD PAGE LINKS */}
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.href;

                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              aria-current={isChildActive ? "page" : undefined}
                              onClick={closeMobileMenu}
                              className={`group flex items-center justify-between gap-4 py-3 text-[15px] leading-[1.5] transition-colors duration-300 ${
                                isChildActive
                                  ? "font-semibold text-[#267da7]"
                                  : "text-[#52616d] hover:text-[#267da7]"
                              }`}
                            >
                              <span>{child.label}</span>

                              <span
                                aria-hidden="true"
                                className="shrink-0 text-[#849099] transition-transform duration-300 group-hover:translate-x-1"
                              >
                                →
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            {
              /* STANDARD MOBILE NAVIGATION LINK */
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={closeMobileMenu}
                className="group flex items-center justify-between border-b border-[#10283b]/10 py-[18px]"
              >
                <span
                  className={`text-[18px] font-medium tracking-[-0.02em] ${
                    isActive ? "text-[#267da7]" : "text-[#10283b]"
                  }`}
                >
                  {item.label}
                </span>

                <span
                  aria-hidden="true"
                  className="text-[20px] font-light text-[#849099] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#267da7]"
                >
                  →
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      <SiteSearch
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onOpen={() => {
          closeMobileMenu();
          setDesktopOpenMenu(null);
          setSearchOpen(true);
        }}
      />
    </header>
  );
}
