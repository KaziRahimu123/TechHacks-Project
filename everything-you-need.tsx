import { Check } from "lucide-react";

export function EverythingYouNeed() {
  const capabilities = [
    {
      title: "Web Articles & News",
      description: "Full-page extraction, publisher attribution, and context retrieval.",
    },
    {
      title: "YouTube & Video Transcripts",
      description: "Speech-to-text transcripts with timestamped assertion isolation.",
    },
    {
      title: "Images & Screenshots",
      description: "Forensic inspection for synthetic media, deepfakes, and altered visuals.",
    },
    {
      title: "PDF Documents & Research",
      description: "Deconstruct multi-page whitepapers, studies, and government releases.",
    },
    {
      title: "Atomic Claim Extraction",
      description: "Gemma 4 decomposes complex stories into testable factual statements.",
    },
    {
      title: "Verified Registry Queries",
      description: "Live search across Google Fact Check Tools and journalistic archives.",
    },
    {
      title: "Gemini 3.8 Flash Verification",
      description: "Multimodal cross-examination against retrieved evidentiary records.",
    },
    {
      title: "Zero Hallucinated Citations",
      description: "Every finding strictly bound to verifiable primary source URLs.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Everything You Need
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 font-normal">
            A comprehensive, unified fact-checking toolkit built for speed, accuracy, and source transparency.
          </p>
        </div>

        {/* Compact 2-column checklist grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 max-w-4xl mx-auto">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 shrink-0 mt-0.5">
                <Check className="h-3.5 w-3.5 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-slate-900 dark:text-white leading-tight mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

