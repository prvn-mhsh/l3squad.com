/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '', // Set a subdirectory if needed (e.g., '/myapp')
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
};
