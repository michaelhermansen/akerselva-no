/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    images: { allowFutureImage: true },
  },
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
