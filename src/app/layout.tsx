import { Noto_Sans } from 'next/font/google'

import type { Metadata } from 'next'

import './globals.css'

const font = Noto_Sans({
    subsets: ['latin'],
    style: 'normal',
    weight: ['300', '400', '500', '700'],
    display: 'swap',
    variable: '--font-family',
})

export const metadata: Metadata = {
    title: 'Increasio - Test project',
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
    return (
        <html lang="en">
            <body className={font.className}>{children}</body>
        </html>
    )
}
