/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['ja-JP'],
    defaultLocale: 'ja-JP'
  }
}

module.exports = nextConfig
