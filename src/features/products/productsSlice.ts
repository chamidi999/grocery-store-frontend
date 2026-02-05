import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Product, ProductCategory, ProductFilters } from '../../types/product'

export type ProductsState = {
  items: Product[]
  categories: ProductCategory[]
  selected?: Product
  filters: ProductFilters
  status: 'idle' | 'loading' | 'failed'
  error?: string
}

const initialState: ProductsState = {
  items: [],
  categories: [],
  filters: {},
  status: 'idle',
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsRequest(state, action: PayloadAction<ProductFilters | undefined>) {
      state.status = 'loading'
      state.error = undefined
      state.filters = action.payload ?? {}
    },
    fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.status = 'idle'
      state.items = action.payload
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.status = 'failed'
      state.error = action.payload
    },
    fetchProductRequest(state, action: PayloadAction<string>) {
      state.status = 'loading'
      state.error = undefined
      state.selected = undefined
    },
    fetchProductSuccess(state, action: PayloadAction<Product>) {
      state.status = 'idle'
      state.selected = action.payload
    },
    fetchProductFailure(state, action: PayloadAction<string>) {
      state.status = 'failed'
      state.error = action.payload
    },
    fetchCategoriesRequest(state) {
      state.status = 'loading'
      state.error = undefined
    },
    fetchCategoriesSuccess(state, action: PayloadAction<ProductCategory[]>) {
      state.status = 'idle'
      state.categories = action.payload
    },
    fetchCategoriesFailure(state, action: PayloadAction<string>) {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductFailure,
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} = productsSlice.actions

export default productsSlice.reducer
