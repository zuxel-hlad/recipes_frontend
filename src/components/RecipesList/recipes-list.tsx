'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useQueryState } from 'nuqs'
import { useEffect, useTransition } from 'react'

import RecipeCard from '@/components/RecipeCard/recipe-card'
import { cn } from '@/lib/utils'

import { type RecipesListProps } from './recipes-list.props'

export default function RecipesList({ recipes = [], className, ...props }: RecipesListProps): JSX.Element {
    const [isPending, startTransition] = useTransition()
    const [tag] = useQueryState('tag')
    const [page] = useQueryState('page')
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        startTransition(() => {
            setTimeout(() => {
                router.replace(`${pathname}?${page ? `page=${page}` : ''}${tag ? `&tag=${tag}` : ''}`, { scroll: false })
            }, 0)
        })
    }, [page, pathname, router, tag])
    return (
        <div
            className={cn('grid gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3', className, {
                block: !recipes.length,
            })}
            {...props}
        >
            {recipes.length ? (
                recipes.map((recipe) => <RecipeCard className="min-h-[565px]" isLoading={isPending} key={recipe.id} recipe={recipe} tabIndex={0} />)
            ) : (
                <span className="block text-center">No Recipes Founded.</span>
            )}
        </div>
    )
}
