import { type DetailedHTMLProps, type HtmlHTMLAttributes } from 'react'

export interface RecipesListProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    page?: number
    tag?: string | null
}
