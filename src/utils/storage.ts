export const storage = {
  get<T>(key: string, fallback: T): T {
    if (typeof window === 'undefined') return fallback
    const value = window.localStorage.getItem(key)
    if (!value) return fallback
    try {
      return JSON.parse(value) as T
    } catch {
      return fallback
    }
  },
  set<T>(key: string, value: T) {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  remove(key: string) {
    if (typeof window === 'undefined') return
    window.localStorage.removeItem(key)
  },
}
