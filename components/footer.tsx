"use client"

import { Github, MessageCircle, Phone, Mail, ExternalLink } from "lucide-react"
import { useLanguage } from "./language-provider"

export function Footer() {
  const { t } = useLanguage()
  const socialLinks = [
    { label: "GitHub", href: "https://github.com/a7mdel5taeeb-eng", handle: "@a7mdel5taeeb-eng", icon: Github },
    { label: t("WhatsApp", "واتساب"), href: "https://wa.me/966564227074", handle: "+966 56 422 7074", icon: MessageCircle },
    { label: t("Phone", "الهاتف"), href: "tel:+966564227074", handle: "+966 56 422 7074", icon: Phone },
    { label: t("Email", "البريد"), href: "mailto:a7mdel5taeeb@gmail.com", handle: "a7mdel5taeeb@gmail.com", icon: Mail },
  ]
  return (
    <footer id="connect" className="border-t border-border/30 px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">{t("Connect", "تواصل معي")}</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                {t("Let's build something ", "لنبنِ شيئاً ")}
                <span className="text-primary">{t("together", "معاً")}</span>
              </h2>
            </div>
            <p className="max-w-md text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t("Have an idea, a technical challenge, or a learning opportunity? Let's talk about software, education, and solutions that work. Based in Saudi Arabia.", "لديك فكرة أو تحدٍ تقني أو فرصة تعليمية؟ لنتحدث عن البرمجيات والتعليم والحلول العملية. مقيم في المملكة العربية السعودية.")}
            </p>

            <div className="pt-2">
              <a
                href="mailto:a7mdel5taeeb@gmail.com"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-primary bg-primary/10 px-8 py-4 sm:py-4 font-mono text-sm text-primary transition-all duration-500 hover:text-primary-foreground active:scale-[0.98] w-full sm:w-auto"
              >
                <span className="relative z-10">{t("send a signal", "أرسل رسالة")}</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </a>
            </div>
          </div>

          {/* Right column - Links */}
          <div className="space-y-6 lg:text-end animate-fade-in-up stagger-2">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-muted-foreground">
              {t("Find me elsewhere", "قنوات التواصل")}
            </p>
            <div className="space-y-2">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("https:") ? "_blank" : undefined}
                  rel={link.href.startsWith("https:") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-transparent p-4 transition-all duration-300 lg:flex-row-reverse active:bg-secondary/30 hover:border-border/50 hover:bg-card/50 glass animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="flex items-center gap-3 lg:flex-row-reverse">
                    <link.icon className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                    <span className="font-mono text-sm font-medium transition-colors group-hover:text-gradient">
                      {link.label}
                    </span>
                    {link.href.startsWith("https:") && (
                      <ExternalLink className="h-3 w-3 text-muted-foreground/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                    )}
                  </div>
                  <span dir="ltr" className="font-mono text-xs text-muted-foreground break-all">{link.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-between gap-6 border-t border-border/30 pt-8 sm:pt-10 sm:flex-row animate-fade-in stagger-4">
          <div className="flex items-center gap-4">
            {socialLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground/50 transition-all duration-300 hover:text-primary hover:scale-110"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="font-mono text-xs text-muted-foreground text-center sm:text-right">
            © {new Date().getFullYear()} {t("Ahmed Elkhateeb — Computer & Software Engineer", "أحمد الخطيب — مهندس كمبيوتر وبرمجيات")}
          </p>
        </div>
      </div>
    </footer>
  )
}
