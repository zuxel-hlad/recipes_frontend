'use client'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

import { cn } from '@/lib/utils'

import { type MyPaginationProps } from './pagination.props'

export function Pagination({ className, ...props }: MyPaginationProps): JSX.Element {
    const [page, setPage] = useState<number>(1)
    return (
        <>
            <ReactPaginate
                activeLinkClassName="flex items-center justify-center min-h-11 min-w-11 rounded-lg border border-gray-200 p-1 text-center"
                breakLabel=""
                className={cn('flex items-center gap-5', className)}
                marginPagesDisplayed={0}
                nextLabel={<button className="rounded-lg border border-transparent p-[10px] transition hover:border-gray-200">{`Next >`}</button>}
                pageClassName="p-0"
                previousLabel={<button className="rounded-lg border border-transparent p-[10px] transition hover:border-gray-200">{`< Previous`}</button>}
                onPageChange={({ selected }) => {
                    setPage(selected + 1)
                }}
                {...props}
            />
            <span>{page}</span>
        </>
    )
}
