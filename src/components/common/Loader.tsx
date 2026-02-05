import { Spin } from 'antd'

export const Loader = ({ label = 'Loading...' }: { label?: string }) => (
  <div className="flex items-center justify-center gap-3 py-10 text-slate-500">
    <Spin />
    <span className="text-sm">{label}</span>
  </div>
)
