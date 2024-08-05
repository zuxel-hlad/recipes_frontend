'use client'
import { useState, useEffect } from 'react'

import Filter from '@/components/Filter/filter'
import RecipesList from '@/components/RecipesList/recipes-list'
import { Pagination } from '@/components/UI'
import { PAGE_SIZE } from '@/constants'

import { type RecipesScreenProps } from './recipes-screen.props'

export default function RecipesScreen({ tags, recipes }: RecipesScreenProps): JSX.Element {
    const [recipeTags, setRecipeTags] = useState<RecipesScreenProps['tags'] | null>(tags)
    const [recipesArray, setRecipesArray] = useState<RecipesScreenProps['recipes'] | null>(recipes)

    return (
        <div className="container py-20">
            <h1 className="mb-5 text-center text-4xl font-bold">Increasio Recipes</h1>
            <p className="mb-10 text-center text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vitae!</p>
            {recipeTags && recipeTags.length ? <Filter className="mb-12" tags={recipeTags} /> : null}

            <RecipesList className="mb-10" recipes={recipesArray ? recipesArray : null} />
            <Pagination className="mx-auto w-max" initialPage={0} pageCount={PAGE_SIZE} pageRangeDisplayed={3} />
        </div>
    )
}
