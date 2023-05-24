import { NextRequest, NextResponse } from "next/server";

 export function middleware(request: NextRequest) {
    console.log('미들웨어가 실행되고 있음! 체크중!');

    // 만약 리퀘스트 패스네임이 특별한 경로로 시작한다면 
    // 그 경로에 대해서 리턴을 해줄껀데 /products 리다이렉트 해줘

    if(request.nextUrl.pathname.startsWith('/products/1004')) {
         return NextResponse.redirect(new URL('/products', request.url));
    }
 }

 //특정한 경로에서 설정이 되도록
 export const config = {
   matcher : [
      '/products/:path*'
   ]
 }