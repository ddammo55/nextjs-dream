
import GoProductsButton from '@/app/components/GoProductsButton';
import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import React from 'react';

export const revalidate = 3;

type Props = {
    params: {
        slug: string;
    }
}

export function generateMetadata({ params } : Props){
    return {
        title: `제품의 이름: ${params.slug}`
    }
}

export default async function ProductPage({params: {slug} } : Props) {
    const product = await getProduct(slug);

    if(!product) {
        redirect('/products');
        //notFound();
    }
    //전달받은 파람즈.슬러그를 가지고 올껀데
    // if(params.slug === 'nothing') {
    //     notFound();
    //     return null
    // }

    // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
    return (
        <div>
            <h1>{product.name} 제품상세페이지</h1>
            <Image
                src={`/images/${product.image}`}
                width={500}
                height={500}
                alt={product.name}
                />
            <GoProductsButton/>
        </div>
    );
}

export async function generateStaticParams() {
    // 모든 제품의 페이지를 미리 만들어 둘 수 있게 해줄거임(SSG)
    const products = await getProducts();
    return products.map((product) => ({
        slug: product.id, 
    }));
}

