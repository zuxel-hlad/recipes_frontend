import { cn } from '@/lib/utils'

import { type TagProps } from './tag.props'

export function Tag({ color = 'black', className, children, ...props }: TagProps): JSX.Element {
    return (
        <div
            className={cn('w-max rounded-xl bg-black px-2 py-[2px] text-sm text-white', className, {
                'bg-red-600': color === 'red',
            })}
            {...props}
        >
            {children}
        </div>
    )
}
