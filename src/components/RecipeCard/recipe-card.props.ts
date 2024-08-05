import { type DetailedHTMLProps, type HtmlHTMLAttributes } from 'react'

import { type Recipe } from '@/types'

export interface RecipeCardProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    recipe: Recipe
    isLoading?:boolean
}
