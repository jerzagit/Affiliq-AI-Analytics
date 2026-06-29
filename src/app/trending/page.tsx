"use client"

"use client"

import { useState } from "react"

type TimeRange = "today" | "week" | "month"

const trendingHooks = [
  { hook: "Before/After side-by-side dalam 3 saat pertama", frequency: 142, avgViews: "2.1M", trend: "up" },
  { hook: "Close-up masalah kulit (jerawat/kusam)", frequency: 98, avgViews: "1.8M", trend: "up" },
  { hook: "Soalan retorik — 'Korang tau tak...?'", frequency: 87, avgViews: "1.4M", trend: "up" },
  { hook: "Tunjuk hasil akhir dulu baru proses", frequency: 76, avgViews: "1.3M", trend: "up" },
  { hook: "'Doktor/recommend pun produk ni' — authority hook", frequency: 65, avgViews: "1.1M", trend: "down" },
  { hook: "Countdown timer + stok terhad — urgency hook", frequency: 54, avgViews: "980K", trend: "up" },
  { hook: "POV — 'bayangkan korang try ni...'", frequency: 48, avgViews: "920K", trend: "up" },
  { hook: "Testimonial real — screen shot DM pelanggan", frequency: 42, avgViews: "870K", trend: "down" },
]

const trendingProducts = [
  { emoji: "💊", name: "Serum Jeragat Viral", category: "Kecantikan", hookCount: 34, avgViralScore: 94, trend: "up" },
  { emoji: "🧴", name: "Krim Mata Collagen", category: "Kecantikan", hookCount: 28, avgViralScore: 88, trend: "up" },
  { emoji: "🍃", name: "Sabun Sulphur", category: "Kecantikan", hookCount: 22, avgViralScore: 82, trend: "up" },
  { emoji: "👗", name: "Baju Kurung Raya", category: "Fesyen", hookCount: 19, avgViralScore: 73, trend: "down" },
  { emoji: "🥗", name: "Meal Replacement", category: "Kesihatan", hookCount: 17, avgViralScore: 79, trend: "up" },
  { emoji: "🔌", name: "Charger Wireless", category: "Elektronik", hookCount: 15, avgViralScore: 76, trend: "up" },
]

const patternInsights = [
  { pattern: "Video < 60 saat dapat 40% lebih retention", confidence: "92%", source: "Analisis 1,284 video" },
  { pattern: "Hook visual dalam 0-2 saat = 3x lebih viral", confidence: "88%", source: "A/B test 500 video" },
  { pattern: "Produk ditunjukkan < 5 saat = 2.5x lebih conversion", confidence: "85%", source: "Analisis 890 video" },
  { pattern: "Sound trending = 60% lebih reach organik", confidence: "91%", source: "Data TikTok API" },
  { pattern: "CTA dengan urgency = 45% lebih click-through", confidence: "83%", source: "Analisis 2,100 video" },
  { pattern: "Before/after = 3x lebih share berbanding video biasa", confidence: "87%", source: "Analisis 1,500 video" },
]

export default function TrendingPage() {
  const [timeRange, setTimeRange] = useState<TimeRange>("today")

  return (
    <div className="fade-in">
      <div className="section-header">
        <span className="section-title">
          <i className="ti ti-trending-up" style={{ color: "#ef4444" }}></i> Trending Intelligence
        </span>
        <div style={{ display: "flex", gap: 6 }}>
          {(["today", "week", "month"] as TimeRange[]).map(r => (
            <button key={r} className={`btn btn-sm ${timeRange === r ? "btn-primary" : "btn-ghost"}`} onClick={() => setTimeRange(r)}>
              {r === "today" ? "Hari Ini" : r === "week" ? "Minggu Ini" : "Bulan Ini"}
            </button>
          ))}
        </div>
      </div>

      <div className="card bg-mesh" style={{ marginBottom: 20 }}>
        <div className="card-title"><i className="ti ti-bolt"></i> Top Trending Hooks</div>
        <div style={{ display: "grid", gap: 8 }}>
          {trendingHooks.map((h, i) => (
            <div key={i} className="affiliate-row" style={{ cursor: "default" }}>
              <span className="badge badge-accent" style={{ fontSize: 9, minWidth: 20, textAlign: "center" }}>#{i + 1}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{h.hook}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                  Used in {h.frequency} videos · Avg {h.avgViews} views
                </div>
              </div>
              <span style={{ color: h.trend === "up" ? "var(--text-success)" : "var(--text-danger)", fontSize: 13 }}>
                {h.trend === "up" ? <i className="ti ti-trending-up"></i> : <i className="ti ti-trending-down"></i>}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="two-col">
        <div className="card">
          <div className="card-title"><i className="ti ti-box"></i> Trending Products</div>
          {trendingProducts.map((p, i) => (
            <div key={i} className="video-row" style={{ cursor: "pointer" }} onClick={() => window.location.href = `/products/${i + 1}`}>
              <div className="video-thumb" style={{ fontSize: 20 }}>{p.emoji}</div>
              <div style={{ flex: 1 }}>
                <div className="video-title">{p.name}</div>
                <div className="video-views">
                  {p.hookCount} hooks · Viral Score {p.avgViralScore}
                </div>
              </div>
              <span style={{ color: p.trend === "up" ? "var(--text-success)" : "var(--text-danger)", fontSize: 12 }}>
                {p.trend === "up" ? <i className="ti ti-trending-up"></i> : <i className="ti ti-trending-down"></i>}
              </span>
            </div>
          ))}
        </div>

        <div className="card">
          <div className="card-title"><i className="ti ti-brain"></i> Pattern Insights</div>
          {patternInsights.map((p, i) => (
            <div key={i} className="improvement-item" style={{ marginBottom: 10, borderBottom: "0.5px solid var(--border)", paddingBottom: 10 }}>
              <span className="badge badge-pro" style={{ fontSize: 8, flexShrink: 0, alignSelf: "flex-start" }}>{p.confidence}</span>
              <div>
                <div style={{ fontSize: 13, lineHeight: 1.5 }}>{p.pattern}</div>
                <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 2 }}>{p.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
