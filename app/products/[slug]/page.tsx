import React from 'react';

type Props = {
    params: {
        slug: string;
    }
}

export default function page({params}: Props) {
    return (
        <div>
            <h1>{params.slug} 제품상세페이지</h1>
        </div>
    );
}

