export interface UsedBoat {
  id: string
  title: string
  year: number
  brand: string
  engine: string
  price: number
  image: string
  badge?: string | null
}

export interface UsedOutboard {
  id: string
  title: string
  year: number
  brand: string
  hp: number
  price: number
  image: string
  badge?: string | null
}

export interface Special {
  id: string
  title: string
  category: 'boat' | 'outboard' | 'boat-show'
  image: string
  description: string
  price?: string | null
  badge?: string | null
  expires?: string | null
}

export interface Brand {
  name: string
  slug: string
  logoPath: string
  description: string
  externalUrl?: string
}

export interface OutboardModel {
  brand: 'mercury' | 'suzuki'
  category: string
  name: string
  hpRange: string
  keyFeature: string
  image: string
}
