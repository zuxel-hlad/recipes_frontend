'use client'
import { useQueryState } from 'nuqs'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

import { cn } from '@/lib/utils'

import { type MyPaginationProps } from './pagination.props'

export function Pagination({ pageCount, initialPage, className, ...props }: MyPaginationProps): JSX.Element {
    const [pageQuery, setPageQuery] = useQueryState('page')
    const [page, setPage] = useState<number>(1)

    const onPageChange = async ({ selected }: { selected: number }): Promise<void> => {
        await setPageQuery(String(selected + 1))
        setPage(selected + 1)
    }

    const initialQueryPage = pageQuery ? Number(pageQuery) : 1

    const currentInitialPage = initialPage ? initialPage : initialQueryPage

    return (
        <ReactPaginate
            activeLinkClassName="flex items-center justify-center min-h-11 min-w-11 rounded-lg border border-gray-200 p-1 text-center"
            breakLabel=""
            className={cn('flex items-center gap-5', className)}
            initialPage={currentInitialPage - 1}
            marginPagesDisplayed={0}
            nextLabel={
                <button
                    className="rounded-lg border border-transparent p-[10px] transition hover:border-gray-200 disabled:bg-slate-200"
                    disabled={page === pageCount}
                >{`Next >`}</button>
            }
            pageClassName="p-0"
            pageCount={pageCount}
            previousLabel={
                <button
                    className="rounded-lg border border-transparent p-[10px] transition hover:border-gray-200 disabled:bg-slate-200"
                    disabled={page === 1}
                >{`< Previous`}</button>
            }
            onPageChange={onPageChange}
            {...props}
        />
    )
}
