import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { registerRequest } from '../features/auth/authSlice'

const { Title, Text } = Typography

export const RegisterPage = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <Title level={3} className="!mb-0">
          Create your account
        </Title>
        <Text type="secondary">Start fresh deliveries with tailored grocery lists.</Text>
      </div>
      <Form
        layout="vertical"
        onFinish={(values) =>
          dispatch(
            registerRequest({
              name: values.name,
              email: values.email,
              password: values.password,
            }),
          )
        }
      >
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name.' }]}
        >
          <Input placeholder="Alex Johnson" size="large" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please enter your email.' }]}
        >
          <Input placeholder="alex@example.com" size="large" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please create a password.' }]}
        >
          <Input.Password placeholder="Create a password" size="large" />
        </Form.Item>
        <div className="flex items-center justify-between text-sm">
          <Link to="/login" className="text-emerald-600">
            Already have an account?
          </Link>
          <Text type="secondary">By signing up you agree to our terms.</Text>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="mt-4 w-full bg-emerald-600"
        >
          Create account
        </Button>
      </Form>
    </div>
  )
}
