import { Button, DatePicker, Form, Input, Select } from 'antd'
import type { DeliverySlot } from '../../types/delivery'
import type { PaymentMethod } from '../../types/payment'

type CheckoutFormProps = {
  slots: DeliverySlot[]
  onSubmit: (values: {
    address: string
    city: string
    postalCode: string
    slotId: string
    paymentMethod: PaymentMethod
    deliveryDate: string
  }) => void
}

export const CheckoutForm = ({ slots, onSubmit }: CheckoutFormProps) => {
  return (
    <Form
      layout="vertical"
      className="space-y-4"
      onFinish={(values) =>
        onSubmit({
          address: values.address as string,
          city: values.city as string,
          postalCode: values.postalCode as string,
          slotId: values.slotId as string,
          paymentMethod: values.paymentMethod as PaymentMethod,
          deliveryDate: values.deliveryDate?.format?.('YYYY-MM-DD') ?? '',
        })
      }
    >
      <Form.Item label="Street Address" name="address" rules={[{ required: true }]}>
        <Input placeholder="123 Market Street" />
      </Form.Item>
      <div className="grid gap-4 md:grid-cols-2">
        <Form.Item label="City" name="city" rules={[{ required: true }]}>
          <Input placeholder="San Francisco" />
        </Form.Item>
        <Form.Item label="Postal Code" name="postalCode" rules={[{ required: true }]}>
          <Input placeholder="94102" />
        </Form.Item>
      </div>
      <Form.Item label="Delivery Date" name="deliveryDate" rules={[{ required: true }]}>
        <DatePicker className="w-full" />
      </Form.Item>
      <Form.Item label="Delivery Slot" name="slotId" rules={[{ required: true }]}>
        <Select placeholder="Select a delivery window">
          {slots.map((slot) => (
            <Select.Option key={slot.id} value={slot.id}>
              {slot.label} ({slot.from} - {slot.to})
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Payment Method" name="paymentMethod" rules={[{ required: true }]}>
        <Select>
          <Select.Option value="card">Card</Select.Option>
          <Select.Option value="cash">Cash on Delivery</Select.Option>
          <Select.Option value="wallet">Wallet</Select.Option>
        </Select>
      </Form.Item>
      <Button type="primary" htmlType="submit" className="bg-emerald-600">
        Place Order
      </Button>
    </Form>
  )
}
