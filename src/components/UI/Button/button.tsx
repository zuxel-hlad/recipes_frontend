import { cn } from '@/lib/utils'

import ArrowIcon from './arrow-right.svg'
import { type ButtonProps } from './button.props'

export function Button({ arrow = false, className, children, ...props }: ButtonProps): JSX.Element {
    return (
        <button
            className={cn('rounded-lg border border-gray-200 px-3 py-2 text-center text-base font-medium transition hover:bg-black hover:text-white', className, {
                'relative pr-11': arrow,
            })}
            {...props}
        >
            {children}
            {arrow ? <ArrowIcon className="absolute right-4 top-1/2 -translate-y-1/2" /> : null}
        </button>
    )
}

export default Button
