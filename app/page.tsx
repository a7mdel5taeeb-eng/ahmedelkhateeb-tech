import { Portfolio } from '@/components/portfolio'

export default function Home() {
  const person = { '@context': 'https://schema.org', '@type': 'Person', name: 'Ahmed Elkhateeb', alternateName: 'أحمد الخطيب', jobTitle: 'Computer & Software Engineer', email: 'a7mdel5taeeb@gmail.com', telephone: '+966564227074', sameAs: ['https://github.com/a7mdel5taeeb-eng'], knowsLanguage: ['Arabic', 'English'], address: { '@type': 'PostalAddress', addressCountry: 'SA' } }
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}/><Portfolio/></>
}
