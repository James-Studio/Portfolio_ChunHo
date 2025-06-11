/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

// next.config.js
module.exports = {
  eslint: {
    // Warning: allows production builds to succeed even with ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig
