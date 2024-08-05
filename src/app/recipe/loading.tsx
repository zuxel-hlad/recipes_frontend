import { Skeleton } from '@/components/UI'

export default function Loading(): JSX.Element {
    return (
        <div className="container py-20">
            <div className="mx-auto mb-12 h-10 w-1/2">
                <Skeleton />
            </div>
            <div className="mx-auto mb-3 h-4 w-10/12">
                <Skeleton />
            </div>
            <div className="mx-auto mb-3 h-4 w-10/12">
                <Skeleton />
            </div>
            <div className="mx-auto mb-3 h-4 w-10/12">
                <Skeleton />
            </div>
            <div className="mx-auto mb-3 h-4 w-10/12">
                <Skeleton />
            </div>
            <div className="mx-auto mb-3 h-4 w-10/12">
                <Skeleton />
            </div>
            <div className="mx-auto mb-3 h-4 w-10/12">
                <Skeleton />
            </div>
        </div>
    )
}
