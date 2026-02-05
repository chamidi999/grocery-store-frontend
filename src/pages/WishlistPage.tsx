import { Empty } from 'antd'
import { useAppSelector } from '../hooks/useAppSelector'
import { ProductCard } from '../components/products/ProductCard'

export const WishlistPage = () => {
  const items = useAppSelector((state) => state.wishlist.items)

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Wishlist</h1>
      {items.length === 0 ? (
        <div className="mt-8">
          <Empty description="Your wishlist is empty" />
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
