import { Suspense } from "react";
import { DashboardView } from "@/components/dashboard/dashboard-view";

export const metadata = {
  title: "Fact-Check Dashboard — ProofGap",
  description:
    "Review past fact-checking investigations, verified claims, evidence records, and forensic media assessments.",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950/50 py-4">
      <Suspense
        fallback={
          <div className="mx-auto max-w-6xl p-16 text-center text-slate-500">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em]" />
            <p className="mt-4 text-sm font-medium">Loading Dashboard...</p>
          </div>
        }
      >
        <DashboardView />
      </Suspense>
    </div>
  );
}

