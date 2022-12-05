/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  assetPrefix: isProd ? '/aboutme/' : '',
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
