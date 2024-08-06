import { cn } from '@/lib/utils'

import './skeleton.css'
import { type SkeletonProps } from './skeleton.props'

export function Skeleton({ className, ...props }: SkeletonProps): JSX.Element {
    return <div className={cn('skeleton', className)} {...props} />
}
