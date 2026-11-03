import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold text-blue-700 dark:border-blue-900/80 dark:bg-blue-950/40 dark:text-blue-300 mb-6">
          <ShieldCheck className="h-4 w-4" />
          <span>Evidence-Based Fact Checking</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          Ready to verify the evidence?
        </h2>

        <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
          Investigate claims, breaking news, videos, and images with multi-source evidence grounding and transparent forensic analysis.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/verify" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto h-12 px-8 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-xs gap-2"
            >
              <span>Start Fact-Checking Now</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
          <span>✓ Zero hallucinated citations</span>
          <span>✓ Independent media provenance</span>
          <span>✓ Instant multimodal analysis</span>
        </div>
      </div>
    </section>
  );
}

