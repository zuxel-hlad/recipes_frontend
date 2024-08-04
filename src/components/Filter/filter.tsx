import { cn } from '@/lib/utils'

import { type FilterProps } from './filter.props'

export default function Filter({ className, ...props }: FilterProps): JSX.Element {
    return (
        <div className={cn(className)} {...props}>
            Filter
        </div>
    )
}
