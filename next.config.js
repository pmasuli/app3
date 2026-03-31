const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    // loadPaths: Turbopack/new Sass API; includePaths: Webpack/legacy Sass API
    loadPaths: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'node_modules/bootstrap/scss'),
    ],
    includePaths: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'node_modules/bootstrap/scss'),
    ],
  },
}

module.exports = nextConfig
