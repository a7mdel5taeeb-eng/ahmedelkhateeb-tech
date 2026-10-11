"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Github, Sparkles } from "lucide-react"

import { useLanguage } from "./language-provider"

const focusAreas = [
  { id: 0, title: ["Software & Web Solutions", "حلول البرمجيات والويب"], description: ["Software development and thoughtful web design — turning practical needs into clear, usable digital experiences.", "تطوير البرمجيات وتصميم الويب بعناية — تحويل الاحتياجات العملية إلى تجارب رقمية واضحة وسهلة الاستخدام."], tags: [["Software Development", "تطوير البرمجيات"], ["Web Design", "تصميم الويب"]], category: "software", highlight: true },
  { id: 1, title: ["AI Education Lab", "مختبر تعليم الذكاء الاصطناعي"], description: ["Exploring accessible ways to teach AI concepts, build understanding, and encourage responsible experimentation.", "استكشاف أساليب مبسطة لتعليم مفاهيم الذكاء الاصطناعي وبناء الفهم وتشجيع التجارب المسؤولة."], tags: [["AI Education", "تعليم الذكاء الاصطناعي"], ["Exploration", "استكشاف"]], category: "education", highlight: false },
  { id: 2, title: ["Digital Learning Experiences", "تجارب التعلم الرقمي"], description: ["Computer and programming teaching that connects technical concepts with hands-on learning.", "تعليم الحاسب والبرمجة بأسلوب يربط المفاهيم التقنية بالتعلم العملي."], tags: [["ICT Teaching", "تعليم تقنية المعلومات"], ["Programming", "البرمجة"]], category: "education", highlight: false },
  { id: 3, title: ["IT Systems & Networking", "أنظمة تقنية المعلومات والشبكات"], description: ["Technical support, computer maintenance, networking solutions, and technology sales and consultation.", "الدعم الفني وصيانة الحاسب وحلول الشبكات ومبيعات التقنية والاستشارات."], tags: [["IT Support", "الدعم الفني"], ["Networking", "الشبكات"], ["Consultation", "الاستشارات"]], category: "systems", highlight: true },
]

const filters = [["all", "all", "الكل"], ["software", "software", "البرمجيات"], ["education", "education", "التعليم"], ["systems", "systems", "الأنظمة"]]

export function ProjectsGrid() {
  const { t } = useLanguage()
  const projects = focusAreas.map(p => ({ ...p, title: t(p.title[0], p.title[1]), description: t(p.description[0], p.description[1]), tags: p.tags.map(tag => t(tag[0], tag[1])), status: t("selected focus", "مجال تركيز"), year: `0${p.id + 1}`, featured: false }))
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 flex flex-col gap-6 sm:gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">{t("Expertise / areas of focus", "الخبرات / مجالات التركيز")}</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{t("Selected Focus", "مجالات التركيز")}</h2>
            <p className="max-w-xl text-sm text-muted-foreground">{t("Areas I work in and explore — not completed client projects. Specific project case studies will be added when available.", "مجالات أعمل بها وأستكشفها، وليست مشاريع عملاء مكتملة. ستُضاف دراسات المشاريع عند توفرها.")}</p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:flex-wrap scrollbar-hide animate-fade-in-up stagger-2">
            {filters.map(([filter, en, ar]) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={cn(
                  "shrink-0 rounded-lg border px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98]",
                  activeFilter === filter
                    ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                    : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground hover:bg-secondary/50",
                )}
              >
                {t(en, ar)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={cn(
                "group card-motion relative overflow-hidden rounded-xl border bg-card/40 p-6 sm:p-7 glass transition-all duration-400 active:scale-[0.99] hover-lift hover:border-primary/40 hover:bg-card/70 animate-fade-in-up",
                "highlight" in project && project.highlight
                  ? "sm:col-span-2 lg:col-span-2 border-primary/30 bg-gradient-to-br from-primary/8 via-card/50 to-primary/8"
                  : "border-border/60",
                project.featured && !("highlight" in project && project.highlight) && "sm:col-span-2 lg:col-span-1",
              )}
              style={{ animationDelay: `${(index % 6) * 100 + 200}ms` }}
            >
              {"highlight" in project && project.highlight && (
                <div className="absolute start-5 top-5 flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 animate-pulse-glow">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-medium">
                    {t("Focus", "تركيز")}
                  </span>
                </div>
              )}

              {/* Status indicator */}
              <div
                className={cn(
                  "absolute end-5 top-5 flex items-center gap-2.5",
                  "highlight" in project && project.highlight && "top-5",
                )}
              >
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-shadow duration-300",
                    "bg-primary",
                  )}
                />
                <span className="font-mono text-xs text-muted-foreground">{project.status}</span>
              </div>

              <div
                className={cn(
                  "mb-5 font-mono text-xs text-muted-foreground",
                  "highlight" in project && project.highlight && "mt-10",
                )}
              >
                {project.year}
              </div>

              <h3
                className={cn(
                  "mb-3 font-bold tracking-tight transition-all duration-300 group-hover:text-gradient",
                  "highlight" in project && project.highlight ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
                )}
              >
                {project.title}
              </h3>

              <p
                className={cn(
                  "mb-5 text-sm leading-relaxed text-muted-foreground",
                  "highlight" in project && project.highlight ? "line-clamp-3" : "line-clamp-2",
                )}
              >
                {project.description}
              </p>


              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/a7mdel5taeeb-eng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-all duration-300 group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-4 w-4 transition-transform group-hover/link:scale-110" />
                  <span className="underline-animate">{t("GitHub profile", "حساب GitHub")}</span>
                </a>
                <a href="#connect" className="font-mono text-xs text-primary underline-animate">{t("discuss an idea", "ناقش فكرة")}</a>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
