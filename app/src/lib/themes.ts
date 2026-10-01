export const PRODUCTS = [
  { id: "kturn", name: "Kturn.ai", color: "Maroon", swatch: "#9e1b20" },
  { id: "katon", name: "Katon", color: "Orange", swatch: "#c2511f" },
  { id: "kiors", name: "Kiors", color: "Crimson", swatch: "#a9203e" },
  { id: "wingman", name: "Wingman", color: "Violet", swatch: "#6a2e9e" },
  { id: "guardian", name: "Guardian", color: "Blue", swatch: "#1d4ed8" },
] as const

export type ProductId = (typeof PRODUCTS)[number]["id"]
export type Mode = "light" | "dark"
