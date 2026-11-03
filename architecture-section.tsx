import { Terminal, Shield, Network, Database, Cpu, CheckCircle } from "lucide-react";

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Engineering Highlights
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-navy-950 dark:text-white">
            Hybrid AI Pipeline Architecture
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            A production-ready Next.js App Router architecture deployed completely serverless on Vercel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: AI Model Roles */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-card dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-navy-950 dark:text-white">
                  Hybrid Dual-Model Synergy
                </h3>
                <p className="text-xs text-slate-500">Google GenAI JavaScript SDK (@google/genai)</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-navy-900 dark:text-white">Gemma 4 (26B-A4B-IT)</span>
                  <span className="font-mono text-[11px] bg-brand-100 dark:bg-brand-900/60 text-brand-700 dark:text-brand-300 px-2 py-0.5 rounded">
                    Extraction Engine
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Specialized in structured claim identification, opinion vs. fact classification, date and location extraction, visual screenshot analysis, and targeted query generation.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-navy-900 dark:text-white">Gemini 3.8 Flash</span>
                  <span className="font-mono text-[11px] bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 px-2 py-0.5 rounded">
                    Cross-Examiner
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  High-speed multimodal reasoning engine that evaluates claims against retrieved evidence, flags chronological discrepancies, and produces validated source citations.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Safe Serverless Pipeline */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-card dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-950 dark:text-teal-400">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-navy-950 dark:text-white">
                  Evidence Retrieval & Integrity Guardrails
                </h3>
                <p className="text-xs text-slate-500">Zero Hallucination Citation Verification</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Google Fact Check Tools API:</strong> Direct querying of global claim review schemas published by verified IFCN-signatory fact-checking organizations.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Source ID Validation Layer:</strong> Every citation rendered in a report is strictly matched against real retrieved records; any unsupported ID is pruned.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Full Serverless Deployment:</strong> 100% Next.js Route Handlers on Vercel Functions. No external Python runtime or separate Docker infrastructure required.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Clean Extraction Subsystems:</strong> Mozilla Readability + JSDOM for ad-free web articles, PDF byte parser, and YouTube oEmbed metadata extraction.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
