import { notFound } from 'next/navigation'

import Filter from '@/components/Filter/filter'
import RecipesList from '@/components/RecipesList/recipes-list'
import { Pagination } from '@/components/UI'
import { PAGE_SIZE } from '@/constants'
import { getRecipes, getTags } from '@/lib/api'

export default async function RecipesPage({ params }: { page?: string; tag?: string }): Promise<JSX.Element> {
    const pageQuery = 'page' in params ? Number(params?.page) : 1
    const tagQuery = 'tag' in params ? params.tag : null
    const recipes = await getRecipes({ page: pageQuery, tag: tagQuery })
    const cuisineTags = await getTags()

    if ('recipes' in recipes) {
        return (
            <div className="container py-20">
                <h1 className="mb-5 text-center text-4xl font-bold">Increasio Recipes</h1>
                <p className="mb-10 text-center text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vitae!</p>
                {cuisineTags.length ? <Filter className="mb-12" tags={cuisineTags} /> : null}

                <RecipesList className="mb-10" recipes={recipes.recipes} />
                <Pagination className="mx-auto w-max" pageCount={PAGE_SIZE} pageRangeDisplayed={3} />
            </div>
        )
    }
    notFound()
}
