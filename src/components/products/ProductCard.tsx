import { Button, Rate, Tag } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { addToCart } from '../../features/cart/cartSlice'
import { toggleWishlist } from '../../features/wishlist/wishlistSlice'
import type { Product } from '../../types/product'
import { formatCurrency } from '../../utils/currency'

export const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch()

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        {product.isOrganic && (
          <Tag color="green" className="absolute left-2 top-2">
            Organic
          </Tag>
        )}
        {product.isOnSale && (
          <Tag color="red" className="absolute right-2 top-2">
            Sale
          </Tag>
        )}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-40 w-full rounded-xl object-cover"
          />
        </Link>
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <Link to={`/product/${product.id}`} className="text-base font-semibold text-slate-900">
          {product.name}
        </Link>
        <p className="mt-1 text-xs text-slate-500">{product.unit}</p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-semibold text-emerald-700">
            {formatCurrency(product.price)}
          </p>
          <Rate allowHalf disabled defaultValue={product.rating} className="text-xs" />
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Button
            type="primary"
            className="flex-1 bg-emerald-600"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </Button>
          <Button
            shape="circle"
            icon={<HeartOutlined />}
            onClick={() => dispatch(toggleWishlist(product))}
          />
        </div>
      </div>
    </div>
  )
}
