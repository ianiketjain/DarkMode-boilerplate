/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
}

module.exports = {
  images: {
    domains: [],
  },
  ...nextConfig
}


