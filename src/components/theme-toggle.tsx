"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    if (stored === "dark") {
      setDark(true)
      document.documentElement.setAttribute("data-theme", "dark")
    } else if (stored === "light") {
      setDark(false)
      document.documentElement.setAttribute("data-theme", "light")
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setDark(prefersDark)
      document.documentElement.removeAttribute("data-theme")
    }
  }, [])

  function toggle() {
    const next = !dark
    setDark(next)
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.setAttribute("data-theme", "light")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <button className="theme-toggle" onClick={toggle} title={dark ? "Switch to light" : "Switch to dark"}>
      {dark ? <i className="ti ti-sun"></i> : <i className="ti ti-moon"></i>}
    </button>
  )
}
