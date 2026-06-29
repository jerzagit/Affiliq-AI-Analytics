# AffiliQ — TikTok Shop Intelligence Platform

> **Status:** Mock/Prototype — pre-alpha
> **Live Demo:** [https://tiktok-analytic.vercel.app](https://tiktok-analytic.vercel.app)

---

## 1. What Is This?

AffiliQ is a **TikTok Shop Affiliate Intelligence Dashboard** — a platform that tracks viral products, analyzes affiliate creator performance, provides AI-powered video coaching, and delivers real-time TikTok Shop analytics.

Currently a **fully interactive front-end mock** built with Next.js + TypeScript + Tailwind CSS. All data is simulated — no real API calls, no backend, no database.

The mock proves the UX concept and UI flow. The next phase is wiring real data from third-party providers.

---

## 2. Current Features (Mock)

### Dashboard (`/`)
- Hero welcome with live stat counters
- 4 metric cards (tracked products, daily sales, total views, active affiliates) — numbers auto-update every 4s
- Live viral products section with gradient border
- Top products and top affiliates tables

### Products (`/products`, `/products/[id]`)
- Table of all 10 mock products with emoji, category, viral score, estimated GMV
- Detail page with product stats, top videos, top affiliates for that product, confidence ring chart

### Affiliates (`/affiliates`, `/affiliates/[id]`)
- Table of 6 mock creators with follower count, total views, estimated sales, tier badge
- Detail page with creator performance analytics, engagement metrics

### Live Analytics (`/live`)
- Scraper status panel (simulated scrape rate, API status, data source, last sync)
- 4 auto-updating metric cards with glow effects
- Trending now feed — products ranked by views/sales with trend deltas
- Real-time scrape activity log (simulated events every 3s) with monospace console-style output
- Live products table with confidence badges and 5-min trend indicators

### AI Video Coach (`/ai-analysis`)
- Submit a TikTok video URL
- 8-step scraping progress simulation (Extracting metadata → Download transcript → Analyzing audio → Visual analysis → etc.)
- Overall viral score displayed as a ring SVG (0–100)
- 8-point viral checklist with pass/fail badges (Hook strength, Retention, CTA clarity, Audio sync, etc.)
- AI coach advice section — personalised tips based on checklist results
- Video transcript viewer with time segments and engagement score bars
- Audio analysis (tone, background music suitability, voice clarity)
- Visual analysis (lighting quality, text overlay readability, product visibility)
- Comment sentiment breakdown (positive/neutral/negative with percentages)
- Sales estimation (projected units, revenue, conversion rate)
- Competition gap analysis

### Trending Intelligence (`/trending`)
- Top trending hooks ranked by usage frequency and average views
- Trending products with viral score
- Pattern insights with confidence percentages and data source citations
- Time range toggle: Today / This Week / This Month

### Creator Leaderboard (`/leaderboard`)
- Ranked creator table with rank change indicators (up/down)
- Engagement rate bars with visual fill
- Performance highlights section
- Summary metrics (top creator, avg viral views, total revenue tracked, active creators)

### Saved Analyses (`/saved`)
- Grid of saved video analyses with scrape date, title, score
- Delete action per saved item
- Empty state with CTA to analyze first video
- Info card about IndexedDB local storage (future PostgreSQL sync)

### UI / UX
- Light/dark theme toggle with localStorage persistence
- Collapsible sidebar (icon-only mode) with smooth transition
- Mobile-responsive layout: sidebar slides in as drawer, hamburger toggle, grids stack, tables scroll horizontally
- Glassmorphism cards, gradient borders, animated backgrounds (dot pattern, mesh gradients)
- Shimmer, float, pulse animations
- Scanline effect on live analytics page
- Search bar in topbar (detects TikTok URLs → navigates to AI Coach)

---

## 3. Architecture

```
tiktok-analytic/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout: Sidebar + TopBar + content
│   │   ├── globals.css         # Design system + all component styles
│   │   ├── page.tsx            # Dashboard (/)
│   │   ├── products/
│   │   │   ├── page.tsx        # Product list
│   │   │   └── [id]/page.tsx   # Product detail
│   │   ├── affiliates/
│   │   │   ├── page.tsx        # Affiliate list
│   │   │   └── [id]/page.tsx   # Affiliate detail
│   │   ├── live/page.tsx       # Live analytics
│   │   ├── ai-analysis/page.tsx # AI Video Coach
│   │   ├── trending/page.tsx   # Trending hooks/patterns
│   │   ├── leaderboard/page.tsx # Creator leaderboard
│   │   └── saved/page.tsx      # Saved analyses
│   ├── components/
│   │   ├── sidebar.tsx         # Collapsible sidebar with mobile drawer
│   │   ├── topbar.tsx          # Top bar with search + theme toggle
│   │   ├── theme-toggle.tsx    # Light/dark toggle with localStorage
│   │   └── table-rows.tsx      # Reusable clickable table rows
│   └── data/
│       ├── products.ts         # 10 mock products
│       ├── affiliates.ts       # 6 mock affiliates
│       └── analysis.ts         # Analysis types + mock generator
├── public/                     # Static assets
└── next.config.ts              # Next.js config
```

### Data Flow (Current Mock)
```
Page ──> imports from src/data/*.ts ──> renders in table/card components
         All data is static arrays + JS math.random() for live updates
         No API calls, no database
```

### Data Flow (Future — with Real Providers)
```
Page ──> calls API route handler ──> fetches from EchoTik/KaloData API ──> returns typed data
         └──> optionally caches in PostgreSQL/Redis
         └──> falls back to mock data when API is unavailable
```

---

## 4. Future — Real Data Integration

### 4.1 Data Providers

| Provider | Type | Coverage | API Docs |
|----------|------|----------|----------|
| **EchoTik** | TikTok commerce API | Products, creators, shops, LIVE streams, ads, rankings, 1000-day history | [opendocs.echotik.live](https://opendocs.echotik.live/en) |
| **Kalo Data** | TikTok Shop analytics | 200M+ products, 250M+ creators, 400M+ videos/livestreams | [kalodata.com](https://www.kalodata.com) |
| **TikTok Research API** | Official TikTok | Public video & user data, limited to research use | [developers.tiktok.com](https://developers.tiktok.com/doc/research-api-get-started) |
| **TikTok Shop API** | Official TikTok | Shop info, products, orders (requires partnership) | [developers.tiktok.com](https://developers.tiktok.com/doc/vce-query-tiktok-shop-data) |

**Recommendation:** EchoTik API is the best starting point — it has real-time TikTok endpoints, 1000-day historical data, and costs as low as $0.001/request. Kalo Data also offers structured data but its API access requires a paid plan.

### 4.2 Required Real Features

#### A. Video Download by URL
```
Input:  https://www.tiktok.com/@user/video/123456789
Output: MP4 file + metadata (author, description, sounds, hashtags)
```
- Use EchoTik real-time TikTok endpoint or TikTok public API
- Fallback: `yt-dlp` or `tikwm.com` API for video download
- Store downloaded video in Vercel Blob / AWS S3 / local (dev)

#### B. Video Scraping Pipeline
```
1. Submit URL
2. Extract: author, description, music, hashtags, mentions
3. Download: video file + cover image
4. Fetch: view count, like count, comment count, share count, save count
5. Fetch: comment list (top 100+)
6. Detect: products mentioned (via caption, stickers, or shop links)
```

#### C. Video Analysis
| Analysis | Data Source | Output |
|----------|-------------|--------|
| **Transcript** | Speech-to-text (Whisper API / Google STT) | Timestamped segments with speaker diarization |
| **Visual Analysis** | Frame extraction + CV (OpenAI Vision / CLIP) | Lighting score, text overlay detection, product visibility, scene changes |
| **Audio Analysis** | Audio processing (librosa / API) | Tone classification, background music detection, voice clarity |
| **Comment Sentiment** | NLP (OpenAI / HuggingFace) | Positive/neutral/negative breakdown, keyword extraction |
| **Hook Detection** | Frame analysis + transcript | Hook type classification, hook timing, retention prediction |
| **Viral Score** | Weighted composite of all above | 0–100 score with per-category breakdown |

#### D. Sales Estimation
This is the **most critical and hardest feature**. Accuracy depends on data quality.

**Methodology (from least to most accurate):**

1. **Basic estimation** (from public data)
   - `estimated_sales = view_count * avg_conversion_rate(by_category)`
   - Very rough, ±200% error

2. **Enhanced estimation** (from EchoTik/KaloData)
   - Uses historical GMV + unit sales data for similar products in same category
   - Cross-references creator's past performance
   - ±30–50% error

3. **Accurate estimation** (requires TikTok Shop API partnership)
   - Direct sales data from TikTok Shop order API
   - Real GMV, units sold, commission earned
   - Only available to approved TikTok Shop partners

4. **ML-powered estimation** (best effort)
   - Train regression model on: views, likes, comments, shares, saves, creator followers, product price, category, video duration, hook type, posting time, sound virality
   - Can achieve ±15–25% error with enough training data

### 4.3 Recommended Stack

```
Frontend (Current)        Backend (To Build)
─────────────────         ─────────────────
Next.js (App Router)      Next.js API routes
TypeScript                Express.js / Fastify (if complex)
Tailwind CSS              PostgreSQL (supabase.com — free tier)
Tabler Icons              Redis (upstash.com — free tier)
Vercel (hosting)          FFmpeg + Whisper (for video processing)
                          OpenAI / Claude API (for analysis)
                          EchoTik API (for data)
                          Vercel Blob / AWS S3 (for video storage)
```

### 4.4 Implementation Plan

#### Phase 1 — Data Layer (2–3 weeks)
- [ ] Sign up for EchoTik API (free trial available)
- [ ] Create typed API client modules in `src/lib/providers/`
- [ ] Implement endpoints: product search, creator lookup, video stats
- [ ] Add fallback to mock data when API is unavailable
- [ ] Set up Supabase PostgreSQL schema (products, creators, analyses, users)
- [ ] Build API route handlers (`/api/products`, `/api/analysis`, etc.)

#### Phase 2 — Video Processing (2–3 weeks)
- [ ] Build video download service (yt-dlp or TikTok public API)
- [ ] Implement speech-to-text for transcripts (Whisper)
- [ ] Frame extraction + analysis via OpenAI Vision
- [ ] Audio analysis pipeline
- [ ] Build the full analysis pipeline endpoint (submit URL → process → return results)

#### Phase 3 — Sales Estimation (2 weeks)
- [ ] Implement basic estimation from public metrics
- [ ] Integrate EchoTik historical sales data for calibration
- [ ] Build ML model (or use statistical regression) for estimation
- [ ] Display confidence intervals alongside estimates

#### Phase 4 — Polish (1 week)
- [ ] User authentication (NextAuth / Clerk)
- [ ] Saved analyses in PostgreSQL (sync from IndexedDB)
- [ ] Loading states, error handling, retry logic
- [ ] Rate limiting, caching (Redis)
- [ ] Background job queue for video processing (BullMQ + Upstash)

---

## 5. Development

### Prerequisites
- Node.js 22+
- npm

### Getting Started
```bash
npm install
npm run dev -- -p 3000
```

### Build
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel --prod
```

---

## 6. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + custom CSS (design system with CSS variables) |
| Icons | Tabler Icons (CDN) |
| Fonts | Geist (Vercel) |
| Hosting | Vercel (free tier) |
| State | React `useState` / `useEffect` (no external state lib) |
| Data (current) | Static TypeScript modules |
| Data (future) | EchoTik API + Supabase PostgreSQL |

---

## 7. Key Decisions

- **Single-page layout** with persistent sidebar + topbar — proper app feel, not a traditional website
- **Client components for interactivity**, server components where possible — avoids Next.js hydration issues
- **Mock data layer** in `src/data/` with typed interfaces — drop-in replaceable with real API client
- **CSS variables for theming** — light/dark/system preference detection, no runtime CSS-in-JS overhead
- **No external state management** — each page is self-contained with local state, simple and testable
- **Collapsible sidebar** with smooth width transition + mobile drawer overlay — responsive by default

---

## 8. Known Limitations (Mock Phase)

- All data is fake — product stats, affiliate metrics, video analysis results are hardcoded or randomly generated
- AI coach advice is template-based, not real AI
- Video scraping simulation has fake progress steps
- Sales estimation is calculated from fake data with random noise
- No authentication — single-user demo mode
- No database — saved analyses exist only in memory (component state)
- No video processing — transcript, audio analysis, visual analysis are all mock data

---

## 9. Colour Palette

| Role | Light | Dark |
|------|-------|------|
| Surface 0 (page bg) | `#f8f9fa` | `#0a0a0b` |
| Surface 1 (card bg) | `#ffffff` | `#18181b` |
| Surface 2 (hover bg) | `#f0f2f5` | `#27272a` |
| Text primary | `#0f1115` | `#ffffff` |
| Text secondary | `#4a4f56` | `#c4c4ce` |
| Text muted | `#7a8291` | `#9494a0` |
| Accent (indigo) | `#6366f1` | `#6366f1` |
| Success (green) | `#10b981` | `#10b981` |
| Pro (purple) | `#8b5cf6` | `#8b5cf6` |

---

## 10. License

Private project — no license specified.
