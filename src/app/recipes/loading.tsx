import RecipeCardSkeleton from '@/components/RecipeCard/recipe-card-skeleton'
import { Skeleton } from '@/components/UI'

export default function Loading(): JSX.Element {
    return (
        <div className="container py-20">
            <div className="mx-auto mb-6 h-10 w-1/2">
                <Skeleton />
            </div>
            <div className="mx-auto mb-10 h-4 w-10/12">
                <Skeleton />
            </div>
            <div className="mb-10 flex h-10 w-full gap-2">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
            <div className="mb-10 grid gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
                <RecipeCardSkeleton />
                <RecipeCardSkeleton />
                <RecipeCardSkeleton />
                <RecipeCardSkeleton />
                <RecipeCardSkeleton />
                <RecipeCardSkeleton />
            </div>
        </div>
    )
}
