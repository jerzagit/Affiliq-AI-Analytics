"use client"

import { useEffect, useState, useRef } from "react"
import { products } from "@/data/products"

type ScrapeEvent = {
  id: number
  type: "product" | "affiliate" | "video"
  label: string
  detail: string
  time: string
}

const trendingNow = [
  { emoji: "💊", name: "Serum Jeragat Viral", views: 2.3, delta: "+24K", sales: 15, gmv: 620 },
  { emoji: "🧴", name: "Krim Mata Collagen Plus", views: 1.8, delta: "+18K", sales: 11, gmv: 440 },
  { emoji: "🍃", name: "Sabun Sulphur Original", views: 1.1, delta: "+12K", sales: 9, gmv: 180 },
  { emoji: "👗", name: "Baju Kurung Moden Raya", views: 1.2, delta: "-3K", sales: 12, gmv: 600 },
  { emoji: "🥗", name: "Meal Replacement ProFit", views: 0.98, delta: "+8K", sales: 7, gmv: 350 },
  { emoji: "🔌", name: "Pengecas Wireless 3-in-1", views: 0.76, delta: "+5K", sales: 6.5, gmv: 520 },
]

const scrapeSources = [
  "tiktok.com/@nadiabeauty",
  "tiktok.com/@skinqueenmy",
  "tiktok.com/@fitlifekl",
  "tiktok.com/@techbromy",
  "tiktok.com/@fashionqueenmy",
  "tiktok.com/shop/viral-malaysia",
  "tiktok.com/@beautyskin88",
  "tiktok.com/@natural_sismy",
]

