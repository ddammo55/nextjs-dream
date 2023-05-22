import '@/style'
import Link from 'next/link'


export const metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 제품을 확인해 보세요',

}


export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<>
    <nav className='flex gap-4'>
        <Link href="/products/women" className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">여성옷</Link>
        <Link href="/products/men" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>남성옷</Link>
    </nav>
        <section>
            {children}
        </section>
</>
  )
}
