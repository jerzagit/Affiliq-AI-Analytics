"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navItems = [
  { section: "Utama" },
  { label: "Dashboard", icon: "ti-layout-dashboard", href: "/" },
  { label: "Live Analytics", icon: "ti-player-play", href: "/live" },
  { label: "Trending", icon: "ti-trending-up", href: "/trending" },
  { section: "Analitik" },
  { label: "AI Video Coach", icon: "ti-robot", href: "/ai-analysis" },
  { label: "Produk Viral", icon: "ti-box", href: "/products" },
  { label: "Affiliate", icon: "ti-users", href: "/affiliates" },
  { label: "Leaderboard", icon: "ti-trophy", href: "/leaderboard" },
  { section: "Data" },
  { label: "Saved", icon: "ti-bookmark", href: "/saved" },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        className="sidebar-hamburger"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
      >
        <i className="ti ti-menu-2"></i>
      </button>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />
      )}

      <aside className={`sidebar ${collapsed ? "collapsed" : ""} ${mobileOpen ? "mobile-open" : ""}`}>
        <div className="sidebar-logo">
          <div className="logo-mark">
            <div className="logo-icon"><i className="ti ti-chart-dots-3" aria-hidden="true"></i></div>
            <div className="logo-text-wrap">
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
                onClick={() => setMobileOpen(false)}
                title={collapsed ? item.label : undefined}
              >
                <i className={`ti ${item.icon}`} aria-hidden="true"></i>
                <span className="nav-label">{item.label}</span>
              </Link>
            )
          )}
          <div className="nav-item" style={{ cursor: "pointer" }}>
            <i className="ti ti-settings" aria-hidden="true"></i>
            <span className="nav-label">Tetapan ↗</span>
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

        {/* Toggle button */}
        <button
          className="sidebar-toggle"
          onClick={() => setCollapsed(c => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <i className={`ti ti-chevron-${collapsed ? "right" : "left"}`}></i>
        </button>
      </aside>
    </>
  )
}
