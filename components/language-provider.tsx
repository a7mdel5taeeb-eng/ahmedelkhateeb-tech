"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

const LanguageContext = createContext({ language: "en", ready: false, setLanguage: (_language: string) => {}, t: (en: string, _ar: string) => en })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState("en")
  const [ready, setReady] = useState(false)
  useEffect(() => {
    try { updateLanguage(localStorage.getItem("ae-language") === "ar" ? "ar" : "en") } catch {}
    setReady(true)
  }, [])
  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])
  function setLanguage(value: string) {
    updateLanguage(value)
    try { localStorage.setItem("ae-language", value) } catch {}
  }
  return <LanguageContext.Provider value={{ language, ready, setLanguage, t: (en, ar) => language === "ar" ? ar : en }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()
  return <div className="flex items-center gap-1 font-mono text-xs" aria-label="Language / اللغة">
    <button type="button" lang="en" aria-pressed={language === "en"} onClick={() => setLanguage("en")} className="rounded px-2 py-2 text-muted-foreground aria-pressed:bg-primary/10 aria-pressed:text-primary">EN</button>
    <span aria-hidden="true" className="text-border">/</span>
    <button type="button" lang="ar" aria-pressed={language === "ar"} onClick={() => setLanguage("ar")} className="rounded px-2 py-2 text-muted-foreground aria-pressed:bg-primary/10 aria-pressed:text-primary">العربية</button>
  </div>
}
