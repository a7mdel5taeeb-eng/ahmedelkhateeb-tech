import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ProjectsGrid } from '@/components/projects-grid'
import { Workbench } from '@/components/workbench'
import { LabNotes } from '@/components/lab-notes'
import { Footer } from '@/components/footer'
import { CursorGlow } from '@/components/cursor-glow'

export default function Home() {
  const person = { '@context': 'https://schema.org', '@type': 'Person', name: 'Ahmed Elkhateeb', alternateName: 'أحمد الخطيب', jobTitle: 'Computer & Software Engineer', email: 'a7mdel5taeeb@gmail.com', telephone: '+966564227074', sameAs: ['https://github.com/a7mdel5taeeb-eng'], knowsLanguage: ['Arabic', 'English'], address: { '@type': 'PostalAddress', addressCountry: 'SA' } }
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}/><div className="relative min-h-screen overflow-hidden scanlines"><CursorGlow/><div className="relative z-10"><Header/><main id="main"><HeroSection/><ProjectsGrid/><Workbench/><LabNotes/></main><Footer/></div></div></>
}
