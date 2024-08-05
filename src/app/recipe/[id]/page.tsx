import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getRecipe, getRecipes } from '@/lib/api'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    if ('id' in params) {
        const recipe = await getRecipe({ id: params.id })

        return {
            title: recipe?.name,
        }
    }
    return {
        title: 'Recipe Page',
        description: 'Page about recipe',
    }
}

export default async function RecipePage({ params }: { params: { id: string } }): Promise<JSX.Element> {
    if ('id' in params) {
        const recipe = await getRecipe({ id: params.id })
        if (recipe && 'id' in recipe) {
            return (
                <div className="container py-20">
                    <h1 className="mb-8 text-center text-2xl font-bold md:mb-12 md:text-4xl">{recipe.name}</h1>
                    <ul className="mx-auto max-w-screen-sm">
                        {recipe.instructions.map((instruction, idx) => [
                            <li className="whitespace-pre-line" key={instruction}>
                                <span className="font-bold">{idx + 1}.&nbsp;</span>
                                {instruction}
                            </li>,
                        ])}
                    </ul>
                </div>
            )
        }
        notFound()
    }
    notFound()
}
