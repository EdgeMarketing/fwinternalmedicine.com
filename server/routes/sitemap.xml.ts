export default defineEventHandler(async (event) => {
  const host =
    event.node?.req?.headers?.host ||
    event.req?.headers?.['host'] ||
    'localhost'

  const protocol = host.startsWith('localhost') ? 'http' : 'https'
  const baseURL = `${protocol}://${host.replace(/^www\./, '')}`

  // Your routes here
  const routes = [
    '', // homepage
    'stuff',
    'contact',
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (path) => `
    <url>
      <loc>${baseURL}/${path}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`
    )
    .join('')}
</urlset>`

  event.node.res.setHeader('Content-Type', 'application/xml')
  return sitemap
})