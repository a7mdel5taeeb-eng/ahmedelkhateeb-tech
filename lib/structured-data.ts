import type { BlogPost } from './blog-data'

export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${url}/og-images/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://github.com/a7mdel5taeeb-eng',
    },
    publisher: {
      '@type': 'Person',
      name: 'Ahmed Elkhateeb',
      url: 'https://github.com/a7mdel5taeeb-eng',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ahmed Elkhateeb',
    description: 'Ahmed Elkhateeb — Computer & Software Engineer. Practical software, web, education, and IT solutions.',
    url: url,
    author: {
      '@type': 'Person',
      name: 'Ahmed Elkhateeb',
      url: 'https://github.com/a7mdel5taeeb-eng',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ahmed Elkhateeb',
    url: 'https://github.com/a7mdel5taeeb-eng',
    sameAs: [
      'https://github.com/a7mdel5taeeb-eng',
    ],
    jobTitle: 'Computer & Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Dunia Al-Ajial International Schools',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
