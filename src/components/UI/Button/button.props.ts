import { type DetailedHTMLProps, type ReactNode, type ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode
    arrow?: boolean
}
