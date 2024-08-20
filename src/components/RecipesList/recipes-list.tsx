import RecipeCard from '@/components/RecipeCard/recipe-card'
import { Pagination } from '@/components/UI'
import { PAGE_SIZE } from '@/constants'
import { getRecipes } from '@/lib/api'
import { cn } from '@/lib/utils'

import { type RecipesListProps } from './recipes-list.props'

export default async function RecipesList({ tag, page = 1, className, ...props }: RecipesListProps): Promise<JSX.Element> {
    const { recipes, total } = await getRecipes({ page, tag })

    const totalPages = Math.ceil(total / PAGE_SIZE)

    const renderedRecipes = recipes.flatMap((r) => r)

    return (
        <>
            <div
                className={cn('grid gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3', className, {
                    block: !recipes.length,
                })}
                {...props}
            >
                {renderedRecipes.map((recipe) => (
                    <RecipeCard className="min-h-[565px]" key={recipe.id} recipe={recipe} tabIndex={0} />
                ))}
                {!renderedRecipes.length ? <span className="block text-center">No Recipes Founded.</span> : null}
            </div>
            <Pagination className="mx-auto w-max" forcePage={page - 1} initialPage={page - 1} pageCount={totalPages} pageRangeDisplayed={3} />
        </>
    )
}
