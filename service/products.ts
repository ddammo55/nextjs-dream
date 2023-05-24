import path from "path";
import {promises as fs} from 'fs';

export type Product = {
    id: string;
    name: string;
    price: number;
    image : string;
};

// 비동기로 데이터 가져오기
export async function getProducts() : Promise<Product[]> {
    //파일가져오기
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    //데이터가져오기
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

export async function getProduct(id: string) : Promise<Product | undefined> {
    const products = await getProducts();
    return products.find((item) => item.id === id);
}