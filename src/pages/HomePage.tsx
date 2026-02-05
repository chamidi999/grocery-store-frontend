import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { categories, products } from '../data/mockProducts'
import { ProductCard } from '../components/products/ProductCard'

export const HomePage = () => {
  return (
    <div className="space-y-16 pb-16">
      <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-4 py-16 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Fresh delivered daily
            </p>
            <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
              Grocery shopping made effortless and delightful.
            </h1>
            <p className="text-lg text-slate-600">
              Build your basket from farm-fresh produce, artisan goods, and pantry
              essentials—all delivered in your chosen time slot.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button type="primary" size="large" className="bg-emerald-600">
                <Link to="/shop" className="flex items-center gap-2">
                  Shop now <ArrowRightOutlined />
                </Link>
              </Button>
              <Button size="large">Explore delivery</Button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80"
              alt="Fresh groceries"
              className="h-80 w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Shop by category</h2>
          <Link to="/shop" className="text-sm font-semibold text-emerald-600">
            View all
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-base font-semibold text-slate-800">{category.name}</p>
              <p className="mt-1 text-xs text-slate-500">Hand-picked selection</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Featured picks</h2>
          <Link to="/shop" className="text-sm font-semibold text-emerald-600">
            Explore shop
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
