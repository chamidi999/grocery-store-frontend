import apiClient from './axios'
import type { DeliverySlot, DeliveryStatusStep } from '../../types/delivery'

export const deliveryService = {
  async getSlots() {
    const response = await apiClient.get<DeliverySlot[]>('/delivery/slots')
    return response.data
  },
  async getTracking(orderId: string) {
    const response = await apiClient.get<DeliveryStatusStep[]>(
      `/delivery/track/${orderId}`,
    )
    return response.data
  },
}
