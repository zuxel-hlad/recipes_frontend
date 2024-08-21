'use client'

import { useQueryState } from 'nuqs'
import ReactPaginate from 'react-paginate'

import { Button } from '@/components/UI'
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
            className={cn('flex items-center justify-center gap-2 sm:gap-3', className)}
            initialPage={initialPage}
            marginPagesDisplayed={0}
            nextLabel={
                <Button className="flex items-center border-transparent" disabled={initialPage === pageCount}>
                    <span className="hidden md:block">Next</span>
                    <svg className="size-5 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            clipRule="evenodd"
                            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                            fillRule="evenodd"
                        />
                    </svg>
                </Button>
            }
            pageCount={pageCount}
            pageLinkClassName="flex items-center justify-center min-h-11 min-w-11 rounded-lg p-1 text-center active:bg-black active:text-white lg:hover:bg-black lg:hover:text-white transition"
            previousLabel={
                <Button className="flex items-center border-transparent" disabled={initialPage === 0}>
                    <svg className="size-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            clipRule="evenodd"
                            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                            fillRule="evenodd"
                        />
                    </svg>
                    <span className="hidden md:block">Previous</span>
                </Button>
            }
            onPageChange={onPageChange}
            {...props}
        />
    )
}
