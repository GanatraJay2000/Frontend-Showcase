/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'static.nike.com',
      },
    ],
  },
};

export default nextConfig;
