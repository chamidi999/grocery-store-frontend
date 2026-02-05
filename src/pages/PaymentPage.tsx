import { Card, Radio } from 'antd'
import { useState } from 'react'

export const PaymentPage = () => {
  const [method, setMethod] = useState('card')

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12">
      <Card title="Payment" className="shadow-sm">
        <Radio.Group value={method} onChange={(event) => setMethod(event.target.value)}>
          <div className="space-y-3">
            <Radio value="card">Credit / Debit Card</Radio>
            <Radio value="cash">Cash on Delivery</Radio>
            <Radio value="wallet">Wallet</Radio>
          </div>
        </Radio.Group>
      </Card>
    </div>
  )
}
