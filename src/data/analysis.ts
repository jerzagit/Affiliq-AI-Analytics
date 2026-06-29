export interface ViralScoreChecklist {
  strongHook: { pass: boolean; note: string }
  fastPacing: { pass: boolean; note: string }
  emotionalAppeal: { pass: boolean; note: string }
  productShown: { pass: boolean; note: string }
  clearCTA: { pass: boolean; note: string }
  trendingMusic: { pass: boolean; note: string }
  purchaseIntent: { pass: boolean; note: string }
  goodLighting: { pass: boolean; note: string }
}

export interface TranscriptSegment {
  time: string
  text: string
  score: number
  label: string
}

export interface Analysis {
  product: string
  duration: string
  views: string
  likes: string
  saves: string
  comments: string
  shares: string
  conv: string
  hook: string
  hookScore: number
  overallScore: number
  script: string
  why: string[]
  improve: string[]
  checklist: ViralScoreChecklist
  transcriptFull: TranscriptSegment[]
  audioAnalysis: string
  visualAnalysis: string
  commentSentiment: string
  estimatedSales: string
  estimatedRevenue: string
  competitionGap: string
  coachAdvice: string
}

const whyOptions = [
  "Hook visual kuat menarik perhatian dalam 3 saat pertama",
  "Gunakan bahasa harian yang relatable dengan target audiens",
  "Tempo editing pantas mengelakkan viewers drop off",
  "Storytelling emosional meningkatkan koneksi dengan penonton",
  "CTA strategik di saat yang tepat selepas value diberikan",
  "Sound trend terkini untuk boost distribusi organik",
  "Before/after yang meyakinkan sebagai social proof",
  "Target audiens spesifik dengan problem yang relatable",
  "Durasi video optimum untuk viewer attention span",
  "Pencahayaan natural yang baik menampakkan hasil produk"
]

const improveOptions = [
  "Tambah subtitle untuk tontonan tanpa bunyi",
  "Cuba POV angle untuk lebih authentic",
  "A/B test hook berbeza untuk optimasi",
  "Tambah urgency seperti countdown timer",
  "Sertakan angka spesifik untuk social proof",
  "Gunakan guest expert untuk authority boost",
  "Buat siri kandungan untuk engagement jangka panjang",
  "Highlight bahan utama secara visual",
  "Kurangkan masa tunggu antara masalah dan solusi",
  "Cipta hashtag challenge untuk UGC"
]

const coachAdviceOptions = [
  "Video ini mempunyai struktur yang hampir sempurna. Fokus pada mengekalkan konsistensi ini untuk video akan datang. Cuba variasikan hook style untuk mengelakkan audience fatigue.",
  "Peningkatan terbesar boleh dibuat pada 3 saat pertama. Pastikan ada elemen visual yang mengejutkan atau soalan yang membuat viewer nak terus tengok.",
  "Strategi CTA awak sudah baik, tapi cuba letak lebih awal (saat 45-50) untuk capture viewers yang akan drop. Guna bahasa lebih direct seperti 'klik link dalam bio sekarang'.",
  "Video ini perform sebab emotional storytelling yang kuat. Untuk video seterusnya, cuba guna format sebelum/selepas yang lebih dramatik untuk tingkatkan shareability."
]

