import { NextApiRequest, NextApiResponse } from 'next';
import React from 'react';

type  Data = {
    name: string
}


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ name: 'John Doe' });
}

