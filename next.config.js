/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: process.env.BASE_URL
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.statically.io',
            port: '',
            pathname: '/gh/bilalsohailmirza/participant-portal-frontend/**',
          },
        ],
      },
      
};
module.exports = nextConfig;