const transcriptTemplates: Record<string, TranscriptSegment[]> = {
  beauty: [
    { time: "0:00 - 0:03", text: "[Hook] Tunjuk masalah kulit — close-up jeragat dengan lighting natural", score: 94, label: "Hook" },
    { time: "0:03 - 0:08", text: "[Pain] Cerita pengalaman peribadi — 'dulu aku malu nak keluar rumah'", score: 88, label: "Pain Point" },
    { time: "0:08 - 0:15", text: "[Solution] Perkenalkan produk — tunjuk packaging dan cara guna", score: 82, label: "Solution" },
    { time: "0:15 - 0:25", text: "[Demo] Aplikasi produk pada kulit — voiceover terangkan sensasi", score: 85, label: "Demo" },
    { time: "0:25 - 0:35", text: "[Before/After] Side-by-side hari 1 vs hari 7 — hasil jelas", score: 96, label: "Social Proof" },
    { time: "0:35 - 0:45", text: "[Testimonial] 'Kawan aku pun cuba, result sama!' — trust building", score: 79, label: "Testimonial" },
    { time: "0:45 - 0:52", text: "[Engage] Tanya viewer — 'korang pernah cuba?' — boost komen", score: 84, label: "Engagement" },
    { time: "0:52 - 0:58", text: "[Urgency] 'Stok terhad bulan ni' — FOMO trigger + limited offer", score: 91, label: "Urgency" },
    { time: "0:58 - 1:04", text: "[CTA] 'Klik link dalam bio' — direct dengan手势 pointing", score: 93, label: "CTA" },
    { time: "1:04 - 1:10", text: "[Outro] 'Jangan lupa follow' — retention hook", score: 76, label: "Outro" },
  ],
  fitness: [
    { time: "0:00 - 0:04", text: "[Hook] Tunjuk body transformation — 'this is me 30 days ago'", score: 91, label: "Hook" },
    { time: "0:04 - 0:10", text: "[Pain] Cerita struggle berat badan — relatable untuk ramai", score: 87, label: "Pain Point" },
    { time: "0:10 - 0:18", text: "[Solution] Perkenalkan meal replacement shake", score: 80, label: "Solution" },
    { time: "0:18 - 0:28", text: "[Demo] Tunjuk cara bancuh dan minum — daily routine", score: 83, label: "Demo" },
    { time: "0:28 - 0:38", text: "[Before/After] Transformation side-by-side 30 hari", score: 95, label: "Social Proof" },
    { time: "0:38 - 0:46", text: "[Testimonial] Skrin DM dari customer puas hati", score: 81, label: "Testimonial" },
    { time: "0:46 - 0:54", text: "[Education] Explain ingredient — protein, fiber, vitamins", score: 77, label: "Education" },
    { time: "0:54 - 1:00", text: "[Urgency] 'Harga naik minggu depan' — scarcity trigger", score: 88, label: "Urgency" },
    { time: "1:00 - 1:06", text: "[CTA] 'Click link in bio untuk diskaun'", score: 90, label: "CTA" },
    { time: "1:06 - 1:12", text: "[Outro] 'Follow untuk lebih tips fitness'", score: 74, label: "Outro" },
  ],
  tech: [
    { time: "0:00 - 0:03", text: "[Hook] Slow-motion unboxing — 'korang tengok ni...'", score: 88, label: "Hook" },
    { time: "0:03 - 0:08", text: "[Problem] 'Penat kan nak charge semua device?'", score: 85, label: "Pain Point" },
    { time: "0:08 - 0:16", text: "[Solution] Tunjuk wireless charger 3-in-1", score: 82, label: "Solution" },
    { time: "0:16 - 0:25", text: "[Demo] Letak phone, airpods, watch — charge serentak", score: 86, label: "Demo" },
    { time: "0:25 - 0:35", text: "[Speed Test] Bandingkan dengan charger original", score: 89, label: "Comparison" },
    { time: "0:35 - 0:44", text: "[Aesthetic] Tunjuk setup meja lengkap — 'minimalist vibes'", score: 84, label: "Lifestyle" },
    { time: "0:44 - 0:50", text: "[Price] 'RM89 je — murah dari pasaran'", score: 87, label: "Pricing" },
    { time: "0:50 - 0:56", text: "[Social Proof] 'Best seller — 10K+ unit terjual'", score: 83, label: "Proof" },
    { time: "0:56 - 1:02", text: "[CTA] 'Link dalam bio — limited stock'", score: 92, label: "CTA" },
    { time: "1:02 - 1:08", text: "[Outro] 'Follow for more tech review'", score: 75, label: "Outro" },
  ],
}

