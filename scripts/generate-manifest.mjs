import fs from 'fs'
import path from 'path'

const PUBLIC_IMAGES = 'public/images'
const OUTPUT = 'data/image-manifest.json'

function readDir(dir) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir)
    .filter(f => /\.(jpe?g|png|gif|webp|svg|avif)$/i.test(f))
    .map(f => '/' + path.join('images', path.relative('public/images', path.join(dir, f))).replace(/\\/g, '/'))
    .sort()
}

function readSubDirs(dir) {
  if (!fs.existsSync(dir)) return {}
  const result = {}
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry)
    if (fs.statSync(full).isDirectory()) {
      result[entry] = readDir(full)
    }
  }
  return result
}

const manifest = {
  logo: fs.existsSync('public/images/brand/logo.png') ? '/images/brand/logo.png' : '',
  mercuryLogo: fs.existsSync('public/images/brand/mercury-logo.png') ? '/images/brand/mercury-logo.png' : '',
  senatorLogo: fs.existsSync('public/images/brand/senator-logo.png') ? '/images/brand/senator-logo.png' : '',
  hero: readDir('public/images/hero'),
  boats: readSubDirs('public/images/boats'),
  outboards: readSubDirs('public/images/outboards'),
  jetskis: readDir('public/images/jetskis'),
  inflatables: readDir('public/images/inflatables'),
  trailers: readDir('public/images/trailers'),
  service: readDir('public/images/service'),
  specials: readDir('public/images/specials'),
  used: readDir('public/images/used'),
  misc: readDir('public/images/misc'),
}

fs.writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2))
console.log('✓ Manifest written to', OUTPUT)
console.log('  Hero images   :', manifest.hero.length)
console.log('  Boat brands   :', Object.keys(manifest.boats).join(', '))
console.log('  Outboard lines:', Object.keys(manifest.outboards).join(', '))
console.log('  Service images:', manifest.service.length)
console.log('  Misc images   :', manifest.misc.length)
