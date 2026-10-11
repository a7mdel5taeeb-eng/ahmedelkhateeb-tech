"use client"

import { useLanguage } from "./language-provider"

export function Workbench() {
  const { t } = useLanguage()
  const experience = [
    { date: t("2023–Present", "2023–الآن"), role: t("ICT Teacher & Technical Support", "معلم تقنية المعلومات والدعم الفني"), company: t("Dunia Al-Ajial International Schools", "مدارس دنيا الأجيال العالمية") },
    { date: "2016–2023", role: t("Sales & Technical Support", "المبيعات والدعم الفني"), company: "ECS Distribution" },
    { date: "2014–2016", role: t("Technical Support & Marketing", "الدعم الفني والتسويق"), company: t("Egos Co.", "شركة إيجوس") },
    { date: "2007–2014", role: t("Technical Support & Design", "الدعم الفني والتصميم"), company: t("Amici Group / Pronto Co.", "مجموعة أميتشي / شركة برونتو") },
  ]
  return (
    <section id="workbench" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">{t("Experience / the working log", "الخبرات / سجل العمل")}</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{t("Workbench", "منضدة العمل")}</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">{t("The experience behind the experiments. Teaching, technical support, design, and technology sales — connected by practical problem-solving.", "الخبرة وراء التجارب. التعليم والدعم الفني والتصميم ومبيعات التقنية — يجمعها حل المشكلات بأسلوب عملي.")}</p>
        </div>
        <div className="rounded-xl border border-border bg-card/40 glass backdrop-blur-sm overflow-hidden hover-lift animate-scale-in stagger-2">
          {/* Terminal header */}
          <div dir="ltr" className="flex items-center gap-3 border-b border-border/50 bg-secondary/40 px-4 sm:px-5 py-3.5 sm:py-4">
            <div className="flex items-center gap-2" aria-hidden="true"><div className="size-3 rounded-full bg-destructive/60"/><div className="size-3 rounded-full bg-yellow-500/60"/><div className="size-3 rounded-full bg-primary/60"/></div>
            <span className="ml-4 font-mono text-xs text-muted-foreground truncate">~/ahmed/career.log</span>
            <div className="ml-auto hidden sm:flex items-center gap-2 text-muted-foreground"><span className="size-1.5 rounded-full bg-primary animate-pulse"/><span className="font-mono text-xs">{t("experience", "الخبرات")}</span></div>
          </div>
          <div className="divide-y divide-border/30">
            {experience.map((item, index) => <article key={item.date} className="group flex flex-col gap-4 p-5 sm:p-6 transition-all duration-300 sm:flex-row sm:items-center sm:justify-between hover:bg-secondary/30 animate-fade-in" style={{ animationDelay: `${index * 100 + 400}ms` }}>
              <div className="flex-1 space-y-2 min-w-0"><div className="flex items-center gap-3"><span className="text-primary font-mono text-sm shrink-0" aria-hidden="true">$</span><h3 className="font-mono text-sm font-medium tracking-tight transition-colors group-hover:text-primary">{item.role}</h3></div><p className="ps-6 text-sm text-muted-foreground">{item.company}</p></div>
              <span dir="ltr" className="ps-6 sm:ps-0 font-mono text-xs text-muted-foreground shrink-0">{item.date}</span>
            </article>)}
          </div>
          <div className="border-t border-border/50 bg-secondary/30 px-4 sm:px-5 py-4"><div className="flex items-center gap-2 font-mono text-xs text-muted-foreground"><span className="text-primary" aria-hidden="true">❯</span><span>{t("Learning, building, and solving since 2007", "تعلم وبناء وحل للمشكلات منذ 2007")}</span><a href="https://github.com/a7mdel5taeeb-eng" target="_blank" rel="noopener noreferrer" className="ms-auto text-primary underline-animate">GitHub ↗</a></div></div>
        </div>
      </div>
    </section>
  )
}
