import { Badge, Button, Drawer } from 'antd'
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { CartDrawer } from '../cart/CartDrawer'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const cartCount = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  )

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-semibold text-emerald-700">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold">
            Freshly
          </span>
          Grocery
        </NavLink>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <NavLink to="/shop" className="hover:text-emerald-600">
            Shop
          </NavLink>
          <NavLink to="/orders" className="hover:text-emerald-600">
            Orders
          </NavLink>
          <NavLink to="/tracking" className="hover:text-emerald-600">
            Track Delivery
          </NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Button shape="circle" icon={<UserOutlined />} />
          <Badge count={cartCount} size="small">
            <Button
              shape="circle"
              icon={<ShoppingCartOutlined />}
              onClick={() => setOpen(true)}
            />
          </Badge>
        </div>
      </div>
      <Drawer
        title="Your Cart"
        placement="right"
        width={360}
        onClose={() => setOpen(false)}
        open={open}
      >
        <CartDrawer onCheckout={() => setOpen(false)} />
      </Drawer>
    </header>
  )
}
