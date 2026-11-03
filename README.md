# ProofGap — AI-Powered Multimodal Fact-Checking Platform

> **Tagline:** *Question the Claim. Verify the Evidence.*

ProofGap is a full-stack, multimodal fact-checking and evidence verification platform designed to identify misinformation, misleading framing, and unsupported assertions across viral images, news articles, websites, videos, PDFs, and transcripts.

Built for deployment on **Vercel**, ProofGap features a hybrid dual-model AI pipeline powered by **Gemma 4** (`gemma-4-26b-a4b-it`) and **Gemini 3.8 Flash** (`gemini-3.8-flash`), combined with primary evidence retrieval from the **Google Fact Check Tools API**.

---

## Key Highlights

- **Hybrid AI Pipeline**:
  - **Stage 1 (Ingestion):** Multi-format parsing for images, screenshots, web articles (Mozilla Readability + JSDOM), YouTube videos (oEmbed), PDFs, and transcripts.
  - **Stage 2 (Gemma 4):** Factual claim extraction, fact vs. opinion classification, entity identification (people, organizations, dates, locations, numbers), targeted query formulation, and visual artifact inspection.
  - **Stage 3 (Evidence Retrieval):** Targeted querying across Google Fact Check Tools API, Tavily, and curated primary source registries (Reuters, AP, BBC Verify, PolitiFact, Snopes, NASA).
  - **Stage 4 (Gemini 3.8 Flash):** Evidentiary cross-examination, contextual discrepancy detection (dates, locations, omitted background), and strict source ID validation.
  - **Stage 5 (Report Generation):** Executive synthesis, claim-by-claim deconstruction, independent media provenance, and verified citations.
- **Journalistic Evidentiary Standards**:
  - **Decoupled Media Provenance:** Visual authenticity is scrutinized separately from the truth of accompanying captions or text claims.
  - **Zero Hallucinated Citations:** All citations presented in the user dashboard are validated against real retrieved records before rendering.
  - **Explicit Uncertainty Labeling:** If conclusive documentation cannot be located, the system designates *Insufficient Evidence* and details unanswered investigative questions.
  - **No Pseudo-Scientific Confidence Scores:** Avoids arbitrary percentage metrics (e.g. "94.2% true") in favor of transparent, verifiable public records.

---

## Five Official Verification Designations

| Verdict | Meaning | Badge Appearance |
| :--- | :--- | :--- |
| **Supported** | Directly confirmed by credible primary sources or documentation. | Emerald / Green |
| **Contradicted** | Directly refuted by credible evidence or official records. | Rose / Red |
| **Misleading Context** | Elements may be real, but key dates, locations, or framing are altered. | Amber / Orange |
| **Mixed Evidence** | Conflicting source findings or partial confirmation with major caveats. | Purple / Violet |
| **Insufficient Evidence** | Independent investigation currently lacks verifiable public records. | Slate / Gray |

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, Server Actions, Route Handlers)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS, PostCSS, Custom Journalistic Design Tokens
- **Icons & Animation:** Lucide React, Framer Motion
- **AI SDK:** `@google/genai` (Google GenAI JavaScript SDK)
- **Models:**
  - Gemma 4: `gemma-4-26b-a4b-it`
  - Gemini 3.8 Flash: `gemini-3.8-flash`
- **Extraction:** Mozilla Readability, JSDOM, `pdf-parse`
- **APIs:** Google Fact Check Tools API, Tavily Search API
- **Deployment:** Vercel (Edge & Serverless Functions)

---

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with navbar, footer, theme support
│   ├── page.tsx                # High-impact investigative landing page
│   ├── globals.css             # Journalistic design tokens & dark mode styling
│   ├── verify/
│   │   └── page.tsx            # Verification workspace (Upload / URL / Text)
│   ├── results/
│   │   └── page.tsx            # Results dashboard & claim deconstruction
│   └── api/
│       ├── analyze/
│       │   └── route.ts        # Main analysis endpoint (Zod validated)
│       └── health/
│           └── route.ts        # Health check & pipeline status
├── components/
│   ├── ui/                     # Button, Badge, Card primitives
│   ├── layout/                 # Navbar with theme toggle & modal, Footer
│   ├── home/                   # Hero, Stats, ReportPreview, Formats, Process, Trust
│   ├── verify/                 # Workspace, Stepper, Presets
│   └── results/                # Dashboard, ClaimCard, ProvenanceCard
├── lib/
│   ├── ai/
│   │   ├── gemma.ts            # Gemma 4 claim extraction & vision
│   │   ├── gemini.ts           # Gemini 3.8 Flash verification
│   │   └── pipeline.ts         # Hybrid pipeline orchestration
│   ├── extraction/             # Article, PDF, YouTube, Image extraction
│   ├── evidence/               # Google Fact Check Tools, Tavily, Curated Registry
│   ├── types/                  # Core TypeScript types & Zod schemas
│   └── utils.ts                # Utilities & formatters
└── .env.example                # Required environment variables template
```

---

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Google Gemini & Gemma Models
GEMINI_API_KEY=your_gemini_api_key_here
GEMMA_MODEL=gemma-4-26b-a4b-it
GEMINI_MODEL=gemini-3.8-flash

# Fact-Checking APIs (Optional)
FACT_CHECK_API_KEY=your_google_fact_check_tools_api_key
TAVILY_API_KEY=your_tavily_search_api_key
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Production Build
```bash
npm run build
npm run start
```

---

## Deploying to Vercel

ProofGap is structured for 1-click deployment on Vercel:

1. Push your repository to GitHub.
2. Import the project in the [Vercel Dashboard](https://vercel.com/new).
3. Add the environment variables:
   - `GEMINI_API_KEY`
   - `GEMMA_MODEL` (`gemma-4-26b-a4b-it`)
   - `GEMINI_MODEL` (`gemini-3.8-flash`)
   - `FACT_CHECK_API_KEY` (optional)
   - `TAVILY_API_KEY` (optional)
4. Deploy! All API endpoints execute through Vercel Functions with automatic payload handling and serverless scaling.
