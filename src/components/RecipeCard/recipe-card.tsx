'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useQueryState } from 'nuqs'

import { Tag, Button } from '@/components/UI'
import { MAX_TAGS } from '@/constants'
import { cn } from '@/lib/utils'
import { Difficulty } from '@/types'

import { type RecipeCardProps } from './recipe-card.props'

export default function RecipeCard({ recipe, className, ...props }: RecipeCardProps): JSX.Element {
    const { reviewCount, image, tags, name, ingredients, difficulty, cuisine, id } = recipe
    const [_, setTagQuery] = useQueryState('tag')
    const router = useRouter()

    return (
        <div className={cn('relative flex flex-col rounded-xl border border-gray-50 p-5 shadow-md', className)} {...props}>
            {reviewCount >= 80 && (
                <Tag className="absolute left-0 top-[-12px]" color="red">
                    Most Popular
                </Tag>
            )}
            <div className="mb-5 flex h-56 items-center overflow-hidden rounded-xl">
                <Image
                    alt={name}
                    height={0}
                    sizes="100vw"
                    src={image}
                    style={{
                        width: '100%',
                        maxWidth: '100%',
                        height: 'auto',
                    }}
                    width={0}
                />
            </div>
            {tags.length ? (
                <div className="mb-5 flex flex-wrap items-start gap-1">
                    {tags.length > MAX_TAGS ? (
                        <>
                            {tags.slice(0, MAX_TAGS).map((tag) => (
                                <Tag className="cursor-pointer" key={tag} tabIndex={0} onClick={() => setTagQuery(tag)}>
                                    {tag}
                                </Tag>
                            ))}
                            <Tag className="cursor-pointer">+{tags.slice(3).length} more</Tag>
                        </>
                    ) : (
                        tags.map((tag) => (
                            <Tag className="cursor-pointer" key={tag} tabIndex={0} onClick={() => setTagQuery(tag)}>
                                {tag}
                            </Tag>
                        ))
                    )}
                </div>
            ) : null}
            <h4 className="text-lg font-medium">{name}</h4>
            {ingredients.length ? <div className="mb-4 line-clamp-2 text-sm font-light text-gray-500">{ingredients.join(', ')}</div> : null}

            <span className="block text-xs font-light text-gray-500">
                Difficulty:&nbsp;
                <span
                    className={cn('font-normal text-yellow-500', {
                        'text-blue-500': difficulty === Difficulty.Easy,
                        'text-yellow-500': difficulty === Difficulty.Medium,
                        'text-red-500': difficulty === Difficulty.Hard,
                    })}
                >
                    {difficulty}
                </span>
            </span>

            <span className="mb-4 block grow text-xs font-light text-gray-500">Cuisine:&nbsp;{cuisine}</span>
            <Button
                arrow
                className="w-full"
                onClick={() => {
                    router.push(`/recipe/${String(id)}`)
                }}
            >
                View Recipe
            </Button>
        </div>
    )
}
