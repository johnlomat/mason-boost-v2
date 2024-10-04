/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wordpress.gomasonboost.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

export default nextConfig
