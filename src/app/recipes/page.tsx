import { Suspense } from 'react'

import FilterBar from '@/components/FilterBar/filter-bar'
import RecipesList from '@/components/RecipesList/recipes-list'
import { RecipesSkeleton, FilterBarSkeleton } from '@/components/UI'

interface SearchParams {
    page?: number
    tag?: string
}

export default function RecipesPage({ searchParams }: { searchParams: SearchParams }): JSX.Element {
    const pageQuery = 'page' in searchParams ? Number(searchParams.page) : 1
    const tagQuery = 'tag' in searchParams ? searchParams.tag : null

    return (
        <div className="container py-20">
            <h1 className="mb-5 text-center text-4xl font-bold">Increasio Recipes</h1>
            <p className="mb-10 text-center text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vitae!</p>

            <Suspense fallback={<FilterBarSkeleton />}>
                <FilterBar className="mb-12" />
            </Suspense>
            <Suspense fallback={<RecipesSkeleton />}>
                <RecipesList className="mb-10" page={pageQuery} tag={tagQuery} />
            </Suspense>
        </div>
    )
}
