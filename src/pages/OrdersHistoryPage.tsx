import { Card, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'

const data = [
  {
    key: '1',
    id: 'FS-2045',
    date: 'Mar 12, 2024',
    total: '$42.90',
    status: 'Delivered',
  },
  {
    key: '2',
    id: 'FS-2041',
    date: 'Mar 08, 2024',
    total: '$28.10',
    status: 'Out for delivery',
  },
]

const columns: ColumnsType<(typeof data)[number]> = [
  { title: 'Order ID', dataIndex: 'id', key: 'id' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Total', dataIndex: 'total', key: 'total' },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (value) => (
      <Tag color={value === 'Delivered' ? 'green' : 'blue'}>{value}</Tag>
    ),
  },
]

export const OrdersHistoryPage = () => {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12">
      <Card title="Orders" className="shadow-sm">
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>
    </div>
  )
}
