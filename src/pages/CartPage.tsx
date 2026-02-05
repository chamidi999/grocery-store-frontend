import { Button, Card, Divider, Empty } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice'
import { formatCurrency } from '../utils/currency'

export const CartPage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { items } = useAppSelector((state) => state.cart)

  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0,
  )

  if (items.length === 0) {
    return (
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <Empty description="Your cart is empty" />
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Your cart</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item.product.id} className="shadow-sm">
              <div className="flex items-center gap-4">
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="h-20 w-20 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.product.name}
                  </h3>
                  <p className="text-sm text-slate-500">{item.product.unit}</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    className="w-16 rounded-lg border border-slate-200 px-2 py-1 text-center"
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(event) =>
                      dispatch(
                        updateQuantity({
                          productId: item.product.id,
                          quantity: Number(event.target.value),
                        }),
                      )
                    }
                  />
                  <Button
                    type="link"
                    danger
                    onClick={() => dispatch(removeFromCart(item.product.id))}
                  >
                    Remove
                  </Button>
                </div>
                <p className="text-sm font-semibold">
                  {formatCurrency(item.product.price * item.quantity)}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <Card className="h-fit shadow-sm" title="Summary">
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <Divider />
          <Button type="primary" className="w-full bg-emerald-600" onClick={() => navigate('/checkout')}>
            Proceed to Checkout
          </Button>
        </Card>
      </div>
    </div>
  )
}
