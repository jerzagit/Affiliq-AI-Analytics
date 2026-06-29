"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { products } from "@/data/products"
import { affiliates } from "@/data/affiliates"
import { DashProductRow, DashAffiliateRow } from "@/components/table-rows"

export default function DashboardPage() {
  const [liveSales, setLiveSales] = useState(42300)
  const [liveViews, setLiveViews] = useState(2840000)
  const [liveProducts, setLiveProducts] = useState(1284)
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    const h = new Date().getHours()
    if (h < 12)       setGreeting("Selamat Pagi")
    else if (h < 18) setGreeting("Selamat Tengahari")
    else setGreeting("Selamat Malam")
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveSales(s => s + Math.floor(Math.random() * 50))
      setLiveViews(v => v + Math.floor(Math.random() * 500))
      setLiveProducts(p => p + (Math.random() > 0.8 ? 1 : 0))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const topProducts = products.slice(0, 5)
  const topAffiliates = affiliates.slice(0, 4)

  return (
    <>
      <div className="fade-in">
        <div className="hero-welcome">
          <div className="hero-welcome-content">
            <h2>{greeting || "Selamat Datang"}, Pengguna</h2>
            <p>AffiliQ — TikTok Shop Intelligence Platform. Pantau produk viral, analisis video, dan track affiliate dalam masa nyata.</p>
            <div className="hero-stats-row">
              <div className="hero-stat-item">
                <span className="h-num">{liveProducts.toLocaleString()}</span>
                <span className="h-label">Produk Ditrack</span>
              </div>
              <div className="hero-stat-item">
                <span className="h-num">RM{(liveSales / 1000).toFixed(0)}K</span>
                <span className="h-label">Jualan Hari Ini</span>
              </div>
              <div className="hero-stat-item">
                <span className="h-num">{(liveViews / 1000000).toFixed(1)}M</span>
                <span className="h-label">Total Views</span>
              </div>
              <div className="hero-stat-item">
                <span className="h-num">2,341</span>
                <span className="h-label">Affiliate Aktif</span>
              </div>
            </div>
          </div>
        </div>

        <div className="metric-grid">
          <div className="metric-card">
            <div className="metric-label">Produk Ditrack</div>
            <div className="metric-value">{liveProducts.toLocaleString()}</div>
            <div className="metric-delta"><i className="ti ti-arrow-up"></i> +48 minggu ini</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Jualan Hari Ini (Scrape)</div>
            <div className="metric-value">RM{liveSales.toLocaleString()}</div>
            <div className="metric-delta"><i className="ti ti-arrow-up"></i> +18% bulan ini</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Total Views Discrape</div>
            <div className="metric-value">{(liveViews / 1000).toFixed(0)}K</div>
            <div className="metric-delta"><i className="ti ti-arrow-up"></i> +{(liveViews % 1000).toLocaleString()} sejam lalu</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Top Affiliate Aktif</div>
            <div className="metric-value">2,341</div>
            <div className="metric-delta"><i className="ti ti-arrow-up"></i> +126 bulan ini</div>
          </div>
        </div>

        <div className="card gradient-border" style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontSize: 28, animation: "float 3s ease-in-out infinite" }}>🔥</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500 }}>Live: Viral Products Today</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                <i className="ti ti-radar"></i> Scraping data dari TikTok Shop Malaysia — {new Date().toLocaleTimeString("ms-MY", { hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>
            <Link href="/live" className="btn btn-primary btn-sm">
              <i className="ti ti-player-play"></i> Live Analytics
            </Link>
          </div>
        </div>

        <div className="section-header">
          <span className="section-title">
            Produk Terpanas Sekarang
            <span className="badge badge-red" style={{ marginLeft: 6, fontSize: 10 }}>HOT</span>
          </span>
          <Link href="/products" className="btn btn-ghost btn-sm">
            Lihat semua <i className="ti ti-arrow-right"></i>
          </Link>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th><th>Produk</th><th>Kategori</th><th>Viral Score</th><th>Est. GMV</th><th>Trend</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((p, i) => (
                <DashProductRow key={p.id} product={p} index={i} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="section-header" style={{ marginTop: 8 }}>
          <span className="section-title">Top Affiliate Minggu Ini</span>
          <Link href="/affiliates" className="btn btn-ghost btn-sm">
            Lihat semua <i className="ti ti-arrow-right"></i>
          </Link>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th><th>Kreator</th><th>Followers</th><th>Total Views</th><th>Est. Jualan</th><th>Badge</th>
              </tr>
            </thead>
            <tbody>
              {topAffiliates.map((a, i) => (
                <DashAffiliateRow key={a.id} affiliate={a} index={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
