"use client"

import { useState } from "react"
import { predefinedAnalyses, generateMockAnalysis, type Analysis } from "@/data/analysis"

const scrapeSteps = [
  "Accessing TikTok URL and loading video page...",
  "Extracting video metadata (views, likes, comments)...",
  "Running ASR for audio transcript...",
  "Analyzing first 3 seconds (hook detection)...",
  "Detecting visual patterns and editing style...",
  "Reading comment sentiment (NLP)...",
  "Comparing with viral videos in same niche...",
  "Generating AI Coaching Report...",
]

export default function AIAnalysisPage() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [url, setUrl] = useState("")
  const [customAnalysis, setCustomAnalysis] = useState<Analysis | null>(null)
  const [loading, setLoading] = useState(false)
  const [scrapingProgress, setScrapingProgress] = useState(-1)
  const [scrapeResult, setScrapeResult] = useState<string | null>(null)
  const [showAllTranscript, setShowAllTranscript] = useState(false)

  const d = customAnalysis || predefinedAnalyses[selectedIdx]

  async function handleAnalyze() {
    const trimmed = url.trim()
    if (!trimmed) return
    if (!trimmed.includes("tiktok.com")) {
      alert("Please enter a valid TikTok URL")
      return
    }
    setLoading(true)
    setCustomAnalysis(null)
    setScrapeResult(null)
    setScrapingProgress(0)
    setShowAllTranscript(false)

    for (let i = 0; i < scrapeSteps.length; i++) {
      setScrapingProgress(i)
      await new Promise(r => setTimeout(r, 400 + Math.random() * 500))
    }

    await new Promise(r => setTimeout(r, 400))
    setScrapeResult("✓ Scrape complete: video, audio, transcript, metadata, comments, and competitor data successfully extracted")
    setCustomAnalysis(generateMockAnalysis(trimmed))
    setLoading(false)
    setScrapingProgress(-1)
  }

  return (
    <>
      <div className="section-header">
        <span className="section-title">
          <i className="ti ti-robot" style={{ color: "var(--text-pro)" }}></i> AI Video Coach
          <span className="badge badge-pro" style={{ marginLeft: 6 }}>Copilot</span>
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn btn-ghost btn-sm" onClick={() => window.location.href = "/saved"}>
            <i className="ti ti-bookmark"></i> Saved
          </button>
        </div>
      </div>

      <div className="card gradient-border" style={{ marginBottom: 20, background: "var(--bg-pro)" }}>
        <div className="card-title" style={{ color: "var(--text-pro)" }}>
          <i className="ti ti-brand-tiktok"></i> Analyze Any TikTok Video
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          <input
            type="url"
            placeholder="Paste TikTok URL... https://www.tiktok.com/@user/video/123456"
            value={url}
            onChange={e => setUrl(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleAnalyze()}
            style={{
              flex: 1,
              minWidth: 280,
              fontSize: 13,
              padding: "8px 12px",
              borderRadius: "var(--radius)",
              border: "0.5px solid var(--border)",
              background: "var(--surface-1)",
              color: "var(--text-primary)",
              outline: "none",
            }}
          />
          <button className="btn btn-primary" onClick={handleAnalyze} disabled={loading}>
            {loading ? <><i className="ti ti-loader"></i> Analysing...</> : <><i className="ti ti-sparkles"></i> Analyze</>}
          </button>
        </div>
        <div style={{ marginTop: 8, fontSize: 11, color: "var(--text-muted)" }}>
          <i className="ti ti-info-circle"></i> Enter any TikTok URL to get a complete AI coaching report
        </div>
      </div>

      {loading && (
        <div className="card" style={{ marginBottom: 16 }}>
          <div className="card-title"><i className="ti ti-radar" style={{ color: "var(--text-accent)" }}></i> Scraping & Analysis Progress</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {scrapeSteps.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, opacity: scrapingProgress >= i ? 1 : 0.3, transition: "opacity 0.3s" }}>
                <span style={{
                  width: 20, height: 20, borderRadius: "50%",
                  background: scrapingProgress > i ? "var(--fill-success)" : scrapingProgress === i ? "var(--fill-accent)" : "var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontSize: 10, flexShrink: 0,
                }}>
                  {scrapingProgress > i ? "✓" : scrapingProgress === i ? <i className="ti ti-loader" style={{ fontSize: 10 }}></i> : i + 1}
                </span>
                <span style={{ fontSize: 13, color: scrapingProgress >= i ? "var(--text-primary)" : "var(--text-muted)" }}>{step}</span>
              </div>
            ))}
          </div>
          {scrapeResult && (
            <div style={{ marginTop: 12, padding: "8px 12px", background: "var(--bg-success)", borderRadius: "var(--radius)", fontSize: 12, color: "var(--text-success)" }}>
              {scrapeResult}
            </div>
          )}
        </div>
      )}

      {!loading && (
        <div style={{ marginBottom: 16, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          {customAnalysis ? (
            <button className="btn btn-ghost btn-sm" onClick={() => { setCustomAnalysis(null); setUrl("") }}>
              <i className="ti ti-arrow-left"></i> Back to samples
            </button>
          ) : (
            <select value={selectedIdx} onChange={e => setSelectedIdx(Number(e.target.value))}>
              {predefinedAnalyses.map((a, i) => <option key={i} value={i}>{a.product}</option>)}
            </select>
          )}
          <button className="btn btn-primary btn-sm"><i className="ti ti-refresh"></i> Refresh</button>
          <button className="btn btn-secondary btn-sm"><i className="ti ti-download"></i> Export</button>
          <button className="btn btn-secondary btn-sm"><i className="ti ti-bookmark"></i> Save</button>
        </div>
      )}

      {!loading && (
        <>
          {/* Overall Score Ring */}
          <div className="card bg-mesh" style={{ marginBottom: 18, textAlign: "center", padding: 24 }}>
            <div className="card-title" style={{ textAlign: "left" }}>Overall Viral Score</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
              <div style={{ position: "relative", width: 120, height: 120 }}>
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <circle cx="60" cy="60" r="48" stroke="var(--border)" strokeWidth="8" fill="none" />
                  <circle cx="60" cy="60" r="48" stroke="url(#scoreGrad)" strokeWidth="8" fill="none"
                    strokeDasharray={2 * 3.14159 * 48}
                    strokeDashoffset={2 * 3.14159 * 48 * (1 - d.overallScore / 100)}
                    strokeLinecap="round" />
                  <defs>
                    <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                  <span style={{ fontSize: 28, fontWeight: 700, color: "var(--text-primary)" }}>{d.overallScore}</span>
                  <span style={{ fontSize: 10, color: "var(--text-muted)" }}>/100</span>
                </div>
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>{d.product}</div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: 12, color: "var(--text-muted)" }}>
                  <span><i className="ti ti-clock"></i> {d.duration}</span>
                  <span><i className="ti ti-eye"></i> {d.views} views</span>
                  <span><i className="ti ti-heart"></i> {d.likes} likes</span>
                  <span><i className="ti ti-message"></i> {d.comments} comments</span>
                  <span><i className="ti ti-share"></i> {d.shares} shares</span>
                </div>
              </div>
            </div>
          </div>

          {/* Viral Score Checklist */}
          <div className="card" style={{ marginBottom: 18 }}>
            <div className="card-title"><i className="ti ti-checklist"></i> Viral Score Checklist</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {Object.entries(d.checklist).map(([key, val]) => (
                <div key={key} style={{
                  display: "flex", alignItems: "flex-start", gap: 8,
                  padding: "8px 10px", borderRadius: "var(--radius)",
                  background: val.pass ? "var(--bg-success)" : "var(--bg-danger)",
                }}>
                  <span style={{
                    color: val.pass ? "var(--text-success)" : "var(--text-danger)",
                    fontSize: 14, flexShrink: 0, marginTop: 1,
                  }}>
                    {val.pass ? <i className="ti ti-check"></i> : <i className="ti ti-x"></i>}
                  </span>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 2, textTransform: "capitalize" }}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: 1.4 }}>{val.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Coach Advice */}
          <div className="ai-box" style={{ marginBottom: 18, background: "linear-gradient(135deg, var(--bg-pro), var(--bg-accent))" }}>
            <div className="ai-box-title" style={{ color: "var(--text-pro)", fontSize: 12 }}>
              <i className="ti ti-robot"></i> AI Coach Advice
            </div>
            <div style={{ fontSize: 13.5, lineHeight: 1.7, color: "var(--text-primary)" }}>
              {d.coachAdvice}
            </div>
          </div>

          {/* Metric Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10, marginBottom: 18 }}>
            <div className="metric-card" style={{ padding: 12 }}>
              <div className="metric-label">Views</div>
              <div className="metric-value" style={{ fontSize: 16 }}>{d.views}</div>
            </div>
            <div className="metric-card" style={{ padding: 12 }}>
              <div className="metric-label">Likes</div>
              <div className="metric-value" style={{ fontSize: 16 }}>{d.likes}</div>
            </div>
            <div className="metric-card" style={{ padding: 12 }}>
              <div className="metric-label">Comments</div>
              <div className="metric-value" style={{ fontSize: 16 }}>{d.comments}</div>
            </div>
            <div className="metric-card" style={{ padding: 12 }}>
              <div className="metric-label">Saved</div>
              <div className="metric-value" style={{ fontSize: 16 }}>{d.saves}</div>
            </div>
            <div className="metric-card" style={{ padding: 12 }}>
              <div className="metric-label">Conv.</div>
              <div className="metric-value" style={{ fontSize: 16, color: "var(--text-success)" }}>{d.conv}</div>
            </div>
          </div>

          {/* Transcript */}
          <div className="card" style={{ marginBottom: 14, padding: 0, overflow: "hidden" }}>
            <div className="card-title" style={{ padding: "14px 16px 0" }}>
              <i className="ti ti-file-text"></i> Transcript & Breakdown
              <span className="badge badge-accent" style={{ marginLeft: 6, fontSize: 9 }}>ASR GENERATED</span>
            </div>
            <div style={{ padding: "0 16px 8px" }}>
              <div style={{ marginBottom: 8, padding: "8px 12px", background: "var(--surface-0)", borderRadius: "var(--radius)", fontSize: 11, color: "var(--text-muted)" }}>
                <i className="ti ti-info-circle"></i> Transcript generated automatically via ASR. Accuracy ~87%.
              </div>
              {(showAllTranscript ? d.transcriptFull : d.transcriptFull.slice(0, 4)).map((t, i) => (
                <div key={i} className="video-row" style={{ alignItems: "flex-start" }}>
                  <span className="badge badge-accent" style={{ fontSize: 9, flexShrink: 0, marginTop: 1, whiteSpace: "nowrap" }}>{t.time}</span>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: 12.5, lineHeight: 1.5 }}>{t.text}</span>
                    <div className="score-bar-wrap" style={{ marginTop: 4 }}>
                      <div className="score-bar" style={{ height: 3, maxWidth: 100 }}>
                        <div className={`score-bar-fill ${t.score > 90 ? "score-fill-high" : ""}`} style={{ width: `${t.score}%`, height: "100%" }}></div>
                      </div>
                      <span style={{ fontSize: 10, color: "var(--text-accent)", minWidth: 20, textAlign: "right" }}>{t.score}%</span>
                    </div>
                  </div>
                  <span className="badge badge-pro" style={{ fontSize: 8, flexShrink: 0 }}>{t.label}</span>
                </div>
              ))}
              <button className="btn btn-ghost btn-sm" style={{ marginTop: 4 }} onClick={() => setShowAllTranscript(!showAllTranscript)}>
                {showAllTranscript ? "Show less" : `Show all (${d.transcriptFull.length} segments)`}
              </button>
            </div>
          </div>

          {/* Analysis Grid */}
          <div className="two-col">
            <div className="card">
              <div className="card-title"><i className="ti ti-microphone"></i> Audio Analysis</div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>{d.audioAnalysis}</div>
            </div>
            <div className="card">
              <div className="card-title"><i className="ti ti-eye"></i> Visual Analysis</div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>{d.visualAnalysis}</div>
            </div>
          </div>

          <div className="two-col">
            <div className="card">
              <div className="card-title"><i className="ti ti-message"></i> Comment Sentiment</div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>{d.commentSentiment}</div>
            </div>
            <div className="card">
              <div className="card-title"><i className="ti ti-currency-ringgit"></i> Sales Estimation</div>
              <div className="data-row"><span className="data-label">Est. units sold</span><span className="data-val">{d.estimatedSales}</span></div>
              <div className="data-row"><span className="data-label">Est. revenue</span><span className="data-val" style={{ color: "var(--text-success)" }}>{d.estimatedRevenue}</span></div>
              <div className="data-row"><span className="data-label">Competition gap</span><span className="data-val" style={{ color: "var(--text-accent)" }}>{d.competitionGap}</span></div>
            </div>
          </div>

          <div className="ai-box">
            <div className="ai-box-title"><i className="ti ti-brain"></i> Why This Video Performs</div>
            {d.why.map((w, i) => (
              <div key={i} className="ai-point">
                <span className="ai-bullet">▸</span>
                <span className="ai-box-body">{w}</span>
              </div>
            ))}
          </div>

          <div className="improvement-list">
            <div className="improvement-title"><i className="ti ti-sparkles"></i> Suggested Improvements</div>
            {d.improve.map((imp, i) => (
              <div key={i} className="improvement-item">
                <span className="imp-num">{i + 1}.</span>
                <span>{imp}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}
