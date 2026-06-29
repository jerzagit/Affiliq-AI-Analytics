"use client"

"use client"

import { useState } from "react"

interface SavedAnalysis {
  id: number
  url: string
  title: string
  date: string
  score: number
  views: string
}

const savedInitial: SavedAnalysis[] = [
  { id: 1, url: "tiktok.com/@nadiabeauty/video/123", title: "Serum Jeragat Viral — Nadia Beauty", date: "2025-06-29 14:32", score: 92, views: "2.3M" },
  { id: 2, url: "tiktok.com/@skinqueenmy/video/456", title: "Krim Mata Collagen — SkinQueenMY", date: "2025-06-28 10:15", score: 87, views: "1.8M" },
]

export default function SavedPage() {
  const [saved, setSaved] = useState(savedInitial)

  const handleDelete = (id: number) => {
    setSaved(s => s.filter(x => x.id !== id))
  }

  return (
    <div className="fade-in">
      <div className="section-header">
        <span className="section-title"><i className="ti ti-bookmark"></i> Saved Analyses</span>
        <span className="badge badge-accent">{saved.length} saved</span>
      </div>

      {saved.length === 0 ? (
        <div className="card" style={{ textAlign: "center", padding: 48 }}>
          <div style={{ fontSize: 48, marginBottom: 12, opacity: 0.5 }}><i className="ti ti-bookmark-off"></i></div>
          <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 6 }}>Belum ada analisis disimpan</div>
          <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>
            Analisis video TikTok anda akan muncul di sini. Klik 'Save' selepas analyze.
          </div>
          <button className="btn btn-primary" onClick={() => window.location.href = "/ai-analysis"}>
            <i className="ti ti-sparkles"></i> Analyze Video Now
          </button>
        </div>
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          {saved.map(item => (
            <div key={item.id} className="card" style={{ cursor: "pointer" }} onClick={() => window.location.href = "/ai-analysis"}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontSize: 18, flexShrink: 0,
                }}>
                  <i className="ti ti-brand-tiktok"></i>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{item.title}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>
                    <i className="ti ti-clock"></i> {item.date} · <i className="ti ti-eye"></i> {item.views} · Score: {item.score}/100
                  </div>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <span className={`badge ${item.score >= 90 ? "badge-green" : "badge-amber"}`} style={{ fontSize: 10 }}>
                    Score {item.score}
                  </span>
                  <button className="btn btn-ghost btn-sm" onClick={e => { e.stopPropagation(); handleDelete(item.id) }}
                    style={{ color: "var(--text-danger)" }}>
                    <i className="ti ti-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="card" style={{ marginTop: 20, background: "var(--bg-pro)", border: "0.5px solid var(--border-pro)" }}>
        <div className="card-title" style={{ color: "var(--text-pro)" }}>
          <i className="ti ti-database"></i> Saved to Local Database
        </div>
        <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>
          Analisis disimpan dalam <strong>IndexedDB</strong> (local) untuk akses luar talian. Apabila backend diintegrasikan, data akan disimpan ke <strong>PostgreSQL</strong> dan boleh diakses dari mana-mana peranti.
        </div>
        <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
          <span className="badge badge-green" style={{ fontSize: 9 }}>2 items</span>
          <span className="badge badge-accent" style={{ fontSize: 9 }}>Local storage</span>
          <span className="badge badge-pro" style={{ fontSize: 9 }}>IndexedDB</span>
        </div>
      </div>
    </div>
  )
}
