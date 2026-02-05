import { Input, Select, Slider } from 'antd'
import { useMemo, useState } from 'react'
import { ProductCard } from '../components/products/ProductCard'
import { categories, products } from '../data/mockProducts'

export const ShopPage = () => {
  const [search, setSearch] = useState('')
  const [categoryId, setCategoryId] = useState<string | undefined>()
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10])

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = categoryId ? product.categoryId === categoryId : true
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1]
      return matchesSearch && matchesCategory && matchesPrice
    })
  }, [search, categoryId, priceRange])

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="space-y-6 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-700">Search</p>
            <Input
              placeholder="Search groceries"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-700">Category</p>
            <Select
              className="w-full"
              placeholder="All categories"
              allowClear
              onChange={(value) => setCategoryId(value)}
              options={categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold text-slate-700">Price range</p>
            <Slider range value={priceRange} min={0} max={12} onChange={setPriceRange} />
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>${priceRange[0].toFixed(2)}</span>
              <span>${priceRange[1].toFixed(2)}</span>
            </div>
          </div>
        </aside>
        <section>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">Shop</h1>
              <p className="text-sm text-slate-500">
                {filtered.length} items curated for you
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
