"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

import { useLanguage } from "./language-provider"

export function LabNotes() {
  const { t } = useLanguage()
  const notes = [
    { id: 1, title: t("Bachelor of Social Work", "بكالوريوس الخدمة الاجتماعية"), excerpt: t("Education grounded in understanding people.", "تعليم يرتكز على فهم الإنسان."), detail: t("Bachelor of Social Work — graduated in 2010.", "بكالوريوس الخدمة الاجتماعية — تخرج عام 2010."), date: "2010", category: t("education", "التعليم"), color: "from-primary/10 to-transparent" },
    { id: 2, title: "CCNA · IT Essentials · ICDL", excerpt: t("Technical credentials across networking and computer essentials.", "مؤهلات تقنية في الشبكات وأساسيات الحاسب."), detail: t("CCNA: networking. IT Essentials: computer hardware and software. ICDL: digital literacy.", "CCNA: الشبكات. IT Essentials: أجهزة الحاسب وبرمجياته. ICDL: المهارات الرقمية."), date: "", category: t("credentials", "الشهادات"), color: "from-primary/10 to-transparent" },
    { id: 3, title: t("Arabic & English", "العربية والإنجليزية"), excerpt: t("Connecting through teaching and clear communication.", "تواصل فعال من خلال التعليم والشرح الواضح."), detail: t("Arabic: Native. English: Excellent.", "العربية: اللغة الأم. الإنجليزية: ممتاز."), date: "", category: t("languages", "اللغات"), color: "from-primary/10 to-transparent" },
    { id: 4, title: t("Technology, made practical", "تقنية قابلة للتطبيق"), excerpt: t("From software and web design to education and IT support.", "من البرمجيات وتصميم الويب إلى التعليم والدعم التقني."), detail: t("Professional focus: software development, web design and development, AI education, computer and programming teaching, technical support, computer maintenance, networking solutions, and technology sales and consultation.", "مجالات العمل: تطوير البرمجيات وتصميم وتطوير الويب وتعليم الذكاء الاصطناعي وتدريس الحاسب والبرمجة والدعم الفني وصيانة الحاسب وحلول الشبكات ومبيعات التقنية والاستشارات."), date: "", category: t("approach", "المنهج"), color: "from-primary/10 to-transparent" },
  ]
  const [expandedNote, setExpandedNote] = useState<number | null>(null)

  return (
    <section id="notes" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">{t("Field Notes / background", "ملاحظات / الخلفية العلمية")}</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{t("Lab Notes", "ملاحظات المختبر")}</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t("The foundations behind the work: education, credentials, languages, and a practical approach to technology.", "الأسس التي يرتكز عليها العمل: التعليم والشهادات واللغات ونهج عملي في التعامل مع التقنية.")}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {notes.map((note, index) => (
            <article
              key={note.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 sm:p-7 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 active:scale-[0.99] hover-lift animate-fade-in-up",
                expandedNote === note.id && "border-primary/50 bg-card/70",
              )}
              style={{ animationDelay: `${index * 100 + 200}ms` }}

            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  note.color,
                )}
              />

              <div className="relative z-10">
                <div className="mb-4 sm:mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-lg border border-border/80 bg-secondary/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-foreground">
                    {note.category}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{note.date}</span>
                </div>

                <h3 className="mb-3 text-lg sm:text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                  {note.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">{note.excerpt}</p>

                <button type="button" aria-expanded={expandedNote === note.id} aria-controls={`note-${note.id}`} onClick={() => setExpandedNote(expandedNote === note.id ? null : note.id)} className="mt-5 flex items-center gap-2 font-mono text-xs text-primary transition-all duration-300">
                  <span>{expandedNote === note.id ? t("show less", "عرض أقل") : t("read more", "اقرأ المزيد")}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" />
                </button>
                <p id={`note-${note.id}`} hidden={expandedNote !== note.id} className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">{note.detail}</p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
