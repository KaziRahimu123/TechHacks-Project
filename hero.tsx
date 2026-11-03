import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 text-center">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Large Centered Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
          Question the Claim. <br />
          <span className="text-blue-600 dark:text-blue-500">Verify the Evidence.</span>
        </h1>

        {/* One Concise Sentence Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
          ProofGap is an AI-powered verification platform that cross-examines news, media, and online claims against verified primary evidence.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/verify">
            <Button
              size="lg"
              className="h-12 px-7 text-sm sm:text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-xs"
            >
              Start Fact-Checking
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          <a href="#how-it-works">
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7 text-sm sm:text-base font-medium rounded-xl border-slate-200 bg-white hover:bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              How It Works
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
