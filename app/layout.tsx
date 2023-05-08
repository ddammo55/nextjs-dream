import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='flex justify-between align-items:center p-8 border-b-orange-400'>
            <h1>Demo Note</h1>
            <nav className='flex justify-between items-center gap-10'>
                <Link href="/products">Products</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About</Link>
                
            </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
