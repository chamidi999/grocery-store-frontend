import { Button, Rate, Tag } from 'antd'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../components/products/ProductCard'
import { addToCart } from '../features/cart/cartSlice'
import { products } from '../data/mockProducts'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { formatCurrency } from '../utils/currency'

export const ProductDetailsPage = () => {
  const { productId } = useParams()
  const dispatch = useAppDispatch()
  const product = products.find((item) => item.id === productId) ?? products[0]
  const related = products.filter((item) => item.categoryId === product.categoryId)

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-96 w-full rounded-3xl object-cover"
          />
        </div>
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            {product.isOrganic && <Tag color="green">Organic</Tag>}
            {product.isOnSale && <Tag color="red">On sale</Tag>}
          </div>
          <h1 className="text-3xl font-semibold text-slate-900">{product.name}</h1>
          <p className="text-slate-600">{product.description}</p>
          <div className="flex items-center gap-3">
            <Rate allowHalf disabled defaultValue={product.rating} />
            <span className="text-sm text-slate-500">{product.rating} rating</span>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Price</p>
                <p className="text-2xl font-semibold text-emerald-700">
                  {formatCurrency(product.price)}
                </p>
                <p className="text-xs text-slate-500">{product.unit}</p>
              </div>
              <Button
                type="primary"
                size="large"
                className="bg-emerald-600"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Related items</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  )
}
