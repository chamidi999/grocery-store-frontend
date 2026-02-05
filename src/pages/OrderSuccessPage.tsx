import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

export const OrderSuccessPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-3xl items-center justify-center px-4 py-16">
      <Result
        status="success"
        title="Your order is confirmed!"
        subTitle="We're picking and packing your items. Track your delivery for real-time updates."
        extra={[
          <Button type="primary" key="track" className="bg-emerald-600">
            <Link to="/tracking">Track Order</Link>
          </Button>,
          <Button key="shop">
            <Link to="/shop">Continue Shopping</Link>
          </Button>,
        ]}
      />
    </div>
  )
}
