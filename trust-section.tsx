import { VerdictBadge } from "@/components/ui/badge";
import { VerificationVerdict } from "@/lib/types";
import { Scale, Eye, AlertOctagon, HelpCircle } from "lucide-react";

export function TrustSection() {
  const verdicts: VerificationVerdict[] = [
    "Supported",
    "Contradicted",
    "Misleading Context",
    "Mixed Evidence",
    "Insufficient Evidence",
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Journalistic Integrity
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-navy-950 dark:text-white">
            Ethical Principles & Transparency Standards
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Automated fact-checking must adhere to higher evidentiary rigor than standard AI chatbots.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-navy-950 dark:text-white text-base">
                Decoupled Media Provenance vs. Claim Veracity
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              An authentic, unedited photograph can still be weaponized with a false caption or misleading date. Conversely, a synthetic illustration may accompany an accurate historical statement. ProofGap independently isolates visual authenticity from factual assertions.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-950 dark:text-teal-400">
                <AlertOctagon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-navy-950 dark:text-white text-base">
                No Pseudo-Scientific Probability Percentages
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We reject arbitrary confidence metrics like "92.4% authentic". Such numbers create false certainty. Instead, ProofGap provides explicit evidentiary citations, publisher dates, and observable physical anomalies.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
                <HelpCircle className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-navy-950 dark:text-white text-base">
                Explicit Uncertainty Labeling
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              When verifiable public documentation is absent, the system explicitly returns "Insufficient Evidence" and enumerates specific unanswered questions for investigative journalists rather than guessing.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                <Scale className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-navy-950 dark:text-white text-base">
                Strict Source Citation Grounding
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Every supporting and contradicting citation is validated against retrieved records before being presented in the user dashboard. Hallucinated or unavailable sources are programmatically excluded.
            </p>
          </div>
        </div>

        {/* 5 Distinct Verdict Standards */}
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-sm font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-6 text-center">
            The Five Official ProofGap Verification Designations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {verdicts.map((v) => (
              <div
                key={v}
                className="flex flex-col items-center text-center p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/30"
              >
                <VerdictBadge verdict={v} size="md" />
                <span className="text-[11px] text-slate-500 mt-2 leading-snug">
                  {v === "Supported"
                    ? "Direct primary source corroboration."
                    : v === "Contradicted"
                    ? "Directly refuted by credible public record."
                    : v === "Misleading Context"
                    ? "Real elements framed with altered context."
                    : v === "Mixed Evidence"
                    ? "Conflicting findings or significant caveats."
                    : "No verifiable public documentation located."}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
