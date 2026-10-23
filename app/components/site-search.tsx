"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, LoaderCircle, Search, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";

type SearchPage = {
  title: string;
  href: string;
  category: string;
  summary: string;
  keywords?: string;
  content?: string;
};

type SiteSearchProps = {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const sitePages: SearchPage[] = [
  {
    title: "Home",
    href: "/",
    category: "Main pages",
    summary:
      "Alpha Capital Compliance financial services consultancy, compliance and recruitment.",
  },
  {
    title: "Pricing",
    href: "/pricing",
    category: "Main pages",
    summary: "Pricing, service fees and costs.",
  },
  {
    title: "Services",
    href: "/services",
    category: "Main pages",
    summary:
      "Explore compliance services, documentation, money laundering prevention, regulatory authorisation, FCA returns and company formations.",
  },
  {
    title: "Compliance Services",
    href: "/services/compliance_services",
    category: "Services",
    summary:
      "Financial services compliance in the UK, EU and other global jurisdictions.",
  },
  {
    title: "Compliance Documentation",
    href: "/services/compliance_documentation",
    category: "Services",
    summary:
      "Compliance manuals, policies, procedures, account opening documents and FCA applications.",
    keywords: "documents templates licensing",
  },
  {
    title: "Money Laundering Prevention",
    href: "/services/money_laundering_prevention",
    category: "Services",
    summary:
      "Money laundering prevention, KYC, due diligence, sanctions, FATF and financial crime regulations.",
    keywords: "AML CDD EDD PEP POCA high risk jurisdictions",
  },
  {
    title: "Applications For Regulatory Authorisation",
    href: "/services/applications_for_regulatory_authorisation",
    category: "Services",
    summary:
      "FCA licence applications, regulatory authorisation and application fees.",
    keywords: "license licence regulators 70% commencement 30% authorisation",
  },
  {
    title: "FCA Financial Returns",
    href: "/services/fca_financial_returns",
    category: "Services",
    summary:
      "Financial reporting, Excel models, COREP, XBRL and Arkk Solutions.",
    keywords: "trial balance auditors returns",
  },
  {
    title: "Other FCA Returns",
    href: "/services/other_fca_returns",
    category: "Services",
    summary:
      "Financial and other FCA regulatory returns, reporting schedules and submissions.",
    keywords: "GABRIEL reporting",
  },
  {
    title: "UK And Global Company Formations",
    href: "/services/uk_and_global_company_formations",
    category: "Services",
    summary:
      "Company incorporation in the UK, EU and other global jurisdictions.",
    keywords: "formation business registration international",
  },
  {
    title: "For Candidates",
    href: "/recruitment/candidates",
    category: "Recruitment",
    summary:
      "Recruitment information for candidates seeking financial services opportunities.",
    keywords: "jobs careers vacancies CV",
  },
  {
    title: "For Companies",
    href: "/recruitment/companies",
    category: "Recruitment",
    summary: "Recruitment services for companies seeking candidates.",
    keywords: "hiring employers recruitment",
  },
  {
    title: "About Us",
    href: "/about-us",
    category: "Main pages",
    summary: "About Alpha Capital Compliance and its consultancy.",
    keywords: "Paul company",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    category: "Main pages",
    summary: "Contact Alpha Capital Compliance with an enquiry.",
    keywords: "info@alphaccl.co.uk support@alphaccl.co.uk phone email",
  },
];

// Read each page's main content so actual website text is searchable.
let indexPromise: Promise<SearchPage[]> | null = null;

function indexSitePages(): Promise<SearchPage[]> {
  if (!indexPromise) {
    indexPromise = Promise.all(
      sitePages.map(async (page) => {
        try {
          const response = await fetch(page.href, {
            headers: { Accept: "text/html" },
          });

          if (!response.ok) return page;

          const html = await response.text();
          const parsed = new DOMParser().parseFromString(html, "text/html");

          const main = parsed.querySelector("main");

          if (!main) return page;

          const content = main.cloneNode(true) as HTMLElement;

          // Remove repeated service navigation from search results.
          content.querySelectorAll("section").forEach((section) => {
            const heading = section.querySelector("h2")?.textContent || "";

            if (heading.toLowerCase().includes("explore more services")) {
              section.remove();
            }
          });

          content
            .querySelectorAll(
              "script, style, svg, noscript, nav, footer, header, button, [aria-hidden='true'], [data-search-exclude]",
            )
            .forEach((element) => element.remove());

          const text = (content.textContent || "").replace(/\s+/g, " ").trim();

          return {
            ...page,
            content: text || undefined,
          };
        } catch {
          return page;
        }
      }),
    );
  }

  return indexPromise;
}

function normalize(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9%]+/g, " ")
    .trim();
}

function rankPage(page: SearchPage, query: string): number {
  const terms = normalize(query).split(/\s+/).filter(Boolean);

  if (!terms.length) return 0;

  const title = normalize(page.title);
  const summary = normalize(page.summary);
  const keywords = normalize(page.keywords || "");
  const content = normalize(page.content || "");

  const searchable = [title, summary, keywords, content].join(" ");

  if (!terms.every((term) => searchable.includes(term))) {
    return 0;
  }

  const phrase = normalize(query);

  let score = 1;

  if (title === phrase) score += 100;
  if (title.includes(phrase)) score += 40;
  if (summary.includes(phrase)) score += 15;
  if (content.includes(phrase)) score += 8;

  for (const term of terms) {
    if (title.includes(term)) score += 14;
    if (summary.includes(term)) score += 6;
    if (keywords.includes(term)) score += 4;
    if (content.includes(term)) score += 2;
  }

  return score;
}

