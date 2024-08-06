import Filter from '@/components/Filter/filter'
import { getTags } from '@/lib/api'

import { type FilterBarProps } from './filter-bar.props'

export default async function FilterBar({ ...props }: FilterBarProps): Promise<JSX.Element> {
    const tags = await getTags()
    return <Filter tags={tags} {...props} />
}
