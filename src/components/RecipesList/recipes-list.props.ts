import { type DetailedHTMLProps, type HtmlHTMLAttributes } from 'react'

import { type Recipe, type ApiResponse } from '@/types'

export interface RecipesListProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    recipes: ApiResponse<Recipe>['recipes'][]
}
