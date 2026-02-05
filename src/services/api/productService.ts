import apiClient from './axios'
import type { Product, ProductCategory, ProductFilters } from '../../types/product'

export const productService = {
  async getProducts(filters?: ProductFilters) {
    const response = await apiClient.get<Product[]>('/products', {
      params: filters,
    })
    return response.data
  },
  async getProductById(id: string) {
    const response = await apiClient.get<Product>(`/products/${id}`)
    return response.data
  },
  async getCategories() {
    const response = await apiClient.get<ProductCategory[]>('/categories')
    return response.data
  },
}
