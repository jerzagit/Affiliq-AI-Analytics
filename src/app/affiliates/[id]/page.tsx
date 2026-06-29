import Link from "next/link"
import { notFound } from "next/navigation"
import { affiliates } from "@/data/affiliates"

export default async function AffiliateDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params
  const a = affiliates.find(x => x.id === Number(id))
  if (!a) notFound()

  return (
    <>
      <Link href="/affiliates" className="back-btn">
        <i className="ti ti-arrow-left" aria-hidden="true"></i> Kembali ke affiliate
      </Link>

      <div className="detail-hero">
        <div className={`aff-avatar ${a.color}`} style={{ width: 60, height: 60, fontSize: 20, borderRadius: "50%", flexShrink: 0 }}>
          {a.init}
        </div>
        <div className="hero-info">
          <div className="hero-name">{a.name}</div>
          <div className="hero-meta">
            <span className={`badge ${a.tier === "Top Creator" ? "badge-pro" : "badge-green"}`}>{a.tier}</span>
            <span className="badge badge-accent">{a.cat}</span>
          </div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 14 }}>
            {a.bio}
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-label">Followers</div>
              <div className="hero-stat-val">{a.followers}</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-label">Total Views</div>
              <div className="hero-stat-val">{a.views}</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-label">Est. Jualan</div>
              <div className="hero-stat-val" style={{ color: "var(--text-success)" }}>{a.sales}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title"><i className="ti ti-video" aria-hidden="true"></i> Video Terbaik</div>
        {a.vids.map((v, i) => (
          <div key={i} className="video-row">
            <div className="video-thumb">{v.e}</div>
            <div style={{ flex: 1 }}>
              <div className="video-title">{v.title}</div>
              <div className="video-views">{v.views} views</div>
            </div>
            <span className="badge badge-green" style={{ fontSize: 10 }}>{v.conv} CVR</span>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-title">Analitik Prestasi</div>
        <div className="data-row">
          <span className="data-label">Engagement rate anggaran</span>
          <span className="data-val" style={{ color: "var(--text-accent)" }}>7.8 – 9.1%</span>
        </div>
        <div className="data-row">
          <span className="data-label">Conversion rate purata</span>
          <span className="data-val" style={{ color: "var(--text-success)" }}>{a.vids[0].conv}</span>
        </div>
        <div className="data-row">
          <span className="data-label">Kategori dominan</span>
          <span className="data-val">{a.cat}</span>
        </div>
        <div className="data-row">
          <span className="data-label">Status</span>
          <span className="data-val">{a.tier}</span>
        </div>
      </div>
    </>
  )
}
