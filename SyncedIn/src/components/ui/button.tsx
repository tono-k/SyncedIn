import type React from "react"
import "../../styles/components/button.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "amber"
  size?: "default" | "sm" | "icon"
  className?: string
  children: React.ReactNode
}

export function Button({ variant = "primary", size = "default", className = "", children, ...props }: ButtonProps) {
  const baseClass = "button"
  const variantClass = `button-${variant}`
  const sizeClass = size !== "default" ? `button-${size}` : ""

  const buttonClass = [baseClass, variantClass, sizeClass, className].filter(Boolean).join(" ")

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}
