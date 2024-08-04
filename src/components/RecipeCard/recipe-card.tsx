import Image from 'next/image'

import { Tag, Button } from '@/components/UI'
import { cn } from '@/lib/utils'

import { type RecipeCardProps } from './recipe-card.props'

export default function RecipeCard({ className, ...props }: RecipeCardProps): JSX.Element {
    return (
        <div className={cn('relative flex flex-col rounded-xl border border-gray-50 p-5 shadow-md', className)} {...props}>
            <Tag className="absolute left-0 top-[-12px]" color="red">
                Most Popular
            </Tag>
            <div className="mb-5 flex h-56 items-center overflow-hidden rounded-xl">
                <Image
                    alt="gg"
                    height={0}
                    sizes="100vw"
                    src="https://cdn.dummyjson.com/recipe-images/1.webp"
                    style={{
                        width: '100%',
                        maxWidth: '100%',
                        height: 'auto',
                    }}
                    width={0}
                />
            </div>
            <div className="mb-5 flex flex-wrap items-start gap-1">
                <Tag className="cursor-pointer" tabIndex={0}>
                    Biriyani
                </Tag>
                <Tag className="cursor-pointer" tabIndex={0}>
                    Chicken
                </Tag>
                <Tag className="cursor-pointer" tabIndex={0}>
                    Main course
                </Tag>
                <Tag className="cursor-pointer" tabIndex={0}>
                    Indian
                </Tag>
                <Tag className="cursor-pointer" tabIndex={0}>
                    +2 More
                </Tag>
            </div>
            <h4 className="text-lg font-medium">Lorem, ipsum.</h4>
            <p className="mb-4 line-clamp-2 text-sm font-light text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptatibus, mollitia magnam iure voluptas incidunt tempora qui. Ducimus, voluptatibus
                voluptatem?
            </p>
            <span className="block text-xs font-light text-gray-500">
                Difficulty:&nbsp;<span className="font-normal text-yellow-500">Medium</span>
            </span>

            <span className="mb-4 block grow text-xs font-light text-gray-500">Cuisine:&nbsp;Pakistani</span>
            <Button arrow className="w-full">
                View Recipe
            </Button>
        </div>
    )
}
