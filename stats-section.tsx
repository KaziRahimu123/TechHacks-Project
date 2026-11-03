import { ExternalLink, TrendingDown, AlertCircle, ShieldAlert } from "lucide-react";

export function StatsSection() {
  return (
    <section id="stats" className="py-16 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            The Evidence Deficit
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-navy-950 dark:text-white">
            Why Transparent Verification Matters
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Independent global research highlights the urgent need for verifiable, source-backed evidence.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Stat 1 */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 shadow-card dark:border-slate-800 dark:bg-slate-900 transition-all hover:translate-y-[-2px]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2.5 py-1 rounded-full">
                Online Misinformation
              </span>
              <ShieldAlert className="h-5 w-5 text-rose-500" />
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-5xl font-black tracking-tight text-navy-950 dark:text-white">
                62%
              </span>
            </div>
            <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300">
              Concerned about misinformation
            </p>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Express active anxiety about distinguishing between authentic news and manipulated or fabricated information online.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 shadow-card dark:border-slate-800 dark:bg-slate-900 transition-all hover:translate-y-[-2px]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-full">
                Global News Media
              </span>
              <AlertCircle className="h-5 w-5 text-amber-500" />
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-5xl font-black tracking-tight text-navy-950 dark:text-white">
                37%
              </span>
            </div>
            <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300">
              Overall news trust worldwide
            </p>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Global average of citizens who trust most news organizations most of the time across 47 international media markets.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 shadow-card dark:border-slate-800 dark:bg-slate-900 transition-all hover:translate-y-[-2px]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-2.5 py-1 rounded-full">
                United States
              </span>
              <TrendingDown className="h-5 w-5 text-brand-500" />
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-5xl font-black tracking-tight text-navy-950 dark:text-white">
                25%
              </span>
            </div>
            <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300">
              U.S. news trust
            </p>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Among the lowest confidence ratings recorded in modern polling history, emphasizing the demand for direct primary evidence.
            </p>
          </div>
        </div>

        {/* Attribution Bar */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 inline-flex items-center gap-1.5 flex-wrap justify-center">
            <span>Data source and official attribution:</span>
            <a
              href="https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-600 dark:text-brand-400 hover:underline inline-flex items-center gap-1"
            >
              Reuters Institute Digital News Report 2026 (University of Oxford)
              <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
