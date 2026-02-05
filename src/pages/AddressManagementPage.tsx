import { Button, Card, Form, Input, List } from 'antd'

const addresses = [
  {
    id: 'address-1',
    label: 'Home',
    detail: '123 Market Street, San Francisco, CA',
  },
]

export const AddressManagementPage = () => {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <Card title="Saved addresses" className="shadow-sm">
          <List
            dataSource={addresses}
            renderItem={(address) => (
              <List.Item>
                <div>
                  <p className="text-sm font-semibold">{address.label}</p>
                  <p className="text-xs text-slate-500">{address.detail}</p>
                </div>
              </List.Item>
            )}
          />
        </Card>
        <Card title="Add new address" className="shadow-sm">
          <Form layout="vertical">
            <Form.Item label="Label" name="label" rules={[{ required: true }]}>
              <Input placeholder="Home" />
            </Form.Item>
            <Form.Item label="Street" name="street" rules={[{ required: true }]}>
              <Input placeholder="123 Market Street" />
            </Form.Item>
            <Form.Item label="City" name="city" rules={[{ required: true }]}>
              <Input placeholder="San Francisco" />
            </Form.Item>
            <Form.Item label="Postal Code" name="postalCode" rules={[{ required: true }]}>
              <Input placeholder="94102" />
            </Form.Item>
            <Button type="primary" className="bg-emerald-600">
              Save Address
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  )
}
