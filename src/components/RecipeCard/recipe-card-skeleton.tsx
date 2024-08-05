import { Skeleton } from '@/components/UI'

export default function RecipeCardSkeleton(): JSX.Element {
    return (
        <div className="relative flex flex-col rounded-xl border border-gray-50 p-5 shadow-md">
            <div className="mb-5 flex h-56 items-center overflow-hidden rounded-xl">
                <Skeleton />
            </div>
            <div className="mb-5 flex h-6 items-start gap-3">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
            <div className="mb-4 line-clamp-2 h-7 w-1/2 text-sm font-light text-gray-500">
                <Skeleton />
            </div>
            <div className="flex flex-wrap gap-2">
                <div className="mb-4 line-clamp-2 h-4 w-32 text-sm font-light text-gray-500">
                    <Skeleton />
                </div>
                <div className="mb-4 line-clamp-2 h-4 w-32 text-sm font-light text-gray-500">
                    <Skeleton />
                </div>
                <div className="mb-4 line-clamp-2 h-4 w-32 text-sm font-light text-gray-500">
                    <Skeleton />
                </div>
                <div className="mb-4 line-clamp-2 h-4 w-32 text-sm font-light text-gray-500">
                    <Skeleton />
                </div>
                <div className="mb-4 line-clamp-2 h-4 w-32 text-sm font-light text-gray-500">
                    <Skeleton />
                </div>
            </div>

            <span className="mb-5 block h-4 w-40 text-xs font-light text-gray-500">
                <Skeleton />
            </span>

            <span className="mb-4 block h-4 w-40 grow text-xs font-light text-gray-500">
                <Skeleton />
            </span>
            <div className="h-10">
                <Skeleton />
            </div>
        </div>
    )
}
