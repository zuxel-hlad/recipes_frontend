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
    const [, setTagQuery] = useQueryState('tag', { shallow: false })
    const [, setPageQuery] = useQueryState('page', { shallow: false })
    const { reviewCount, image, tags, name, ingredients, difficulty, cuisine, id } = recipe

    const router = useRouter()

    const onTagSelected = async (tag: string): Promise<void> => {
        await setPageQuery('1')
        await setTagQuery(tag)
    }

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
                                <Tag className="cursor-pointer" key={tag} tabIndex={0} onClick={() => onTagSelected(tag)}>
                                    {tag}
                                </Tag>
                            ))}
                            <Tag>+{tags.slice(3).length} more</Tag>
                        </>
                    ) : (
                        tags.map((tag) => (
                            <Tag className="cursor-pointer" key={tag} tabIndex={0} onClick={() => onTagSelected(tag)}>
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
                className="relative w-full pr-9"
                onClick={() => {
                    router.push(`/recipe/${String(id)}`)
                }}
            >
                <span className="font-normal">View Recipe</span>
                <svg className="absolute right-3 top-1/2 size-5 -translate-y-1/2 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        clipRule="evenodd"
                        d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                        fillRule="evenodd"
                    />
                </svg>
            </Button>
        </div>
    )
}
