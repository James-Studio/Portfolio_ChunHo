/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    // Warning: allows production builds to succeed even with ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
