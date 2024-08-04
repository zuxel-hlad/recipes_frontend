import RecipeCard from '@/components/RecipeCard/recipe-rard'
import { cn } from '@/lib/utils'

import { type RecipesListProps } from './recipes-list.props'

export default function RecipesList({ className, ...props }: RecipesListProps): JSX.Element {
    return (
        <div className={cn('grid grid-cols-3 gap-4', className)} {...props}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => (
                <RecipeCard key={card} />
            ))}
        </div>
    )
}
