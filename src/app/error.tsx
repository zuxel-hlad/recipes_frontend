'use client'
import { Button } from '@/components/UI'

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }): JSX.Element {
    return (
        <div className="container flex h-screen flex-col items-center justify-center py-20">
            <h1 className="mb-5 text-center text-4xl font-bold">Something went wrong!</h1>
            <p className="mb-10 text-center text-lg">Please, try again</p>
            <Button
                onClick={() => {
                    reset()
                }}
            >
                Try again
            </Button>
        </div>
    )
}
