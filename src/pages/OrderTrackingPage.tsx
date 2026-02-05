import { Card, Steps, Tag } from 'antd'
import { trackingSteps } from '../data/mockDelivery'

export const OrderTrackingPage = () => {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold text-slate-900">Track your delivery</h1>
        <p className="text-slate-600">
          Order <span className="font-semibold">#FS-2045</span> is on the way.
        </p>
      </div>
      <Card className="shadow-sm">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Tag color="green">Out for delivery</Tag>
          <span className="text-sm text-slate-500">
            Estimated arrival: 2:00 PM - 3:00 PM
          </span>
        </div>
        <Steps
          direction="vertical"
          current={3}
          items={trackingSteps.map((step) => ({
            title: step.label,
            description: step.timestamp,
          }))}
        />
      </Card>
    </div>
  )
}
