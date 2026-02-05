import { Button, Form, Input, Tabs } from 'antd'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { loginRequest, registerRequest } from '../features/auth/authSlice'

export const LoginRegisterPage = () => {
  const dispatch = useAppDispatch()

  return (
    <Tabs
      defaultActiveKey="login"
      items={[
        {
          key: 'login',
          label: 'Login',
          children: (
            <Form
              layout="vertical"
              onFinish={(values) =>
                dispatch(loginRequest({ email: values.email, password: values.password }))
              }
            >
              <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                <Input placeholder="alex@example.com" />
              </Form.Item>
              <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                <Input.Password placeholder="••••••••" />
              </Form.Item>
              <Button type="primary" htmlType="submit" className="bg-emerald-600">
                Sign in
              </Button>
            </Form>
          ),
        },
        {
          key: 'register',
          label: 'Register',
          children: (
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
              <Form.Item label="Full Name" name="name" rules={[{ required: true }]}>
                <Input placeholder="Alex Johnson" />
              </Form.Item>
              <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                <Input placeholder="alex@example.com" />
              </Form.Item>
              <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                <Input.Password placeholder="Create a password" />
              </Form.Item>
              <Button type="primary" htmlType="submit" className="bg-emerald-600">
                Create account
              </Button>
            </Form>
          ),
        },
      ]}
    />
  )
}
