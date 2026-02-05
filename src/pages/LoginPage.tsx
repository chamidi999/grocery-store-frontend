import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { loginRequest } from '../features/auth/authSlice'

const { Title, Text } = Typography

export const LoginPage = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <Title level={3} className="!mb-0">
          Welcome back
        </Title>
        <Text type="secondary">Sign in to manage your groceries and orders.</Text>
      </div>
      <Form
        layout="vertical"
        onFinish={(values) =>
          dispatch(loginRequest({ email: values.email, password: values.password }))
        }
      >
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
          rules={[{ required: true, message: 'Please enter your password.' }]}
        >
          <Input.Password placeholder="••••••••" size="large" />
        </Form.Item>
        <div className="flex items-center justify-between text-sm">
          <Link to="/register" className="text-emerald-600">
            Create an account
          </Link>
          <button type="button" className="text-slate-400">
            Forgot password?
          </button>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="mt-4 w-full bg-emerald-600"
        >
          Sign in
        </Button>
      </Form>
    </div>
  )
}
