import { RecipeCardSkeleton } from '@/components/UI/RecipeCardSkeleton/recipe-card-skeleton'

export function RecipesSkeleton(): JSX.Element {
    return (
        <div className="mb-10 grid gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            <RecipeCardSkeleton />
            <RecipeCardSkeleton />
            <RecipeCardSkeleton />
            <RecipeCardSkeleton />
            <RecipeCardSkeleton />
            <RecipeCardSkeleton />
        </div>
    )
}
