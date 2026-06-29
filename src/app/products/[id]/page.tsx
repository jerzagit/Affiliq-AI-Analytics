import Link from "next/link"
import { notFound } from "next/navigation"
import { products } from "@/data/products"
import { affiliates, getAffiliateByName } from "@/data/affiliates"

export default async function ProductDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params
  const p = products.find(x => x.id === Number(id))
  if (!p) notFound()

  return (
    <>
      <Link href="/products" className="back-btn">
        <i className="ti ti-arrow-left" aria-hidden="true"></i> Back to Products
      </Link>

      <div className="detail-hero">
        <div className="hero-icon">{p.emoji}</div>
        <div className="hero-info">
          <div className="hero-meta">
            <span className="badge badge-accent">{p.category}</span>
            <span className={`badge ${p.viralScore > 85 ? "badge-green" : "badge-amber"}`}>
              Viral Score: {p.viralScore}
            </span>
            <span className="badge badge-pro">Confidence: {p.confidence}</span>
            {p.trend === "up"
              ? <span className="badge badge-green"><i className="ti ti-trending-up"></i> Trending Up</span>
              : <span className="badge badge-red"><i className="ti ti-trending-down"></i> Trending Down</span>
            }
          </div>
          <div className="hero-name">{p.name}</div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 14 }}>
            {p.desc}
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-label">Est. Sales</div>
              <div className="hero-stat-val" style={{ fontSize: 13 }}>{p.sales}</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-label">Est. GMV</div>
              <div className="hero-stat-val" style={{ fontSize: 13, color: "var(--text-success)" }}>{p.gmv}</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-label">Top Affiliate</div>
              <div className="hero-stat-val" style={{ fontSize: 13, color: "var(--text-accent)" }}>{p.topAffiliate}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="two-col">
        <div className="card">
          <div className="card-title"><i className="ti ti-brand-tiktok" aria-hidden="true"></i> Top Video Viral</div>
          {p.topVideos.map((v, i) => (
            <div key={i} className="video-row">
              <div className="video-thumb">{v.t}</div>
              <div style={{ flex: 1 }}>
                <div className="video-title">{v.title}</div>
                <div className="video-views"><i className="ti ti-eye" aria-hidden="true"></i> {v.views} views</div>
              </div>
            </div>
          ))}
        </div>
        <div className="card">
          <div className="card-title"><i className="ti ti-users" aria-hidden="true"></i> Top Affiliate Produk Ini</div>
          {p.topAffs.map((a, i) => {
            const aff = getAffiliateByName(a)
            return (
              <Link key={a} href={`/affiliates/${aff?.id || "#"}`} className="affiliate-row" style={{ textDecoration: "none" }}>
                <div className={`aff-avatar ${aff ? aff.color : "aff-colors"}`}>
                  {a.substring(0, 2).toUpperCase()}
                </div>
                <div className="aff-name" style={{ color: "var(--text-primary)" }}>{a}</div>
                <span className="badge badge-accent" style={{ fontSize: 10 }}>#{i + 1}</span>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Sales Estimate & Confidence Range</div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <div className="confidence-ring">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="30" stroke="var(--border)" strokeWidth="6" fill="none" />
              <circle
                cx="40" cy="40" r="30"
                stroke="var(--fill-accent)" strokeWidth="6" fill="none"
                strokeDasharray={2 * 3.14159 * 30}
                strokeDashoffset={2 * 3.14159 * 30 * (1 - p.confNum / 100)}
                strokeLinecap="round"
              />
            </svg>
            <div className="ring-label">
              <span className="ring-pct">{p.confidence}</span>
              <span className="ring-sub">confidence</span>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div className="data-row"><span className="data-label">Sales range</span><span className="data-val">{p.sales}</span></div>
            <div className="data-row"><span className="data-label">Range GMV</span><span className="data-val" style={{ color: "var(--text-success)" }}>{p.gmv}</span></div>
            <div className="data-row"><span className="data-label">Category</span><span className="data-val">{p.category}</span></div>
            <div className="data-row"><span className="data-label">Viral Score</span><span className="data-val" style={{ color: "var(--text-accent)" }}>{p.viralScore}/100</span></div>
          </div>
        </div>
      </div>
    </>
  )
}