function getTranscript(key: string): TranscriptSegment[] {
  if (key.includes("Jeragat") || key.includes("Beauty")) return transcriptTemplates.beauty
  if (key.includes("Fit") || key.includes("Shake")) return transcriptTemplates.fitness
  return transcriptTemplates.tech
}

function pick<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, n)
}

function generateChecklist(): ViralScoreChecklist {
  return {
    strongHook: { pass: Math.random() > 0.2, note: Math.random() > 0.2 ? "Hook muncul dalam 0-3 saat pertama dengan elemen visual yang kuat" : "Hook boleh diperbaiki dengan elemen kejutan atau soalan" },
    fastPacing: { pass: Math.random() > 0.25, note: Math.random() > 0.25 ? "4-6 saat per cut — tempo optimum untuk retention" : "Beberapa segmen terlalu panjang, boleh dipotong" },
    emotionalAppeal: { pass: Math.random() > 0.15, note: Math.random() > 0.15 ? "Storytelling emosional yang kuat — audiens rasa connect" : "Tambah elemen cerita peribadi untuk emotional hook" },
    productShown: { pass: Math.random() > 0.1, note: Math.random() > 0.1 ? "Produk muncul dalam 5 saat pertama dengan close-up jelas" : "Produk perlu ditunjukkan lebih awal" },
    clearCTA: { pass: Math.random() > 0.15, note: Math.random() > 0.15 ? "CTA jelas di saat 55-60 — 'klik link dalam bio'" : "CTA boleh lebih direct dan urgent" },
    trendingMusic: { pass: Math.random() > 0.3, note: Math.random() > 0.3 ? "Guna sound trending — boost distribusi organik" : "Tukar ke sound yang sedang viral" },
    purchaseIntent: { pass: Math.random() > 0.2, note: Math.random() > 0.2 ? "Komen menunjukkan high purchase intent — 'dh beli', 'link pls'" : "Galakkan viewer komen dengan soalan spesifik" },
    goodLighting: { pass: Math.random() > 0.15, note: Math.random() > 0.15 ? "Pencahayaan natural yang baik — hasil produk nampak jelas" : "Guna ring light untuk konsistensi" },
  }
}

