"use client"

import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import ThemeToggle from "./theme-toggle"

const titles: Record<string, string> = {
  "/": "Dashboard",
  "/products": "Produk Viral",
  "/affiliates": "Affiliate",
  "/live": "Live Analytics",
  "/trending": "Trending",
  "/ai-analysis": "AI Video Coach",
  "/leaderboard": "Leaderboard",
  "/saved": "Saved",
}

export default function TopBar() {
  const pathname = usePathname()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const basePath = "/" + pathname.split("/").filter(Boolean)[0]
  const title = titles[pathname] || titles[basePath] || "Detail"

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    if (searchQuery.includes("tiktok.com")) {
      window.location.href = "/ai-analysis?url=" + encodeURIComponent(searchQuery)
    } else {
      router.push("/ai-analysis?q=" + encodeURIComponent(searchQuery))
    }
  }

  return (
    <div className="topbar">
      <div className="topbar-title">{title}</div>
      <div className="topbar-right">
        <form onSubmit={handleSearch} style={{ position: "relative" }}>
          <i className="ti ti-search" style={{
            position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)",
            fontSize: 14, color: "var(--text-muted)", pointerEvents: "none",
          }}></i>
          <input
            type="text"
            placeholder="Search products, creators, or paste TikTok URL..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              height: 32,
              width: 280,
              padding: "0 12px 0 32px",
              borderRadius: "var(--radius)",
              border: "0.5px solid var(--border)",
              background: "var(--surface-0)",
              color: "var(--text-primary)",
              fontSize: 12,
              outline: "none",
            }}
          />
        </form>
        <span className="badge badge-amber" style={{ fontSize: 10 }}>
          <i className="ti ti-clock"></i> 5 min ago
        </span>
        <ThemeToggle />
        <div className="avatar" title="Pengguna demo">DM</div>
      </div>
    </div>
  )
}
