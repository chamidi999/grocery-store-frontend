import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-3xl items-center justify-center px-4 py-16">
      <Result
        status="404"
        title="Page not found"
        subTitle="We couldn't find the page you're looking for."
        extra={
          <Button type="primary" className="bg-emerald-600">
            <Link to="/">Go Home</Link>
          </Button>
        }
      />
    </div>
  )
}
