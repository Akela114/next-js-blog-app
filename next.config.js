/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
