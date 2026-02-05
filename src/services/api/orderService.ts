import apiClient from './axios'
import type { Order } from '../../types/order'

export const orderService = {
  async createOrder(payload: Omit<Order, 'id' | 'status' | 'placedAt'>) {
    const response = await apiClient.post<Order>('/orders', payload)
    return response.data
  },
  async getOrders() {
    const response = await apiClient.get<Order[]>('/orders')
    return response.data
  },
  async getOrderById(orderId: string) {
    const response = await apiClient.get<Order>(`/orders/${orderId}`)
    return response.data
  },
}
