import fs from 'fs'
import path from 'path'
import https from 'https'
import http from 'http'
import { URL } from 'url'

const BASE = 'https://www.aucklandmarine.co.nz'

const PAGES = [
  '/',
  '/new/',
  '/kiwikraft/',
  '/ultimate/',
  '/flyfin/',
  '/new/fi-glass/',
  '/senator/',
  '/amc-boats/',
  '/challenger/',
  '/campion/',
  '/reflex/',
  '/fyran/',
  '/slr-boats/',
  '/kawasaki-jet-skis/',
  '/inflatables/',
  '/new/mercury/mercury-outboards/',
  '/new/mercury/verado-outboards/',
  '/new/mercury/fourstroke/',
  '/new/mercury/twostroke/',
  '/new/mercury/sea-pro/',
  '/avator-electric-outboards/',
  '/new/mercruiser/',
  '/sterndrives/',
  '/inboards/',
  '/towsport-inboard/',
  '/suzuki-outboards/',
  '/used/boats/',
  '/used/outboards-2/',
  '/trailers/',
  '/workshop/',
  '/specials/',
  '/specials-outboards/',
  '/insurance/',
  '/about/',
  '/contact/',
]

// Explicit mapping table: source URL suffix → local path
const EXPLICIT_MAP = {
  '/wp-content/uploads/2023/01/logo.png': 'public/images/brand/logo.png',
  '/wp-content/uploads/2023/01/favicon-32x32-2.png': 'public/favicon.ico',
  '/wp-content/themes/responsive-default/img/mercury-black-logo.png': 'public/images/brand/mercury-logo.png',
  '/wp-content/uploads/2026/03/senator-logo.png': 'public/images/brand/senator-logo.png',
  '/wp-content/themes/responsive-default/img/oval-arrow.png': 'public/images/misc/oval-arrow.png',
  '/wp-content/uploads/2026/05/1920x756_GetMore_90115hp_NZ1.jpg': 'public/images/hero/hero-mercury-get-more.jpg',
  '/wp-content/uploads/2025/09/2-strokerunoutwebsitebanner.jpg': 'public/images/hero/hero-2stroke-runout.jpg',
  '/wp-content/uploads/2026/04/Dale.jpg': 'public/images/hero/hero-dale.jpg',
  '/wp-content/uploads/2026/04/Untitleddesign.jpg': 'public/images/hero/hero-promo.jpg',
  '/wp-content/uploads/2022/06/Home-Hero-3.jpg': 'public/images/hero/hero-boats.jpg',
  '/wp-content/uploads/2024/12/611.jpg': 'public/images/hero/hero-611.jpg',
  '/wp-content/uploads/2020/11/Workshop-Directions-min-1024x576.png': 'public/images/service/workshop-directions.png',
  '/wp-content/uploads/2017/12/certified-service-centre.jpg': 'public/images/service/certified-service-centre.jpg',
}

