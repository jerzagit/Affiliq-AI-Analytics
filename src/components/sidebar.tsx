"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { section: "Utama" },
  { label: "Dashboard", icon: "ti-layout-dashboard", href: "/" },
  { label: "Live Analytics", icon: "ti-player-play", href: "/live" },
  { label: "Trending", icon: "ti-trending-up", href: "/trending" },
  { section: "Analitik" },
  { label: "AI Video Coach", icon: "ti-robot", href: "/ai-analysis" },
  { label: "Produk Viral", icon: "ti-box", href: "/products" },
  { label: "Afiliasi", icon: "ti-users", href: "/affiliates" },
  { label: "Leaderboard", icon: "ti-trophy", href: "/leaderboard" },
  { section: "Data" },
  { label: "Saved", icon: "ti-bookmark", href: "/saved" },
]

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-mark">
          <div className="logo-icon"><i className="ti ti-chart-dots-3" aria-hidden="true"></i></div>
          <div>
            <div className="logo-text">AffiliQ</div>
            <div className="logo-sub">TikTok Shop Intelligence</div>
          </div>
        </div>
      </div>
      <nav className="nav" aria-label="Navigasi utama">
        {navItems.map((item, i) =>
          "section" in item ? (
            <div key={i} className="nav-section">{item.section}</div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item ${isActive(item.href) ? "active" : ""}`}
            >
              <i className={`ti ${item.icon}`} aria-hidden="true"></i>
              {item.label}
            </Link>
          )
        )}
        <div className="nav-item" style={{ cursor: "pointer" }}>
          <i className="ti ti-settings" aria-hidden="true"></i> Tetapan ↗
        </div>
      </nav>
      <div className="sidebar-footer">
        <div className="data-row">
          <span className="data-label" style={{ fontSize: 11 }}>Status data</span>
          <span className="badge badge-green">
            <span className="live-dot" style={{ width: 5, height: 5, marginRight: 3 }}></span>
            Live
          </span>
        </div>
      </div>
    </aside>
  )
}
