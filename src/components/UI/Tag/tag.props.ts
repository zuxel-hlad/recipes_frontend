import { type DetailedHTMLProps, type HtmlHTMLAttributes, type ReactNode } from 'react'

export interface TagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
    color?: 'black' | 'red'
}