export function generateMockAnalysis(url: string, videoTitle?: string): Analysis {
  const viewsNum = Math.floor(Math.random() * 5000 + 100)
  const likesNum = Math.floor(viewsNum * (0.05 + Math.random() * 0.15))
  const savesNum = Math.floor(likesNum * (0.1 + Math.random() * 0.3))
  const commentsNum = Math.floor(viewsNum * (0.01 + Math.random() * 0.03))
  const sharesNum = Math.floor(viewsNum * (0.02 + Math.random() * 0.05))
  const convRate = (2 + Math.random() * 5).toFixed(1)
  const hookScore = Math.floor(60 + Math.random() * 35)
  const overallScore = Math.floor(Math.random() * 15 + 78)
  const durationMin = Math.floor(Math.random() * 2) + 1
  const durationSec = Math.floor(Math.random() * 60)
  const viewsDisplay = viewsNum >= 1000 ? `${(viewsNum / 1000).toFixed(viewsNum >= 1000000 ? 1 : 0)}${viewsNum >= 1000000 ? 'M' : 'K'}` : `${viewsNum}`
  const likesDisplay = likesNum >= 1000 ? `${(likesNum / 1000).toFixed(likesNum >= 1000000 ? 1 : 0)}${likesNum >= 1000000 ? 'M' : 'K'}` : `${likesNum}`
  const savesDisplay = savesNum >= 1000 ? `${(savesNum / 1000).toFixed(savesNum >= 1000000 ? 1 : 0)}${savesNum >= 1000000 ? 'M' : 'K'}` : `${savesNum}`
  const commentsDisplay = commentsNum >= 1000 ? `${(commentsNum / 1000).toFixed(1)}K` : `${commentsNum}`
  const sharesDisplay = sharesNum >= 1000 ? `${(sharesNum / 1000).toFixed(1)}K` : `${sharesNum}`
  const title = videoTitle || `TikTok Video — ${url.slice(0, 40)}...`

  return {
    product: title,
    duration: `${String(durationMin).padStart(2, '0')}:${String(durationSec).padStart(2, '0')}`,
    views: viewsDisplay,
    likes: likesDisplay,
    saves: savesDisplay,
    comments: commentsDisplay,
    shares: sharesDisplay,
    conv: `${convRate}%`,
    hook: pick([
      "Pembukaan dengan visual menarik dalam 0-3 saat pertama",
      "Guna 'pain point' audiens sebagai hook utama",
      "Before/after yang dramatic dalam split screen",
      "Soalan retorik yang buat viewers nak terus tengok",
      "Tunjuk hasil akhir dulu baru tunjuk proses"
    ], 1)[0],
    hookScore,
    overallScore,
    script: "Analisis script menunjukkan struktur pain → solution → proof yang konsisten. Video menggunakan teknik storytelling yang efektif dengan CTA strategik di penghujung.",
    why: pick(whyOptions, 4),
    improve: pick(improveOptions, 4),
    checklist: generateChecklist(),
    transcriptFull: getTranscript(title),
    audioAnalysis: "Audio jelas dengan voiceover yang energetic. Music background dipadankan dengan mood video. Voice tone sesuai dengan target audiens Melayu.",
    visualAnalysis: "Editing pantas (4-6 saat per cut) dengan transition yang smooth. Color grading warm dan natural. Teks overlay digunakan untuk emphasize point penting. Close-up product shot dalam 3 saat pertama.",
    commentSentiment: `${Math.floor(65 + Math.random() * 25)}% positif — high purchase intent dikesan. Banyak komen 'done order', 'link please', 'dh sampai'.`,
    estimatedSales: `${Math.floor(3 + Math.random() * 20)}K - ${Math.floor(8 + Math.random() * 30)}K unit`,
    estimatedRevenue: `RM${Math.floor(100 + Math.random() * 900)}K - RM${Math.floor(200 + Math.random() * 1500)}K`,
    competitionGap: `Video ini mengatasi ${Math.floor(70 + Math.random() * 25)}% video kompetitor dalam kategori sama berdasarkan engagement rate.`,
    coachAdvice: pick(coachAdviceOptions, 1)[0],
  }
}

