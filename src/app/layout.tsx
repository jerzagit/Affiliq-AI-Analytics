import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import TopBar from "@/components/topbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "AffiliQ — TikTok Shop Intelligence",
  description: "TikTok Shop Affiliate Intelligence Dashboard — platform demo untuk produk viral Malaysia",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.31.0/dist/tabler-icons.min.css" />
      </head>
      <body className="app-shell" style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
        <Sidebar />
        <div className="main-area">
          <TopBar />
          <div className="content">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
