/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: '/projects', destination: '/#work', permanent: true },
      { source: '/introduction', destination: '/#about', permanent: true },
      { source: '/workbench', destination: '/#skills', permanent: true },
      { source: '/notes', destination: '/#education', permanent: true },
      { source: '/blog/:path*', destination: '/#education', permanent: true },
    ]
  },
  async headers() {
    return [{ source: '/:path*', headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ] }]
  },
}

export default nextConfig
