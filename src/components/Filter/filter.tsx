'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { useQueryState } from 'nuqs'

import { Button } from '@/components/UI'
import { cn } from '@/lib/utils'

import { type FilterProps } from './filter.props'

export default function Filter({ tags = [], className, ...props }: FilterProps): JSX.Element {
    const [emblaRef] = useEmblaCarousel({ loop: false })
    const [tagQuery, setTagQuery] = useQueryState('tag')

    return (
        <div className={cn('embla no-scrollbar overflow-y-hidden', className)} ref={emblaRef} {...props}>
            <div className="embla__container flex items-start gap-2">
                <Button active={!tagQuery} className="shrink-0" onClick={() => setTagQuery(null)}>
                    All Recipes
                </Button>
                {tags.map((tag) => (
                    <Button active={tagQuery === tag} className={cn('shrink-0')} key={tag} onClick={() => setTagQuery(tag)}>
                        {tag}
                    </Button>
                ))}
            </div>
        </div>
    )
}
