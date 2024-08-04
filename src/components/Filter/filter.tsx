'use client'
import useEmblaCarousel from 'embla-carousel-react'

import { Button } from '@/components/UI'
import { cn } from '@/lib/utils'

import './filter.css'
import { type FilterProps } from './filter.props'

const cuisines = [
    'Italian',
    'French',
    'Chinese',
    'Japanese',
    'Mexican',
    'Indian',
    'Thai',
    'Greek',
    'Spanish',
    'Korean',
    'Vietnamese',
    'Lebanese',
    'Turkish',
    'Moroccan',
    'Brazilian',
    'Ethiopian',
    'German',
    'American',
    'Russian',
    'Caribbean',
]

export default function Filter({ className, ...props }: FilterProps): JSX.Element {
    const [emblaRef] = useEmblaCarousel({ loop: false })
    return (
        <div className={cn('embla no-scrollbar overflow-y-hidden', className)} ref={emblaRef} {...props}>
            <div className="embla__container flex gap-2">
                <Button className="shrink-0">All Recipes</Button>
                {cuisines.map((cuisine) => (
                    <Button key={cuisine}>{cuisine}</Button>
                ))}
            </div>
        </div>
    )
}
