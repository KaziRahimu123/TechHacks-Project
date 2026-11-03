export function ProcessSteps() {
  const steps = [
    {
      step: 1,
      title: "Submit Content",
      description:
        "Upload images, screenshots, PDFs, transcripts, or paste article and video links.",
    },
    {
      step: 2,
      title: "AI Extracts Claims",
      description:
        "Gemma 4 identifies factual statements, dates, locations, and important details.",
    },
    {
      step: 3,
      title: "Evidence Verification",
      description:
        "ProofGap retrieves relevant sources, and Gemini cross-checks claims against available evidence.",
    },
    {
      step: 4,
      title: "Review Results",
      description:
        "Receive clear verdicts, explanations, supporting citations, and identified misinformation.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 font-normal">
            A simple, transparent verification process backed by primary evidence.
          </p>
        </div>

        {/* Four Horizontal Steps with Blue Numbered Circles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 dark:border-slate-800 dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs transition-all flex flex-col"
            >
              {/* Blue Numbered Circle */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm shadow-xs mb-5 shrink-0">
                {item.step}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
