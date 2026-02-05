import { Button, Divider, Empty, InputNumber } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { formatCurrency } from '../../utils/currency'
import { removeFromCart, updateQuantity } from '../../features/cart/cartSlice'

export const CartDrawer = ({ onCheckout }: { onCheckout?: () => void }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { items } = useAppSelector((state) => state.cart)

  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0,
  )

  if (items.length === 0) {
    return <Empty description="Your cart is empty" />
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-4 overflow-auto pr-2">
        {items.map((item) => (
          <div key={item.product.id} className="flex items-start gap-3">
            <img
              src={item.product.imageUrl}
              alt={item.product.name}
              className="h-16 w-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-800">{item.product.name}</p>
              <p className="text-xs text-slate-500">{item.product.unit}</p>
              <div className="mt-2 flex items-center gap-2">
                <InputNumber
                  min={1}
                  value={item.quantity}
                  onChange={(value) =>
                    dispatch(
                      updateQuantity({
                        productId: item.product.id,
                        quantity: Number(value ?? 1),
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
            </div>
            <p className="text-sm font-semibold">{formatCurrency(item.product.price)}</p>
          </div>
        ))}
      </div>
      <Divider />
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>Subtotal</span>
          <span className="font-semibold text-slate-900">{formatCurrency(subtotal)}</span>
        </div>
        <Button
          type="primary"
          className="w-full bg-emerald-600"
          onClick={() => {
            onCheckout?.()
            navigate('/checkout')
          }}
        >
          Go to Checkout
        </Button>
      </div>
    </div>
  )
}
