"use client"

const creators = [
  { rank: 1, init: "NB", name: "Nadia Beauty", color: "aff-colors-b", followers: "892K", avgViews: "2.1M", engagement: "8.2%", viralVideos: 34, revenue: "RM180K", trend: "up" },
  { rank: 2, init: "SQ", name: "SkinQueenMY", color: "aff-colors-b", followers: "641K", avgViews: "1.6M", engagement: "7.4%", viralVideos: 28, revenue: "RM142K", trend: "up" },
  { rank: 3, init: "FL", name: "FitLifeKL", color: "aff-colors", followers: "523K", avgViews: "1.2M", engagement: "6.9%", viralVideos: 22, revenue: "RM121K", trend: "up" },
  { rank: 4, init: "TB", name: "TechBroMY", color: "aff-colors-d", followers: "418K", avgViews: "980K", engagement: "6.1%", viralVideos: 18, revenue: "RM98K", trend: "up" },
  { rank: 5, init: "FQ", name: "FashionQueenMY", color: "aff-colors-c", followers: "387K", avgViews: "890K", engagement: "5.8%", viralVideos: 15, revenue: "RM89K", trend: "down" },
  { rank: 6, init: "BS", name: "BeautySKin88", color: "aff-colors-b", followers: "312K", avgViews: "720K", engagement: "5.4%", viralVideos: 12, revenue: "RM76K", trend: "up" },
  { rank: 7, init: "GM", name: "GamingBroMY", color: "aff-colors-d", followers: "256K", avgViews: "540K", engagement: "4.9%", viralVideos: 9, revenue: "RM62K", trend: "down" },
  { rank: 8, init: "HM", name: "HomeDecorMY", color: "aff-colors-c", followers: "198K", avgViews: "410K", engagement: "4.5%", viralVideos: 7, revenue: "RM48K", trend: "up" },
]

export default function LeaderboardPage() {
  return (
    <div className="fade-in">
      <div className="section-header">
        <span className="section-title"><i className="ti ti-trophy" style={{ color: "#f59e0b" }}></i> Creator Leaderboard</span>
        <span className="badge badge-green">Dikemas kini 5 min lalu</span>
      </div>

      <div className="metric-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
        <div className="metric-card">
          <div className="metric-label">Top Creator</div>
          <div className="metric-value" style={{ fontSize: 18 }}>Nadia Beauty</div>
          <div className="metric-delta"><i className="ti ti-trophy"></i> 34 video viral</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Avg. Viral Views</div>
          <div className="metric-value" style={{ fontSize: 18 }}>2.1M</div>
          <div className="metric-delta"><i className="ti ti-arrow-up"></i> +12% minggu ini</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Total Revenue Tracked</div>
          <div className="metric-value" style={{ fontSize: 18 }}>RM816K</div>
          <div className="metric-delta"><i className="ti ti-arrow-up"></i> +8% bulan ini</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Active Creators</div>
          <div className="metric-value" style={{ fontSize: 18 }}>2,341</div>
          <div className="metric-delta"><i className="ti ti-arrow-up"></i> +126 bulan ini</div>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th><th>Creator</th><th>Followers</th><th>Avg. Views</th><th>Engagement</th><th>Viral Videos</th><th>Est. Revenue</th><th>Trend</th>
            </tr>
          </thead>
          <tbody>
            {creators.map(c => (
              <tr key={c.rank} className="clickable" onClick={() => window.location.href = `/affiliates/${c.rank}`}>
                <td>
                  <span style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 24, height: 24, borderRadius: "50%",
                    background: c.rank <= 3 ? "linear-gradient(135deg,#f59e0b,#fbbf24)" : "var(--surface-2)",
                    color: c.rank <= 3 ? "#fff" : "var(--text-muted)",
                    fontSize: 11, fontWeight: 600,
                  }}>{c.rank}</span>
                </td>
                <td>
                  <div className="product-cell">
                    <div className={`aff-avatar ${c.color}`}>{c.init}</div>
                    <div className="product-name">{c.name}</div>
                  </div>
                </td>
                <td style={{ fontSize: 13 }}>{c.followers}</td>
                <td style={{ fontSize: 13 }}>{c.avgViews}</td>
                <td><span className="badge badge-green">{c.engagement}</span></td>
                <td style={{ fontSize: 13 }}>{c.viralVideos}</td>
                <td style={{ fontSize: 13, fontWeight: 500, color: "var(--text-success)" }}>{c.revenue}</td>
                <td>{c.trend === "up"
                  ? <span className="trend-up"><i className="ti ti-trending-up"></i></span>
                  : <span className="trend-down"><i className="ti ti-trending-down"></i></span>
                }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
