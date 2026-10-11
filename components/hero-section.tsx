"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { useLanguage } from "./language-provider"

export function HeroSection() {
  const { t, language } = useLanguage()
  const targetText = t("Into Real Solutions", "إلى حلول حقيقية")
  const [displayText, setDisplayText] = useState(targetText)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    let timer: ReturnType<typeof setInterval> | undefined
    const start = () => {
      clearInterval(timer)
      if (media.matches) { setDisplayText(targetText); return }
      let length = 0
      setDisplayText("")
      timer = setInterval(() => {
        length++
        setDisplayText(targetText.slice(0, length))
        if (length >= targetText.length) clearInterval(timer)
      }, 85)
    }
    start()
    media.addEventListener("change", start)
    return () => { clearInterval(timer); media.removeEventListener("change", start) }
  }, [targetText, language])

  return (
    <section id="about" className="relative px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center lg:min-h-[70vh]">
          {/* Left column - Text */}
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-3 animate-fade-in-up">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
                {t("Ahmed Elkhateeb — Computer & Software Engineer", "أحمد الخطيب — مهندس حاسب وبرمجيات")}
              </p>
              <h1 aria-label={t("Turning Ideas Into Real Solutions", "نحوّل الأفكار إلى حلول حقيقية")} className="text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
                {t("Turning Ideas", "نحوّل الأفكار")}
                <br />
                <span
                  aria-hidden="true" className="text-primary typing-cursor"
                >
                  {displayText}
                </span>
              </h1>
            </div>

            <p className="max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-in-up stagger-2">
              <span className="mb-3 block font-medium text-foreground">{t("Computer & Software Engineer", "مهندس حاسب وبرمجيات")}</span>
              {t("I create practical software, web experiences, AI learning, and IT solutions. Based in Saudi Arabia, I connect technology, teaching, and real-world needs.", "أقدّم برمجيات وتجارب ويب عملية وتعليمًا للذكاء الاصطناعي وحلول تقنية معلومات. من المملكة العربية السعودية، أجمع بين التقنية والتعليم والاحتياجات الواقعية.")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg border border-primary bg-primary/10 px-7 py-4 sm:py-3.5 font-mono text-sm text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
              >
                <span className="relative z-10">{t("explore selected focus", "استكشف مجالات التركيز")}</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                {/* Animated background */}
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </a>
              <Link
                href="#connect"
                className="group inline-flex items-center justify-center gap-3 rounded-lg border border-border px-7 py-4 sm:py-3.5 font-mono text-sm text-muted-foreground transition-all duration-300 hover:border-foreground hover:text-foreground hover:bg-secondary/50 active:scale-[0.98]"
              >
                <span>{t("start a conversation", "لنبدأ حواراً")}</span>
                <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right column - ASCII Art / Visual */}
          <div className="relative animate-scale-in stagger-4">
            <div className="terminal-boot relative rounded-xl border border-border bg-card/60 glass p-5 sm:p-8 hover-lift">
              {/* Terminal header dots */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive/60 transition-colors hover:bg-destructive" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60 transition-colors hover:bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-primary/60 transition-colors hover:bg-primary" />
              </div>
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 bg-background/50 rounded-md px-3 py-1 font-mono text-xs text-muted-foreground">
                terminal://ahmed-elkhateeb
              </div>

              <pre dir="ltr" aria-label={t("Ahmed Elkhateeb portfolio. Selected focus: software, education, IT systems.", "ملف أحمد الخطيب المهني. مجالات التركيز: البرمجيات والتعليم والأنظمة التقنية.")} className="terminal-code mt-6 overflow-hidden font-mono text-[10px] leading-relaxed text-primary/80 sm:text-xs md:text-sm">
                <span className="sm:hidden">{`┌───────────────────────┐
│  ██████╗███████╗      │
│ ██╔════╝██╔════╝      │
│ ██║     █████╗        │
│ ██║     ██╔══╝        │
│ ╚██████╗██║           │
│  ╚═════╝╚═╝           │
│                       │
│  > focus: solutions   │
│  > status: exploring  │
└───────────────────────┘`}</span>
                <span className="hidden sm:block">{`┌─────────────────────────────────────┐
│                                     │
│  ██████╗ ██████╗ ██████╗ ███████╗   │
│ ██╔════╝██╔═══██╗██╔══██╗██╔════╝   │
│ ██║     ██║   ██║██║  ██║█████╗     │
│ ██║     ██║   ██║██║  ██║██╔══╝     │
│ ╚██████╗╚██████╔╝██████╔╝███████╗   │
│  ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝   │
│       AHMED ELKHATEEB / TECH        │
│                                     │
│   > software / education / IT       │
│   > status: exploring               │
│   > location: Saudi Arabia          │
│                                     │
└─────────────────────────────────────┘`}</span>
              </pre>
              <span className="terminal-scanline" aria-hidden="true" />
              <span className="terminal-online" aria-hidden="true">SYSTEM: ONLINE</span>
            </div>

            <div className="absolute -right-2 sm:-right-6 -top-2 sm:-top-6 rounded-lg border border-primary/40 bg-primary/15 glass px-3 sm:px-4 py-1.5 font-mono text-[11px] sm:text-xs text-primary animate-float">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                {t("selected focus", "مجالات التركيز")}
              </span>
            </div>
            <div
              className="absolute -bottom-3 sm:-bottom-6 -left-2 sm:-left-6 rounded-lg border border-border bg-card glass px-3 sm:px-4 py-1.5 font-mono text-[11px] sm:text-xs text-muted-foreground animate-float"
              style={{ animationDelay: "1s" }}
            >
              {t("Saudi Arabia", "المملكة العربية السعودية")}
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-primary/5 blur-3xl" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-fade-in stagger-6">
        <span className="font-mono text-xs text-muted-foreground">{t("scroll", "اكتشف المزيد")}</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
