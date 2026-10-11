import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const requestHeaders = await headers()
  const host = requestHeaders.get('host')
  if (!host) return []
  const protocol = host.startsWith('localhost') ? 'http' : 'https'
  return [{ url: `${protocol}://${host}`, changeFrequency: 'monthly', priority: 1 }]
}
