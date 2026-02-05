import apiClient from './axios'
import type { Address } from '../../types/address'

export const addressService = {
  async getAddresses() {
    const response = await apiClient.get<Address[]>('/addresses')
    return response.data
  },
  async addAddress(payload: Omit<Address, 'id'>) {
    const response = await apiClient.post<Address>('/addresses', payload)
    return response.data
  },
  async updateAddress(id: string, payload: Partial<Address>) {
    const response = await apiClient.patch<Address>(`/addresses/${id}`, payload)
    return response.data
  },
}
