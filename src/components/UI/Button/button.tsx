import { cn } from '@/lib/utils'

import { type ButtonProps } from './button.props'

export function Button({ active = false, className, children, ...props }: ButtonProps): JSX.Element {
    return (
        <button
            className={cn(
                'rounded-lg border border-gray-200 px-3 py-2 text-center text-base font-medium transition active:bg-black active:text-white lg:hover:bg-black lg:hover:text-white',
                className,
                {
                    'bg-black text-white': active,
                },
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
