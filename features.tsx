import { Image as ImageIcon, FileText, Video, ShieldCheck } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Image Verification",
      description:
        "Detect AI-generated synthetic media, deepfakes, and manipulated photographs with forensic provenance analysis.",
      icon: ImageIcon,
    },
    {
      title: "Article Fact-Checking",
      description:
        "Deconstruct news articles and viral claims into atomic assertions grounded in verified journalistic registries.",
      icon: FileText,
    },
    {
      title: "Video Analysis",
      description:
        "Inspect YouTube videos and multimedia statements with timeline transcription and multi-source corroboration.",
      icon: Video,
    },
    {
      title: "Evidence-Based Reports",
      description:
        "Receive comprehensive, source-backed verification dossiers with direct citations and zero hallucinated sources.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Multimodal Fact-Checking Capabilities
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 font-normal">
            A comprehensive suite of forensic tools designed to verify modern digital media.
          </p>
        </div>

        {/* 4 Elegant Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200/80 bg-white p-7 sm:p-8 shadow-xs hover:shadow-md hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

