"use client"

import { useRouter } from "next/navigation"

export function ProductRow({ product, index }: {
  product: { id: number; emoji: string; name: string; category: string; sales: string; gmv: string; viralScore: number; confNum: number; confidence: string; trend: string }
  index: number
}) {
  const router = useRouter()

  return (
    <tr className="clickable" onClick={() => router.push(`/products/${product.id}`)}>
      <td style={{ color: "var(--text-muted)", fontSize: 12 }}>{index + 1}</td>
      <td>
        <div className="product-cell">
          <div className="product-img">{product.emoji}</div>
          <div>
            <div className="product-name">{product.name}</div>
          </div>
        </div>
      </td>
      <td><span className="badge badge-accent">{product.category}</span></td>
      <td style={{ fontSize: 12 }}>{product.sales}</td>
      <td style={{ fontSize: 12, fontWeight: 500 }}>{product.gmv}</td>
      <td>
        <div className="score-bar-wrap">
          <div className="score-bar">
            <div className={`score-bar-fill ${product.viralScore > 80 ? "score-fill-high" : ""}`} style={{ width: `${product.viralScore}%` }}></div>
          </div>
          <span className="score-num">{product.viralScore}</span>
        </div>
      </td>
      <td>
        <span className={`badge ${product.confNum > 85 ? "badge-green" : "badge-amber"}`}>{product.confidence}</span>
      </td>
      <td>
        {product.trend === "up"
          ? <span className="trend-up"><i className="ti ti-trending-up"></i> Naik</span>
          : <span className="trend-down"><i className="ti ti-trending-down"></i> Turun</span>
        }
      </td>
    </tr>
  )
}

export function AffiliateRow({ affiliate, index }: {
  affiliate: { id: number; init: string; color: string; name: string; bio: string; followers: string; views: string; sales: string; cat: string; tier: string }
  index: number
}) {
  const router = useRouter()

  return (
    <tr className="clickable" onClick={() => router.push(`/affiliates/${affiliate.id}`)}>
      <td style={{ color: "var(--text-muted)", fontSize: 12 }}>{index + 1}</td>
      <td>
        <div className="product-cell">
          <div className={`aff-avatar ${affiliate.color}`}>{affiliate.init}</div>
          <div>
            <div className="product-name">{affiliate.name}</div>
            <div className="product-cat">{affiliate.bio.substring(0, 40)}...</div>
          </div>
        </div>
      </td>
      <td style={{ fontSize: 13 }}>{affiliate.followers}</td>
      <td style={{ fontSize: 13 }}>{affiliate.views}</td>
      <td style={{ fontSize: 13, fontWeight: 500, color: "var(--text-success)" }}>{affiliate.sales}</td>
      <td><span className="badge badge-accent">{affiliate.cat}</span></td>
      <td>
        <span className={`badge ${affiliate.tier === "Top Creator" ? "badge-pro" : "badge-green"}`}>
          {affiliate.tier}
        </span>
      </td>
    </tr>
  )
}

export function DashProductRow({ product, index }: {
  product: { id: number; emoji: string; name: string; category: string; viralScore: number; gmv: string; trend: string }
  index: number
}) {
  const router = useRouter()

  return (
    <tr className="clickable" onClick={() => router.push(`/products/${product.id}`)}>
      <td style={{ color: "var(--text-muted)", fontSize: 12 }}>{index + 1}</td>
      <td>
        <div className="product-cell">
          <div className="product-img">{product.emoji}</div>
          <div>
            <div className="product-name">{product.name}</div>
          </div>
        </div>
      </td>
      <td><span className="badge badge-accent">{product.category}</span></td>
      <td>
        <div className="score-bar-wrap">
          <div className="score-bar">
            <div className={`score-bar-fill ${product.viralScore > 85 ? "score-fill-high" : ""}`} style={{ width: `${product.viralScore}%` }}></div>
          </div>
          <span className="score-num">{product.viralScore}</span>
        </div>
      </td>
      <td style={{ fontSize: 13, fontWeight: 500 }}>{product.gmv}</td>
      <td>
        {product.trend === "up"
          ? <span className="trend-up"><i className="ti ti-trending-up"></i></span>
          : <span className="trend-down"><i className="ti ti-trending-down"></i></span>
        }
      </td>
    </tr>
  )
}

export function DashAffiliateRow({ affiliate, index }: {
  affiliate: { id: number; init: string; color: string; name: string; followers: string; views: string; sales: string; tier: string }
  index: number
}) {
  const router = useRouter()

  return (
    <tr className="clickable" onClick={() => router.push(`/affiliates/${affiliate.id}`)}>
      <td style={{ color: "var(--text-muted)", fontSize: 12 }}>{index + 1}</td>
      <td>
        <div className="product-cell">
          <div className={`aff-avatar ${affiliate.color}`}>{affiliate.init}</div>
          <div className="product-name">{affiliate.name}</div>
        </div>
      </td>
      <td style={{ fontSize: 13 }}>{affiliate.followers}</td>
      <td style={{ fontSize: 13 }}>{affiliate.views}</td>
      <td style={{ fontSize: 13, fontWeight: 500, color: "var(--text-success)" }}>{affiliate.sales}</td>
      <td><span className="badge badge-pro">{affiliate.tier}</span></td>
    </tr>
  )
}