function snippetFor(page: SearchPage, query: string): string {
  const content = page.content || page.summary;
  const terms = normalize(query).split(/\s+/).filter(Boolean);

  const lower = content.toLowerCase();

  const positions = terms
    .map((term) => lower.indexOf(term))
    .filter((position) => position >= 0);

  if (!positions.length) return page.summary;

  const match = Math.min(...positions);
  const start = Math.max(0, match - 45);
  const end = Math.min(content.length, match + 110);

  return (
    `${start > 0 ? "…" : ""}` +
    content.slice(start, end).trim() +
    `${end < content.length ? "…" : ""}`
  );
}

export default function SiteSearch({ open, onClose, onOpen }: SiteSearchProps) {
  const router = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");
  const [pages, setPages] = useState<SearchPage[]>(sitePages);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Keyboard shortcuts.
  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();

        if (!open) {
          onOpen();
        } else {
          inputRef.current?.focus();
        }
      }

      if (event.key === "Escape" && open) {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [open, onOpen, onClose]);

  // Focus the input and build the search index when opened.
  useEffect(() => {
    if (!open) return;

    let cancelled = false;

    const frame = window.requestAnimationFrame(() => {
      if (cancelled) return;

      setQuery("");
      setActiveIndex(0);
      setLoading(true);

      inputRef.current?.focus();

      void indexSitePages().then((indexed) => {
        if (!cancelled) {
          setPages(indexed);
          setLoading(false);
        }
      });
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [open]);

  // Close search when clicking elsewhere on the page.
  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    if (!normalize(query)) return [];

    return pages
      .map((page) => ({
        page,
        score: rankPage(page, query),
      }))
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [pages, query]);

  function navigate(href: string) {
    onClose();
    router.push(href);
  }

  function handleKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown" && results.length) {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % results.length);
    }

    if (event.key === "ArrowUp" && results.length) {
      event.preventDefault();
      setActiveIndex(
        (current) => (current - 1 + results.length) % results.length,
      );
    }

    if (event.key === "Enter" && results.length) {
      event.preventDefault();

      const selected = results[Math.min(activeIndex, results.length - 1)];

      navigate(selected.page.href);
    }
  }

  if (!open || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      ref={containerRef}
      className="fixed inset-x-0 top-[131px] z-[60] border-b border-[#10283b]/15 bg-[#f8f7f2] shadow-[0_16px_36px_rgba(16,40,59,0.10)]"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* INTEGRATED SEARCH BAR */}
        <div className="flex h-[76px] items-center gap-4">
          <Search
            size={21}
            strokeWidth={1.7}
            className="shrink-0 text-[#2d7fa8]"
            aria-hidden="true"
          />

          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search the website..."
            aria-label="Search the website"
            autoComplete="off"
            className="h-full min-w-0 flex-1 bg-transparent text-[16px] font-medium text-[#10283b] outline-none placeholder:font-normal placeholder:text-[#849099] sm:text-[19px]"
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] text-[#51616d] transition-colors hover:bg-[#10283b]/5 hover:text-[#2d7fa8]"
          >
            <X size={21} strokeWidth={1.7} />
          </button>
        </div>

        {/* RESULTS APPEAR ONLY WHILE TYPING */}
        {normalize(query) && (
          <div className="max-h-[min(55vh,450px)] overflow-y-auto border-t border-[#10283b]/10 pb-4 pt-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#849099]">
                {results.length}{" "}
                {results.length === 1 ? "matching page" : "matching pages"}
              </p>

              {loading && (
                <span className="inline-flex items-center gap-2 text-[11px] text-[#657783]">
                  <LoaderCircle size={14} className="animate-spin" />
                  Searching
                </span>
              )}
            </div>

            {results.length > 0 ? (
              <div className="divide-y divide-[#10283b]/10">
                {results.map(({ page }, index) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    onClick={onClose}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`group flex items-center justify-between gap-5 px-3 py-3.5 transition-colors duration-200 hover:bg-[#2d7fa8]/[0.06] ${
                      activeIndex === index ? "bg-[#2d7fa8]/[0.06]" : ""
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.13em] text-[#2d7fa8]">
                        {page.category}
                      </p>

                      <h3 className="text-[14px] font-semibold text-[#10283b] sm:text-[15px]">
                        {page.title}
                      </h3>

                      <p className="mt-1 line-clamp-1 text-[12px] leading-[1.6] text-[#657783] sm:text-[13px]">
                        {snippetFor(page, query)}
                      </p>
                    </div>

                    <ArrowRight
                      size={17}
                      className="shrink-0 text-[#2d7fa8] transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            ) : loading ? (
              <p className="py-5 text-[13px] text-[#657783]">
                Searching page content...
              </p>
            ) : (
              <p className="py-5 text-[13px] text-[#657783]">
                No pages found. Try a different keyword.
              </p>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
