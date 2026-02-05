import { useParams } from 'react-router-dom'
import { products } from '../data/mockProducts'
import { ProductCard } from '../components/products/ProductCard'

export const CategoryProductsPage = () => {
  const { categoryId } = useParams()
  const filtered = products.filter((product) => product.categoryId === categoryId)

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Category</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
