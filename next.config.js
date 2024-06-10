// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
            },
        ],
    },
}

export default nextConfig