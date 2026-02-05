export type DeliverySlot = {
  id: string
  label: string
  from: string
  to: string
  fee: number
}

export type DeliveryStatusStep = {
  status: 'pending' | 'confirmed' | 'packed' | 'out_for_delivery' | 'delivered'
  label: string
  timestamp?: string
}
