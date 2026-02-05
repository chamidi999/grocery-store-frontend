export type PaymentMethod = 'card' | 'cash' | 'wallet'

export type PaymentIntent = {
  id: string
  orderId: string
  method: PaymentMethod
  amount: number
  status: 'pending' | 'paid' | 'failed'
}
