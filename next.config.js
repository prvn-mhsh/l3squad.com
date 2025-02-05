/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '', // Set a subdirectory if needed (e.g., '/myapp')
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
