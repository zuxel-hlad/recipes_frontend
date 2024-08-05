import { type DetailedHTMLProps, type HtmlHTMLAttributes } from 'react'

import { type Recipe } from '@/types'

export interface RecipesListProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    recipes: Recipe[]
}
