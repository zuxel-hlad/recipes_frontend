import { notFound } from 'next/navigation'

import Filter from '@/components/Filter/filter'
import RecipesList from '@/components/RecipesList/recipes-list'
import { Pagination } from '@/components/UI'
import { PAGE_SIZE } from '@/constants'
import { getRecipes, getTags } from '@/lib/api'

interface SearchParams {
    page?: number
    tag?: string
}

export default async function RecipesPage({ searchParams }: { searchParams: SearchParams }): Promise<JSX.Element> {
    try {
        const pageQuery = 'page' in searchParams ? Number(searchParams.page) : 1
        const tagQuery = 'tag' in searchParams ? searchParams.tag : null

        const cuisineTags = await getTags()
        const { recipes, total } = await getRecipes({ page: pageQuery, tag: tagQuery })

        const totalPages = Math.ceil(total / PAGE_SIZE)

        return (
            <div className="container py-20">
                <h1 className="mb-5 text-center text-4xl font-bold">Increasio Recipes</h1>
                <p className="mb-10 text-center text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vitae!</p>
                {cuisineTags.length ? <Filter className="mb-12" tags={cuisineTags} /> : null}
                <RecipesList className="mb-10" recipes={recipes.flatMap((r) => r)} />
                <Pagination className="mx-auto w-max" pageCount={totalPages} pageRangeDisplayed={3} />
            </div>
        )
    } catch {
        notFound()
    }
}
