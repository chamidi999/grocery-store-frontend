export type ProductCategory = {
  id: string
  name: string
  slug: string
  imageUrl?: string
}

export type Product = {
  id: string
  name: string
  slug: string
  description: string
  price: number
  unit: string
  imageUrl: string
  categoryId: string
  rating: number
  stock: number
  isOrganic?: boolean
  isOnSale?: boolean
}

export type ProductFilters = {
  search?: string
  categoryId?: string
  minPrice?: number
  maxPrice?: number
}
