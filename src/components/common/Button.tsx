import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) => (
  <button
    className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
      variant === 'primary'
        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
        : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
    } ${className}`}
    {...props}
  />
)
