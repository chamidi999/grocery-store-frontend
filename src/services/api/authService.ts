import apiClient from './axios'
import type { User } from '../../types/user'

export type AuthResponse = {
  user: User
  token: string
}

export const authService = {
  async login(email: string, password: string) {
    const response = await apiClient.post<AuthResponse>('/auth/login', {
      email,
      password,
    })
    return response.data
  },
  async register(name: string, email: string, password: string) {
    const response = await apiClient.post<AuthResponse>('/auth/register', {
      name,
      email,
      password,
    })
    return response.data
  },
  async getProfile() {
    const response = await apiClient.get<User>('/auth/me')
    return response.data
  },
}
