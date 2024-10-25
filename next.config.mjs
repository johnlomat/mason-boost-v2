/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'masonboost.headlesspress.xyz',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

export default nextConfig
