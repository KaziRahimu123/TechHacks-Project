import { Image, FileText, Globe, Youtube, FileCheck2, MessageSquareText } from "lucide-react";

export function SupportedFormats() {
  const formats = [
    {
      icon: Image,
      title: "Viral Images & Screenshots",
      description: "Detect synthetic generation, analyze memes, unmask manipulated photo crops, and inspect OCR text overlays.",
      badge: "Gemma 4 Vision",
    },
    {
      icon: Globe,
      title: "News Articles & Web URLs",
      description: "Clean readability extraction isolating journalistic copy from paywalls, ads, and interactive widgets.",
      badge: "Mozilla Readability",
    },
    {
      icon: Youtube,
      title: "YouTube Videos & Shorts",
      description: "Examine public video metadata, channel provenance, and evaluate claims made in video titles and descriptions.",
      badge: "Video Metadata",
    },
    {
      icon: FileText,
      title: "PDF Reports & Whitepapers",
      description: "Extract multi-page research documents, legislative bills, policy drafts, and institutional releases.",
      badge: "PDF Engine",
    },
    {
      icon: MessageSquareText,
      title: "Pasted Text & Statements",
      description: "Test social media posts, quote snippets, WhatsApp forwards, or direct political speech excerpts.",
      badge: "Claim Decomposer",
    },
    {
      icon: FileCheck2,
      title: "Audio & Interview Transcripts",
      description: "Parse timestamped speaker transcripts to separate verbatim claims from interviewer framing.",
      badge: "Transcript Parser",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Multimodal Ingestion
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-navy-950 dark:text-white">
            Supported Content Formats
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Misinformation spreads across every medium. ProofGap ingests them all with unified verification standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900 transition-all hover:border-brand-300 dark:hover:border-brand-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/80 dark:text-brand-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-navy-950 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
