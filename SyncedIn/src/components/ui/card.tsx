import type React from "react"
import "../../styles/components/card.css"

interface CardProps {
  className?: string
  children: React.ReactNode
}

export function Card({ className = "", children }: CardProps) {
  return <div className={`card ${className}`}>{children}</div>
}

interface CardHeaderProps {
  className?: string
  children: React.ReactNode
}

export function CardHeader({ className = "", children }: CardHeaderProps) {
  return <div className={`card-header ${className}`}>{children}</div>
}

interface CardTitleProps {
  className?: string
  children: React.ReactNode
}

export function CardTitle({ className = "", children }: CardTitleProps) {
  return <h3 className={`card-title ${className}`}>{children}</h3>
}

interface CardContentProps {
  className?: string
  children: React.ReactNode
}

export function CardContent({ className = "", children }: CardContentProps) {
  return <div className={`card-content ${className}`}>{children}</div>
}

interface CardFooterProps {
  className?: string
  children: React.ReactNode
}

export function CardFooter({ className = "", children }: CardFooterProps) {
  return <div className={`card-footer ${className}`}>{children}</div>
}

