'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, ArrowDown, ArrowRight, Menu, X, MapPin, MessageCircle, Code2, GraduationCap, Network } from 'lucide-react'
import { content, links, sectionIds, type Language } from '@/lib/portfolio-content'
import { AboutServices, WorkEducation, SkillsExperience, ContactFooter } from '@/components/portfolio-sections'
import './portfolio.css'

export function Portfolio() {
  const [language, setLanguage] = useState<Language>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const [ready, setReady] = useState(false)
  const t = content[language]
  useEffect(() => {
    try { if (localStorage.getItem('ae-language') === 'ar') setLanguage('ar') } catch {}
    setReady(true)
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id) }) }, { rootMargin: '-20% 0px -55% 0px' })
    sectionIds.forEach(id => { const section = document.getElementById(id); if (section) observer.observe(section) })
    return () => observer.disconnect()
  }, [])
  useEffect(() => { document.documentElement.lang = language; document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr' }, [language])
  useEffect(() => { const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close) }, [])
  function switchLanguage(next: Language) { setLanguage(next); setMenuOpen(false); try { localStorage.setItem('ae-language', next) } catch {} }
  return <div className="portfolio" data-ready={ready} dir={language === 'ar' ? 'rtl' : 'ltr'}>
    <a className="skip-link" href="#main-content">{t.skip}</a>
    <header className="portfolio-header"><div className="container-shell nav-inner"><a href="#home" className="brand" aria-label={t.name}><span className="brand-mark">ae<span>.</span></span><span className="brand-name">{t.name}<small>{t.role}</small></span></a><nav className="desktop-nav" aria-label={language === 'en' ? 'Main navigation' : 'التنقل الرئيسي'}>{sectionIds.map((id,i) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined}>{t.nav[i]}</a>)}</nav><div className="nav-controls"><div className="language-switch" aria-label="Language / اللغة"><button onClick={() => switchLanguage('en')} aria-pressed={language === 'en'}>EN</button><span>/</span><button lang="ar" onClick={() => switchLanguage('ar')} aria-pressed={language === 'ar'}>العربية</button></div><a href="#contact" className="nav-contact">{t.contactCta}<ArrowUpRight size={15}/></a><button className="mobile-toggle" aria-label={menuOpen ? t.close : t.menu} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button></div></div>{menuOpen && <nav className="mobile-nav" id="mobile-navigation">{sectionIds.map((id,i) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{t.nav[i]}<ArrowUpRight size={17}/></a>)}</nav>}</header>
    <main id="main-content"><section id="home" className="hero container-shell"><div className="hero-topline"><span><i/>{t.available}</span><span className="hero-coordinate">PERSONAL PORTFOLIO — 2026</span></div><div className="hero-grid"><div className="hero-copy"><p className="eyebrow">{t.intro}</p><h1>{t.title[0]}<br/><span>{t.title[1]}</span></h1><div className="hero-identity"><span className="identity-rule"/><p>{t.name}<span>{t.role}</span></p></div><p className="hero-description">{t.heroText}</p><div className="hero-actions"><a href="#work" className="button-primary">{t.workCta}<ArrowUpRight size={18}/></a><a href="#contact" className="button-outline">{t.contactCta}<ArrowRight size={17}/></a></div><div className="hero-meta"><a href={links.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={15}/>{t.whatsapp}<ArrowUpRight size={12}/></a><span><MapPin size={14}/>{t.location}</span></div></div><div className="hero-visual"><div className="visual-grid" aria-hidden="true"/><Image src="/images/digital-core.png" alt={language === 'en' ? 'Interlocking glass and titanium forms, representing connected ideas and technology' : 'أشكال متداخلة من الزجاج والتيتانيوم ترمز إلى ترابط الأفكار والتقنية'} fill priority sizes="(max-width: 760px) 100vw, 50vw" className="hero-image"/><div className="visual-tag tag-code"><Code2 size={17}/><span>{t.identities[1]}</span><i/></div><div className="visual-tag tag-education"><GraduationCap size={18}/><span>{t.identities[2]}</span></div><div className="visual-tag tag-systems"><Network size={17}/><span>{t.identities[4]}</span><ArrowUpRight size={13}/></div><div className="visual-caption"><span className="crosshair">+</span><span>THINK. BUILD. EMPOWER.</span><span>01 — ∞</span></div></div></div><div className="hero-bottom"><div className="discipline-list">{t.disciplines.map((d,i) => <span key={d}>{i > 0 && <i/>}{d}</span>)}</div><a href="#about" aria-label={t.scroll}><ArrowDown size={17}/></a></div></section><AboutServices t={t}/><WorkEducation t={t}/><SkillsExperience t={t}/><ContactFooter t={t}/></main>
  </div>
}
