import { Card, Divider, List, message } from 'antd'
import { CheckoutForm } from '../components/checkout/CheckoutForm'
import { deliverySlots } from '../data/mockDelivery'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'
import { createOrderRequest } from '../features/orders/ordersSlice'
import { formatCurrency } from '../utils/currency'

export const CheckoutPage = () => {
  const dispatch = useAppDispatch()
  const { items } = useAppSelector((state) => state.cart)

  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0,
  )
  const selectedSlot = deliverySlots[0]
  const deliveryFee = selectedSlot.fee
  const total = subtotal + deliveryFee

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-slate-900">Checkout</h1>
          <Card title="Delivery & Payment" className="shadow-sm">
            <CheckoutForm
              slots={deliverySlots}
              onSubmit={(values) => {
                dispatch(
                  createOrderRequest({
                    items: items.map((item) => ({
                      product: item.product,
                      quantity: item.quantity,
                      price: item.product.price,
                    })),
                    subtotal,
                    deliveryFee,
                    total,
                    address: {
                      id: 'address-1',
                      label: 'Home',
                      recipientName: 'Alex Johnson',
                      phone: '+1 415 555 0112',
                      street: values.address,
                      city: values.city,
                      state: 'CA',
                      postalCode: values.postalCode,
                      country: 'USA',
                      isDefault: true,
                    },
                    estimatedDelivery: values.deliveryDate,
                  }),
                )
                message.success('Order placed! Redirecting to success page...')
              }}
            />
          </Card>
        </div>
        <div>
          <Card title="Order Summary" className="shadow-sm">
            <List
              dataSource={items}
              renderItem={(item) => (
                <List.Item>
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">{item.product.name}</p>
                      <p className="text-xs text-slate-500">Qty {item.quantity}</p>
                    </div>
                    <p className="text-sm font-semibold">
                      {formatCurrency(item.product.price * item.quantity)}
                    </p>
                  </div>
                </List.Item>
              )}
            />
            <Divider />
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Delivery Fee</span>
                <span>{formatCurrency(deliveryFee)}</span>
              </div>
              <div className="flex items-center justify-between text-base font-semibold text-slate-900">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
