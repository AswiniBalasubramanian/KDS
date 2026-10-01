"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PRODUCTS, type Mode, type ProductId } from "@/lib/themes"
import { cn } from "@/lib/utils"

function apply(theme: ProductId, mode: Mode) {
  const el = document.documentElement
  el.dataset.theme = theme
  el.dataset.mode = mode
  el.style.colorScheme = mode
}

export function ThemeSwitcher() {
  const [theme, setTheme] = React.useState<ProductId>("kturn")
  const [mode, setMode] = React.useState<Mode>("light")

  React.useEffect(() => {
    try {
      const t = (localStorage.getItem("kds-theme") as ProductId) || "kturn"
      const m = (localStorage.getItem("kds-mode") as Mode) ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      setTheme(t); setMode(m); apply(t, m)
    } catch { apply("kturn", "light") }
  }, [])

  const pick = (t: ProductId, m: Mode) => {
    setTheme(t); setMode(m); apply(t, m)
    try { localStorage.setItem("kds-theme", t); localStorage.setItem("kds-mode", m) } catch {}
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div role="radiogroup" aria-label="Product theme" className="flex flex-wrap gap-1.5">
        {PRODUCTS.map((p) => (
          <button
            key={p.id}
            role="radio"
            aria-checked={theme === p.id}
            onClick={() => pick(p.id, mode)}
            className={cn(
              "inline-flex h-8 items-center gap-2 rounded-md border px-3 text-sm font-medium transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
              theme === p.id ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent/50"
            )}
          >
            <span className="size-3 rounded-full" style={{ background: p.swatch }} />
            {p.name}
          </button>
        ))}
      </div>
      <Button variant="outline" size="icon" aria-label="Toggle light and dark mode" onClick={() => pick(theme, mode === "dark" ? "light" : "dark")}>
        {mode === "dark" ? <Sun /> : <Moon />}
      </Button>
    </div>
  )
}
