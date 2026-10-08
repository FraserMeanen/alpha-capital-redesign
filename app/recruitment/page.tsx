
import Header from "@/app/components/header";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f8f7f2] px-5 py-20 text-[#10283b] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <h1 className="font-display text-[3.5rem] leading-[1] sm:text-[5rem]">
            Recruitment
          </h1>

          <p className="mt-6 text-[15px] text-[#51616d]">
            This page is currently under development.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block text-[14px] font-semibold text-[#2d7fa8] hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}
