import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-4">
      <div className="w-full max-w-md space-y-6 rounded-2xl border border-emerald-100 bg-white p-8 shadow-lg">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">Freshly Grocery</p>
          <p className="mt-2 text-sm text-slate-500">
            A delightful grocery experience designed for delivery-first shoppers.
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