function resolveLocalPath(url) {
  // Strip origin to get pathname
  let pathname
  try {
    const parsed = new URL(url)
    pathname = parsed.pathname
  } catch {
    pathname = url
  }

  // Check explicit map first
  if (EXPLICIT_MAP[pathname]) return EXPLICIT_MAP[pathname]

  const lower = pathname.toLowerCase()
  const filename = path.basename(pathname).split('?')[0]

  // Pattern-based routing
  if (lower.includes('/kiwikraft') || filename.toLowerCase().includes('kiwi')) return `public/images/boats/kiwikraft/${filename}`
  if (lower.includes('/senator') || filename.toLowerCase().includes('senator')) return `public/images/boats/senator/${filename}`
  if (lower.includes('/fi-glass') || filename.toLowerCase().includes('figlass') || filename.toLowerCase().includes('fi-glass')) return `public/images/boats/figlass/${filename}`
  if (lower.includes('/challenger') || filename.toLowerCase().includes('challenger')) return `public/images/boats/challenger/${filename}`
  if (lower.includes('/flyfin') || filename.toLowerCase().includes('flyfin')) return `public/images/boats/flyfin/${filename}`
  if (lower.includes('/reflex') || filename.toLowerCase().includes('reflex')) return `public/images/boats/reflex/${filename}`
  if (lower.includes('/campion') || filename.toLowerCase().includes('campion')) return `public/images/boats/campion/${filename}`
  if (lower.includes('/fyran') || filename.toLowerCase().includes('fyran')) return `public/images/boats/fyran/${filename}`
  if (lower.includes('/slr') || filename.toLowerCase().includes('slr') || lower.includes('legacy')) return `public/images/boats/slr/${filename}`
  if (lower.includes('/ultimate') || filename.toLowerCase().includes('ultimate')) return `public/images/boats/ultimate/${filename}`
  if (lower.includes('/amc-boats') || filename.toLowerCase().includes('amc-boat')) return `public/images/boats/amc/${filename}`
  if (lower.includes('/kawasaki') || filename.toLowerCase().includes('kawasaki') || lower.includes('jet-ski')) return `public/images/jetskis/${filename}`
  if (lower.includes('/inflatable') || filename.toLowerCase().includes('inflatable')) return `public/images/inflatables/${filename}`
  if (lower.includes('/mercruiser') || filename.toLowerCase().includes('mercruiser')) return `public/images/outboards/mercruiser/${filename}`
  if (lower.includes('/mercury') || lower.includes('/verado') || lower.includes('/fourstroke') || lower.includes('/twostroke') || lower.includes('/sea-pro') || lower.includes('/avator') || filename.toLowerCase().includes('mercury') || filename.toLowerCase().includes('verado')) return `public/images/outboards/mercury/${filename}`
  if (lower.includes('/suzuki') || filename.toLowerCase().includes('suzuki')) return `public/images/outboards/suzuki/${filename}`
  if (lower.includes('/trailer') || filename.toLowerCase().includes('trailer')) return `public/images/trailers/${filename}`
  if (lower.includes('/workshop') || lower.includes('/service') || filename.toLowerCase().includes('workshop') || filename.toLowerCase().includes('service')) return `public/images/service/${filename}`
  if (lower.includes('/used')) return `public/images/used/${filename}`
  if (lower.includes('/specials')) return `public/images/specials/${filename}`

  return `public/images/misc/${filename}`
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url)
    const lib = parsed.protocol === 'https:' ? https : http
    const req = lib.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,*/*',
      },
      timeout: 20000,
    }, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectUrl = new URL(res.headers.location, url).href
        return fetchUrl(redirectUrl).then(resolve).catch(reject)
      }
      const chunks = []
      res.on('data', chunk => chunks.push(chunk))
      res.on('end', () => resolve({ status: res.statusCode, contentType: res.headers['content-type'] || '', body: Buffer.concat(chunks) }))
      res.on('error', reject)
    })
    req.on('error', reject)
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')) })
  })
}

async function scrapePageImages(pagePath) {
  const url = BASE + pagePath
  try {
    const { status, body } = await fetchUrl(url)
    if (status !== 200) {
      console.error(`✗ HTTP ${status}: ${url}`)
      return []
    }
    const html = body.toString('utf8')
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi
    const found = []
    let match
    while ((match = imgRegex.exec(html)) !== null) {
      found.push(match[1])
    }
    return found
  } catch (err) {
    console.error(`✗ Failed to fetch ${url}: ${err.message}`)
    return []
  }
}

async function downloadImage(url, localPath) {
  if (fs.existsSync(localPath)) {
    console.log('⏭  skip:', localPath)
    return 'skipped'
  }
  try {
    const { status, contentType, body } = await fetchUrl(url)
    if (status !== 200) throw new Error(`HTTP ${status}`)
    if (!contentType.includes('image') && !contentType.includes('octet-stream')) {
      throw new Error(`Not an image (${contentType})`)
    }
    fs.mkdirSync(path.dirname(localPath), { recursive: true })
    fs.writeFileSync(localPath, body)
    console.log('✓ saved:', localPath)
    return 'downloaded'
  } catch (err) {
    console.error('✗ failed:', url, err.message)
    return 'failed'
  }
}

async function main() {
  console.log('── Scraping pages ──')
  const allUrls = new Set()

  for (const pagePath of PAGES) {
    console.log(`  Scraping: ${pagePath}`)
    const imgs = await scrapePageImages(pagePath)
    for (const src of imgs) {
      // Resolve to absolute URL
      let absUrl
      try {
        absUrl = new URL(src, BASE).href
      } catch { continue }

      // Filter to only AMC wp-content URLs
      if (
        absUrl.startsWith('https://www.aucklandmarine.co.nz/wp-content/uploads/') ||
        absUrl.startsWith('https://www.aucklandmarine.co.nz/wp-content/themes/')
      ) {
        // Strip query strings
        const clean = absUrl.split('?')[0]
        allUrls.add(clean)
      }
    }
  }

  // Also add the explicit map URLs to ensure we get them
  for (const suffix of Object.keys(EXPLICIT_MAP)) {
    allUrls.add(BASE + suffix)
  }

  console.log(`\n── Found ${allUrls.size} unique image URLs ──\n`)

  let downloaded = 0, skipped = 0, failed = 0

  for (const url of allUrls) {
    const parsed = new URL(url)
    const localPath = resolveLocalPath(parsed.pathname)
    const result = await downloadImage(url, localPath)
    if (result === 'downloaded') downloaded++
    else if (result === 'skipped') skipped++
    else failed++
  }

  console.log(`\n── Scrape complete ──`)
  console.log(`Downloaded : ${downloaded}`)
  console.log(`Skipped    : ${skipped}`)
  console.log(`Failed     : ${failed}`)
}

main()
