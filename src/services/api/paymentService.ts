import apiClient from './axios'
import type { PaymentIntent, PaymentMethod } from '../../types/payment'

export const paymentService = {
  async createPaymentIntent(orderId: string, method: PaymentMethod) {
    const response = await apiClient.post<PaymentIntent>('/payments', {
      orderId,
      method,
    })
    return response.data
  },
  async getPaymentIntent(id: string) {
    const response = await apiClient.get<PaymentIntent>(`/payments/${id}`)
    return response.data
  },
}
