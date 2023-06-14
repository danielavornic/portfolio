/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placekitten.com"],
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