function formatTime(d: Date) {
  return d.toLocaleTimeString("ms-MY", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
}

function randBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function LivePage() {
  const [scrapedProducts, setScrapedProducts] = useState(1284)
  const [viralToday, setViralToday] = useState(87)
  const [totalSales, setTotalSales] = useState(42300)
  const [activeAffiliates, setActiveAffiliates] = useState(2341)
  const [events, setEvents] = useState<ScrapeEvent[]>([])
  const [trending, setTrending] = useState(trendingNow)
  const eventId = useRef(0)
  const scrapeLog = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrapedProducts(p => p + randBetween(1, 5))
      setViralToday(v => v + (Math.random() > 0.7 ? 1 : 0))
      setTotalSales(s => s + randBetween(10, 100))
      setActiveAffiliates(a => a + randBetween(0, 2))

      const source = scrapeSources[randBetween(0, scrapeSources.length - 1)]
      const type: ScrapeEvent["type"] = (["product", "affiliate", "video"] as const)[randBetween(0, 2)]
      const event: ScrapeEvent = {
        id: ++eventId.current,
        type,
        label: type === "product" ? "Produk" : type === "affiliate" ? "Affiliate" : "Video",
        detail: type === "product"
          ? `Sales data: ${randBetween(100, 5000)} unit (RM${randBetween(5, 200)}K) — ${source}`
          : type === "affiliate"
          ? `Creator detected: ${randBetween(10, 500)} followers baru — ${source}`
          : `Transcript selesai: ${randBetween(30, 120)} saat — ${source}`,
        time: formatTime(new Date()),
      }
      setEvents(prev => [event, ...prev].slice(0, 50))

      setTrending(prev => prev.map(t => ({
        ...t,
        views: parseFloat((t.views + (t.delta.startsWith("+") ? 0.01 : -0.005)).toFixed(2)),
        sales: parseFloat((t.sales + (Math.random() > 0.5 ? 0.1 : 0)).toFixed(1)),
        gmv: t.gmv + randBetween(1, 8),
      })))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (scrapeLog.current) {
      scrapeLog.current.scrollTop = 0
    }
  }, [events])

  return (
    <>
      <div className="fade-in">
        <div className="section-header">
          <span className="section-title">
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              Live Analytics
              <span className="badge badge-red" style={{ fontSize: 10 }}>
                <span className="live-dot" style={{ marginRight: 4 }}></span>
                LIVE
              </span>
            </span>
          </span>
          <span className="badge badge-green">
            <i className="ti ti-refresh" style={{ marginRight: 3 }}></i>
            Auto-refresh setiap 3s
          </span>
        </div>

        <div className="card bg-mesh scanlines" style={{ marginBottom: 20, border: "0.5px solid var(--border-accent)" }}>
          <div className="card-title" style={{ color: "var(--text-accent)" }}>
            <i className="ti ti-radar"></i> Scraper Status — Real-Time Feed
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 2 }}>Scrape Rate</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-accent)" }}>
                <i className="ti ti-arrow-up" style={{ fontSize: 12 }}></i> {randBetween(8, 15)}/saat
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 2 }}>API Status</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-success)" }}>
                <span className="live-dot" style={{ width: 6, height: 6, marginRight: 4, verticalAlign: "middle" }}></span>
                Operational
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 2 }}>Source</div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>TikTok Shop MY</div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 2 }}>Last Sync</div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>
                {formatTime(new Date())}
              </div>
            </div>
          </div>
          <div className="progress-mini" style={{ height: 3 }}>
            <div className="progress-mini-fill" style={{ width: "100%", background: "linear-gradient(90deg, #6366f1, #8b5cf6, #10b981)", animation: "shimmer 2s infinite", backgroundSize: "200% 100%" }}></div>
          </div>
        </div>

        <div className="metric-grid">
          <div className="metric-card glow-accent">
            <div className="metric-label"><i className="ti ti-box"></i> Scraped Products Today</div>
            <div className="metric-value">{scrapedProducts.toLocaleString()}</div>
            <div className="metric-delta"><i className="ti ti-arrow-up"></i> +{randBetween(10, 50)} 5 min ago</div>
          </div>
          <div className="metric-card glow-success">
            <div className="metric-label"><i className="ti ti-flame"></i> Viral Products Today</div>
            <div className="metric-value">{viralToday}</div>
            <div className="metric-delta"><i className="ti ti-arrow-up"></i> +{randBetween(1, 8)} 1h ago</div>
          </div>
          <div className="metric-card">
            <div className="metric-label"><i className="ti ti-currency-ringgit"></i> Total Scraped Sales</div>
            <div className="metric-value">{totalSales.toLocaleString()}</div>
            <div className="metric-delta"><i className="ti ti-arrow-up"></i> +{randBetween(50, 500)} today</div>
          </div>
          <div className="metric-card">
            <div className="metric-label"><i className="ti ti-users"></i> Active Affiliates</div>
            <div className="metric-value">{activeAffiliates.toLocaleString()}</div>
            <div className="metric-delta"><i className="ti ti-arrow-up"></i> +{randBetween(1, 10)} this month</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}>
          <div className="card" style={{ padding: 0, overflow: "hidden" }}>
            <div className="card-title" style={{ padding: "14px 16px 0" }}>
              <i className="ti ti-flame" style={{ color: "#ef4444" }}></i> Trending Now 🔥
            </div>
            <div style={{ padding: "0 16px 8px" }}>
              {trending.map((t, i) => (
                <div key={i} className="video-row" style={{ alignItems: "center" }}>
                  <div className="video-thumb" style={{ fontSize: 20, width: 36, height: 36 }}>{t.emoji}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="video-title">{t.name}</div>
                    <div className="video-views">
                      <i className="ti ti-eye"></i> {t.views.toFixed(1)}M views
                      <span style={{
                        marginLeft: 8,
                        color: t.delta.startsWith("+") ? "var(--text-success)" : "var(--text-danger)",
                        fontWeight: 500,
                      }}>
                        {t.delta}
                      </span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 500 }}>{t.sales.toFixed(0)}K unit</div>
                    <div style={{ fontSize: 11, color: "var(--text-success)" }}>RM{t.gmv}K</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: 0, overflow: "hidden", background: "var(--bg-pro)", border: "0.5px solid var(--border-pro)" }}>
            <div className="card-title" style={{ padding: "14px 16px 0", color: "var(--text-pro)" }}>
              <i className="ti ti-radar"></i> Scrape Activity <span className="badge badge-green" style={{ fontSize: 9 }}>REAL-TIME</span>
            </div>
            <div
              ref={scrapeLog}
              style={{
                height: 276,
                overflowY: "auto",
                padding: "0 16px 8px",
                fontFamily: "'JetBrains Mono', monospace, var(--font-mono)",
                fontSize: 11,
              }}
            >
              {events.length === 0 && (
                <div style={{ color: "var(--text-muted)", padding: 16, textAlign: "center" }}>
                  <i className="ti ti-loader" style={{ fontSize: 20, display: "block", marginBottom: 8 }}></i>
                  Waiting for data...
                </div>
              )}
              {events.map(e => (
                <div key={e.id} style={{ padding: "3px 0", borderBottom: "0.5px solid var(--border)", display: "flex", gap: 6, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--text-muted)", whiteSpace: "nowrap", fontSize: 10 }}>[{e.time}]</span>
                  <span className={`badge ${e.type === "product" ? "badge-accent" : e.type === "affiliate" ? "badge-pro" : "badge-green"}`} style={{ fontSize: 8, flexShrink: 0, padding: "1px 5px" }}>
                    {e.label}
                  </span>
                  <span style={{ color: "var(--text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: 10 }}>
                    {e.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-header">
          <span className="section-title">Top Viral Products Today — Live</span>
          <div style={{ display: "flex", gap: 8 }}>
            <span className="badge badge-red" style={{ fontSize: 10 }}>
              <span className="live-dot" style={{ width: 5, height: 5, marginRight: 3 }}></span>
              LIVE UPDATES
            </span>
            <button className="btn btn-ghost btn-sm" onClick={() => window.location.reload()}>
              <i className="ti ti-refresh"></i> Refresh
            </button>
          </div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th><th>Produk</th><th>Category</th><th>Est. Sales</th><th>Est. GMV</th><th>Viral Score</th><th>Confidence</th><th>Trend 5min</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.id} className="clickable" onClick={() => window.location.href = `/products/${p.id}`}>
                  <td style={{ color: "var(--text-muted)", fontSize: 12 }}>{i + 1}</td>
                  <td>
                    <div className="product-cell">
                      <div className="product-img">{p.emoji}</div>
                      <div>
                        <div className="product-name">{p.name}</div>
                      </div>
                    </div>
                  </td>
                  <td><span className="badge badge-accent">{p.category}</span></td>
                  <td style={{ fontSize: 12 }}>{p.sales}</td>
                  <td style={{ fontSize: 12, fontWeight: 500 }}>{p.gmv}</td>
                  <td>
                    <div className="score-bar-wrap">
                      <div className="score-bar">
                        <div className={`score-bar-fill ${p.viralScore > 80 ? "score-fill-high" : ""}`} style={{ width: `${p.viralScore}%` }}></div>
                      </div>
                      <span className="score-num">{p.viralScore}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`badge ${p.confNum > 85 ? "badge-green" : "badge-amber"}`}>{p.confidence}</span>
                  </td>
                  <td>
                    {p.trend === "up"
                      ? <span className="trend-up"><i className="ti ti-trending-up"></i> +{randBetween(2, 15)}%</span>
                      : <span className="trend-down"><i className="ti ti-trending-down"></i> -{randBetween(1, 8)}%</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
