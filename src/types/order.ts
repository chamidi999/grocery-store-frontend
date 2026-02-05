import type { Address } from './address'
import type { Product } from './product'

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'packed'
  | 'out_for_delivery'
  | 'delivered'

export type OrderItem = {
  product: Product
  quantity: number
  price: number
}

export type Order = {
  id: string
  status: OrderStatus
  items: OrderItem[]
  subtotal: number
  deliveryFee: number
  total: number
  address: Address
  placedAt: string
  estimatedDelivery: string
}
