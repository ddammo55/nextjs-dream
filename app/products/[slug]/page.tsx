
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
    params: {
        slug: string;
    }
}

export default function page({params}: Props) {
    if(params.slug === 'nothing') {
        notFound();
        return null
    }
    return (
        <div>
            <h1>{params.slug} 제품상세페이지</h1>
        </div>
    );
}

export function generateStaticParams() {
    const products = ['pants', 'skirts'];
    return products.map((product) => ({
        slug: product,
    }));
}

