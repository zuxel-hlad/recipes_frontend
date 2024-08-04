import RecipeCard from '@/components/RecipeCard/recipe-card'
import { cn } from '@/lib/utils'

import { type RecipesListProps } from './recipes-list.props'

export default function RecipesList({ className, ...props }: RecipesListProps): JSX.Element {
    return (
        <div className={cn('grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3', className)} {...props}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => (
                <RecipeCard className="min-h-[565px]" key={card} tabIndex={0} />
            ))}
        </div>
    )
}
