/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["no"],
    defaultLocale: "no",
  },
  experimental: {
    newNextLinkBehavior: true,
    images: { allowFutureImage: true },
    nextScriptWorkers: true,
  },
};

module.exports = nextConfig;
