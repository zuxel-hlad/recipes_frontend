import Filter from '@/components/Filter/filter'
import RecipesList from '@/components/RecipesList/recipes-list'
import { Pagination } from '@/components/UI'

export default function RecipesPage(): JSX.Element {
    return (
        <div className="container py-20">
            <h1 className="mb-5 text-center text-4xl font-bold">Increasio Recipes</h1>
            <p className="mb-10 text-center text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vitae!</p>
            <Filter className="mb-12" />
            <RecipesList className="mb-10" />
            <Pagination className="mx-auto w-max" initialPage={3} pageCount={12} pageRangeDisplayed={3} />
        </div>
    )
}
