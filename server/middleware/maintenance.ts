export default defineEventHandler((event) => {
  const path = getRequestURL(event).pathname
  // Leave assets and API responses alone. Every public page uses maintenance.
  if (path.startsWith('/api/') || path.startsWith('/_') || path.startsWith('/images/') || ['favicon.ico', 'robots.txt', 'sitemap.xml'].includes(path.slice(1))) {
    return
  }

  setResponseStatus(event, 503, 'Service Unavailable')
  setResponseHeaders(event, {
    'Retry-After': '3600',
    'Cache-Control': 'no-store',
    'X-Robots-Tag': 'noindex, nofollow',
  })
})
