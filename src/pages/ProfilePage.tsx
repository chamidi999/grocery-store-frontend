import { Button, Card, Form, Input } from 'antd'

export const ProfilePage = () => {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12">
      <Card title="Profile" className="shadow-sm">
        <Form layout="vertical">
          <div className="grid gap-4 md:grid-cols-2">
            <Form.Item label="Full Name" name="name">
              <Input placeholder="Alex Johnson" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="alex@example.com" />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input placeholder="+1 415 555 0112" />
            </Form.Item>
          </div>
          <Button type="primary" className="bg-emerald-600">
            Save Changes
          </Button>
        </Form>
      </Card>
    </div>
  )
}
