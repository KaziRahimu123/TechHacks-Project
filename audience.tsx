import { Users, Newspaper, GraduationCap, Sparkles } from "lucide-react";

export function Audience() {
  const audiences = [
    {
      title: "Everyday Users",
      description: "Verify viral posts and suspicious information before sharing.",
      icon: Users,
    },
    {
      title: "Journalists",
      description: "Investigate news claims and cross-check sources.",
      icon: Newspaper,
    },
    {
      title: "Students & Researchers",
      description: "Evaluate information credibility using supporting evidence.",
      icon: GraduationCap,
    },
    {
      title: "Content Creators",
      description: "Check claims and media context before publishing.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="audience" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Who Is ProofGap For?
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 font-normal">
            Designed for anyone who values factual accuracy and verifiable evidence.
          </p>
        </div>

        {/* Four Audience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {audiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 dark:border-slate-800 dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 mb-5">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

