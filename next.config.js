/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir : true,
    },
    images : {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    async redirects() {
        //리다이렉트하고자하는 배열을 리턴해주면 됨
        return [
            {
                source: '/products/deleted_forever',
                destination: '/products',
                permanent: true, //영원히
            },
            {
                source: '/products/deleted_temp',
                destination: '/products',
                permanent: false,  //일시적
            }
        ]
    },

    async rewrites(){
        return [
            {
                source: '/ps',
                destination: '/about/me/choi',
            }
        ]
    
    },
}

module.exports = nextConfig