export const predefinedAnalyses: Analysis[] = [
  {
    product: "Serum Jeragat Viral — Nadia Beauty",
    duration: "01:24",
    views: "2.3M",
    likes: "187K",
    saves: "43K",
    comments: "12.8K",
    shares: "8.2K",
    conv: "4.2%",
    hook: "Tunjuk kulit dalam 0-3 saat pertama",
    hookScore: 94,
    overallScore: 92,
    script: "Pembuka dengan masalah relatable (jeragat), demo sebelum-selepas 7 hari, testimoni segera, CTA link bio. Teknik 'pain → solution → proof' digunakan secara konsisten.",
    why: [
      "Hook visual kuat — jeragat jelas nampak dalam frame pertama",
      "Tempo cepat 4-6 saat per cut mengelakkan viewers drop",
      "Kreator guna bahasa harian 'tau tak korang' bukan bahasa formal",
      "Timing CTA tepat di saat ke-58 selepas proof ditunjukkan",
      "Sound trend terkini digunakan untuk boost distribusi organik"
    ],
    improve: [
      "Tambah subtitle BM untuk views mobile tanpa bunyi",
      "Cuba POV angle untuk lebih authentic",
      "A/B test hook berbeza: sebelum vs masalah jeragat dulu",
      "Panjangkan demo ke 14 hari untuk kredibiliti lebih tinggi",
      "Sertakan angka unit terjual untuk social proof"
    ],
    checklist: {
      strongHook: { pass: true, note: "Hook muncul dalam 0-3 saat pertama dengan elemen visual yang kuat" },
      fastPacing: { pass: true, note: "4-6 saat per cut — tempo optimum untuk retention" },
      emotionalAppeal: { pass: true, note: "Storytelling emosional yang kuat — audiens rasa connect" },
      productShown: { pass: true, note: "Produk muncul dalam 5 saat pertama dengan close-up jelas" },
      clearCTA: { pass: true, note: "CTA jelas di saat 55-60 — 'klik link dalam bio'" },
      trendingMusic: { pass: true, note: "Guna sound trending — boost distribusi organik" },
      purchaseIntent: { pass: true, note: "Komen menunjukkan high purchase intent — 'dh beli', 'link pls'" },
      goodLighting: { pass: true, note: "Pencahayaan natural yang baik — hasil produk nampak jelas" },
    },
    transcriptFull: transcriptTemplates.beauty,
    audioAnalysis: "Audio jelas dengan voiceover energetic. Music background pop trending. Nadia guna intonasi ekspresif — nada suara naik bila tunjuk hasil. Sound effect 'whoosh' untuk transition.",
    visualAnalysis: "Editing fast-paced dengan jump cuts. Color grading warm tone. Teks overlay 'Hari 1', 'Hari 7' untuk emphasize progress. Close-up ekstrim pada tekstur kulit. Lighting natural dari tingkap.",
    commentSentiment: "89% positif — high purchase intent. Top komen: 'done order sis', 'link please urgent', 'dh sampai guna 3 hari nmpk perubahan'. Beberapa komen minta restock notification.",
    estimatedSales: "12K - 15K unit",
    estimatedRevenue: "RM480K - RM620K",
    competitionGap: "Video ini mengatasi 94% video kompetitor dalam kategori kecantikan berdasarkan engagement rate.",
    coachAdvice: "Video ini mempunyai struktur yang hampir sempurna. Fokus pada mengekalkan konsistensi ini untuk video akan datang. Cuba variasikan hook style untuk mengelakkan audience fatigue. Untuk video seterusnya, cuba format 'day in my life' untuk lebih personal connection."
  },
  {
    product: "Krim Mata Collagen Plus — SkinQueenMY",
    duration: "01:52",
    views: "1.8M",
    likes: "142K",
    saves: "38K",
    comments: "9.4K",
    shares: "5.1K",
    conv: "3.9%",
    hook: "Before/after mata bengkak dalam 3 saat",
    hookScore: 88,
    overallScore: 87,
    script: "Pembuka dengan masalah mata bengkak selepas tidur, demo pagi ke malam, testimonial dengan emosi, close dengan offer limited.",
    why: [
      "Before/after side-by-side sangat meyakinkan dalam 3 saat pertama",
      "Target audiens spesifik: ibu bekerja 30an — relatable problem",
      "Cahayaan natural yang baik menampakkan hasil produk",
      "Kreator emotional storytelling meningkatkan connection",
      "Timestamp 'hari ke-3' memberi harapan realistic kepada viewer"
    ],
    improve: [
      "Kurangkan time tunggu antara masalah dan penyelesaian",
      "Guna derma/pakar sebagai guest untuk authority",
      "Test hook baru: 'Doktor rekomen pun produk ni'",
      "Tambah countdown timer untuk urgency di akhir video",
      "Highlight ingredient utama collagen secara visual"
    ],
    checklist: {
      strongHook: { pass: true, note: "Before/after side-by-side sangat meyakinkan dalam 3 saat pertama" },
      fastPacing: { pass: false, note: "Beberapa segmen terlalu panjang, boleh dipotong" },
      emotionalAppeal: { pass: true, note: "Storytelling emosional yang kuat — audiens rasa connect" },
      productShown: { pass: true, note: "Produk muncul dalam 5 saat pertama dengan close-up jelas" },
      clearCTA: { pass: true, note: "CTA jelas di saat 55-60" },
      trendingMusic: { pass: false, note: "Music choice okay tapi tak trending" },
      purchaseIntent: { pass: true, note: "Komen menunjukkan high purchase intent" },
      goodLighting: { pass: true, note: "Pencahayaan natural yang baik" },
    },
    transcriptFull: transcriptTemplates.beauty,
    audioAnalysis: "Voiceover jelas dengan tempo perlahan — sesuai untuk audiens yang lebih mature. Background music lembut, tidak mengganggu. Suara kreator calming dan trustworthy.",
    visualAnalysis: "Shot konsisten dengan aesthetic yang sama. Before/after dalam frame yang sama — sangat meyakinkan. Text overlay minimal tapi efektif. Warna tone konsisten warm.",
    commentSentiment: "82% positif. Ramai tanya 'ada untuk under eye bag?'. Beberapa komen minta video lebih panjang. High engagement di bahagian sebelum/selepas.",
    estimatedSales: "8.5K - 11K unit",
    estimatedRevenue: "RM340K - RM440K",
    competitionGap: "Video ini mengatasi 82% video kompetitor dalam kategori skincare mata.",
    coachAdvice: "Peningkatan terbesar boleh dibuat pada 3 saat pertama. Pastikan ada elemen visual yang mengejutkan atau soalan yang membuat viewer nak terus tengok. Kurangkan masa transition antara segmen."
  },
  {
    product: "Sabun Sulphur Original — BeautySKin88",
    duration: "01:07",
    views: "1.1M",
    likes: "89K",
    saves: "31K",
    comments: "5.8K",
    shares: "3.4K",
    conv: "4.1%",
    hook: "Close-up jerawat hilang sepenuhnya dalam 3 hari",
    hookScore: 82,
    overallScore: 84,
    script: "Hook jerawat close-up, demo penggunaan step-by-step, before/after hari 1 dan hari 5, komuniti testimonial di akhir video.",
    why: [
      "Harga yang sangat berpatutan buat viewers lebih mudah membeli",
      "Produk traditional yang ada trust factor dalam masyarakat Melayu",
      "Demo penggunaan mudah dan realistik untuk semua orang",
      "Hashtag komuniti #sabunsuphur membantu organic reach",
      "Duration pendek (67 saat) sesuai dengan viewer attention span"
    ],
    improve: [
      "Tambah ingredient list dalam video untuk credibility",
      "Collaborate dengan skincare expert untuk endorsement",
      "Buat siri video 30-hari untuk engagement jangka panjang",
      "Highlight asal usul produk Malaysia untuk patriotik angle",
      "Cipta hashtag challenge khusus untuk user generated content"
    ],
    checklist: {
      strongHook: { pass: true, note: "Close-up jerawat real — sangat relatable" },
      fastPacing: { pass: true, note: "67 saat — perfect length untuk attention span" },
      emotionalAppeal: { pass: true, note: "Cerita peritnya jerawat — ramai relate" },
      productShown: { pass: true, note: "Produk ditunjukkan dalam 2 saat pertama" },
      clearCTA: { pass: false, note: "CTA boleh lebih direct" },
      trendingMusic: { pass: false, note: "Guna sound biasa, tak trending" },
      purchaseIntent: { pass: true, note: "Banyak komen 'dh order', 'smpat ke sabun ni'" },
      goodLighting: { pass: true, note: "Pencahayaan mencukupi untuk tunjuk hasil" },
    },
    transcriptFull: transcriptTemplates.beauty,
    audioAnalysis: "Voiceover natural macam sembang biasa — sangat authentic. Guna bahasa pasar yang mudah difahami. Background music minimal.",
    visualAnalysis: "Video pendek dan padat. Close-shot ekstrim pada jerawat — braver daripada kompetitor. Editing ringkas tapi efektif. Warna natural, tak over-edit.",
    commentSentiment: "85% positif. Ramai share pengalaman sendiri guna sabun sulphur. High trust factor sebab produk traditional. Beberapa komen minta restock info.",
    estimatedSales: "6K - 9K unit",
    estimatedRevenue: "RM120K - RM180K",
    competitionGap: "Video ini mengatasi 78% video kompetitor dalam kategori skincare budget.",
    coachAdvice: "Durasi pendek adalah kekuatan utama. Untuk video seterusnya, cuba buat siri 30-hari challenge untuk build narrative dan boost retention. Tambah CTA yang lebih urgent."
  }
]
