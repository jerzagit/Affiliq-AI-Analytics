export interface Affiliate {
  id: number
  init: string
  name: string
  followers: string
  views: string
  sales: string
  cat: string
  tier: string
  color: string
  bio: string
  vids: { e: string; title: string; views: string; conv: string }[]
}

export const affiliates: Affiliate[] = [
  { id:1, init:"NB", name:"Nadia Beauty", followers:"892K", views:"24.3M", sales:"RM180K+", cat:"Kecantikan", tier:"Top Creator", color:"aff-colors-b", bio:"Kreator kecantikan No.1 Malaysia dengan engagement rate 8.2%. Spesialis serum dan skincare.", vids:[{e:"🧴",title:"Serum Jeragat 7 hari — RESULT",views:"2.3M",conv:"4.2%"},{e:"✨",title:"Skincare routine pagi RM50 je",views:"1.1M",conv:"3.8%"},{e:"💛",title:"Unboxing parcel TikTok Shop haul",views:"870K",conv:"2.9%"}] },
  { id:2, init:"SQ", name:"SkinQueenMY", followers:"641K", views:"18.7M", sales:"RM142K+", cat:"Kecantikan", tier:"Top Creator", color:"aff-colors-b", bio:"Review skincare jujur tanpa campur tangan brand. Komuniti 641K setia mengikuti recommendation.", vids:[{e:"👁️",title:"Krim mata collagen — 14 hari test",views:"1.8M",conv:"3.9%"},{e:"😍",title:"Haul produk baru bulan ini",views:"720K",conv:"3.1%"},{e:"💊",title:"Supplement mana worth it?",views:"510K",conv:"2.7%"}] },
  { id:3, init:"FL", name:"FitLifeKL", followers:"523K", views:"15.2M", sales:"RM121K+", cat:"Kesihatan", tier:"Rising Star", color:"aff-colors", bio:"Content fitness + nutrition terbaik Malaysia. Gabungkan lifestyle sihat dengan produk affordable.", vids:[{e:"💪",title:"Transformation 30 hari — real result",views:"980K",conv:"4.5%"},{e:"🥗",title:"Meal prep mingguan RM100",views:"670K",conv:"3.6%"},{e:"🏃",title:"Cardio + supplement combo",views:"420K",conv:"3.2%"}] },
  { id:4, init:"TB", name:"TechBroMY", followers:"418K", views:"11.9M", sales:"RM98K+", cat:"Elektronik", tier:"Top Creator", color:"aff-colors-d", bio:"Review gadget dan aksesori tech paling comprehensive Malaysia. Trusted oleh 418K tech enthusiast.", vids:[{e:"🔌",title:"Wireless charger worth it?",views:"760K",conv:"3.4%"},{e:"📱",title:"Best budget smartphone accessories 2025",views:"540K",conv:"3.0%"},{e:"⚡",title:"Speed test 10 powerbank budget",views:"380K",conv:"2.8%"}] },
  { id:5, init:"FQ", name:"FashionQueenMY", followers:"387K", views:"10.4M", sales:"RM89K+", cat:"Fesyen", tier:"Top Creator", color:"aff-colors-c", bio:"Content fesyen Melayu moden dengan fokus modest wear dan baju kurung kontemporari.", vids:[{e:"👗",title:"Koleksi Raya 2025 — review awal",views:"1.2M",conv:"3.7%"},{e:"✨",title:"OOTDs minggu ni TikTok haul",views:"580K",conv:"3.2%"},{e:"🎀",title:"Styling tips baju kurung moden",views:"340K",conv:"2.6%"}] },
  { id:6, init:"BS", name:"BeautySKin88", followers:"312K", views:"8.8M", sales:"RM76K+", cat:"Kecantikan", tier:"Rising Star", color:"aff-colors-b", bio:"Spesialis produk skincare tempatan dan herbal. Review authentic dengan before/after real.", vids:[{e:"🧼",title:"Sabun sulphur — 5 hari result",views:"1.1M",conv:"4.1%"},{e:"🌿",title:"Natural skincare Malaysia vs import",views:"490K",conv:"3.5%"},{e:"✅",title:"Skincare rutin malam budget",views:"280K",conv:"2.9%"}] }
]

export function getAffiliateByName(name: string): Affiliate | undefined {
  return affiliates.find(a => a.name === name)
}
