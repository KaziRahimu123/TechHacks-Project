"use client";

import * as React from "react";
import Link from "next/link";
import { VerdictBadge } from "@/components/ui/badge";
import { DEMO_PRESETS } from "@/lib/evidence/demo-fixtures";
import { ExternalLink, ShieldCheck, ArrowRight, Sparkles, Image as ImageIcon, Calendar, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ReportPreview() {
  const [activePresetIndex, setActivePresetIndex] = React.useState(0);
  const preset = DEMO_PRESETS[activePresetIndex];
  const report = preset.fixtureReport;

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Interactive Preview
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-navy-950 dark:text-white">
              Anatomy of a ProofGap Verification Report
            </h2>
            <p className="mt-1 text-sm text-slate-500 max-w-xl">
              Inspect how multi-stage AI decomposes claims, retrieves primary evidence, and isolates media provenance from factual truth.
            </p>
          </div>

          {/* Preset Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {DEMO_PRESETS.slice(0, 3).map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActivePresetIndex(idx)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  activePresetIndex === idx
                    ? "bg-navy-900 text-white shadow-xs dark:bg-brand-600"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                {p.title.split(":")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* The Report Card Container */}
        <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-7 shadow-elevated dark:border-slate-800 dark:bg-slate-900/50 backdrop-blur-xs">
          {/* Top Report Header */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono font-medium text-slate-400">
                    ID: {report.id}
                  </span>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Verified by Hybrid AI
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-navy-950 dark:text-white">
                  {report.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">Overall Determination:</span>
                <VerdictBadge verdict={report.overallVerdict} size="lg" />
              </div>
            </div>

            {/* Executive Summary */}
            <div className="mt-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Executive Synthesis
              </h4>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                {report.executiveSummary}
              </p>
            </div>
          </div>

          {/* Grid: Claims & Provenance */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left 2 Cols: Claims */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-300 flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-brand-500" />
                  Decomposed Claim Analysis ({report.claims.length})
                </h4>
                <span className="text-[11px] text-slate-400 font-mono">Gemma 4 → Gemini 3.8</span>
              </div>

              {report.claims.map((claim) => (
                <div
                  key={claim.id}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <span className="text-sm font-semibold text-navy-950 dark:text-white leading-snug">
                      "{claim.claim}"
                    </span>
                    <VerdictBadge verdict={claim.verdict} size="sm" />
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {claim.explanation}
                  </p>

                  {/* Entities tags */}
                  {claim.entities && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px]">
                      {claim.entities.organizations.map((org) => (
                        <span key={org} className="rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-slate-600 dark:text-slate-400">
                          Org: {org}
                        </span>
                      ))}
                      {claim.entities.dates.map((d) => (
                        <span key={d} className="rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-slate-600 dark:text-slate-400">
                          Date: {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Col: Media Provenance & Sources */}
            <div className="space-y-6">
              {/* Provenance Card */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-300 flex items-center gap-1.5 mb-3">
                  <ImageIcon className="h-3.5 w-3.5 text-teal-500" />
                  Media Provenance
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="rounded-lg bg-slate-50 dark:bg-slate-800/60 p-3 text-slate-600 dark:text-slate-300">
                    <p className="font-medium text-navy-950 dark:text-slate-100 mb-1">
                      {report.mediaProvenance.isMediaPresent ? "Synthetic / Media Assessment" : "Document Format"}
                    </p>
                    <p className="leading-relaxed">
                      {report.mediaProvenance.provenanceSummary}
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-500 italic">
                    Note: Media authenticity is evaluated independently from accompanying captions or text claims.
                  </p>
                </div>
              </div>

              {/* Citations Preview */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-300 flex items-center gap-1.5 mb-3">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                  Verified Evidence Citations ({report.evidenceList.length})
                </h4>
                <div className="space-y-2.5">
                  {report.evidenceList.map((ev) => (
                    <a
                      key={ev.id}
                      href={ev.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2.5 rounded-lg border border-slate-100 dark:border-slate-800/80 hover:border-brand-200 dark:hover:border-brand-800 transition-colors group"
                    >
                      <div className="flex items-center justify-between text-[11px] text-brand-600 dark:text-brand-400 font-semibold mb-0.5">
                        <span>{ev.publisher}</span>
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 font-medium line-clamp-2">
                        {ev.title}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action to test in workspace */}
          <div className="mt-7 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Run this verification live or test your own claims in the workspace.
            </span>
            <Link href={`/verify?preset=${preset.id}`}>
              <Button size="sm" className="font-semibold gap-1.5">
                Load Preset in Workspace
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
