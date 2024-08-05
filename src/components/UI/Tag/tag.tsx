import { cn } from '@/lib/utils'

import { type TagProps } from './tag.props'

export function Tag({ color = 'black', className, children, ...props }: TagProps): JSX.Element {
    return (
        <span
            className={cn('block w-max rounded-xl bg-black px-2 py-[2px] text-sm font-light text-white', className, {
                'bg-red-600': color === 'red',
            })}
            {...props}
        >
            {children}
        </span>
    )
}
