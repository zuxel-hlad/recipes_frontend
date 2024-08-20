'use client'

import { useQueryState } from 'nuqs'
import ReactPaginate from 'react-paginate'

import { cn } from '@/lib/utils'

import { type MyPaginationProps } from './pagination.props'

export function Pagination({ pageCount, initialPage = 0, className, ...props }: MyPaginationProps): JSX.Element {
    const [_, setPageQuery] = useQueryState('page', { shallow: false })

    const onPageChange = async ({ selected }: { selected: number }): Promise<void> => {
        await setPageQuery(String(selected + 1))
    }

    return (
        <ReactPaginate
            disableInitialCallback
            activeLinkClassName="flex items-center justify-center min-h-11 min-w-11 rounded-lg border border-gray-200 p-1 text-center"
            breakLabel=""
            className={cn('flex items-center gap-3', className)}
            initialPage={initialPage}
            marginPagesDisplayed={0}
            nextLabel={
                <button
                    className="rounded-lg border border-transparent p-[10px] transition hover:border-gray-200 disabled:bg-slate-200"
                    disabled={initialPage === pageCount}
                >{`Next >`}</button>
            }
            pageCount={pageCount}
            pageLinkClassName="flex items-center justify-center min-h-11 min-w-11 rounded-lg p-1 text-center"
            previousLabel={
                <button
                    className="rounded-lg border border-transparent p-[10px] transition hover:border-gray-200 disabled:bg-slate-200"
                    disabled={initialPage === 0}
                >{`< Previous`}</button>
            }
            onPageChange={onPageChange}
            {...props}
        />
    )
}
