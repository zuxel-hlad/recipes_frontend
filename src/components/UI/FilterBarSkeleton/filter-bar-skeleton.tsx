import { Skeleton } from '../Skeleton/skeleton'

export function FilterBarSkeleton(): JSX.Element {
    return (
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
    )
}
