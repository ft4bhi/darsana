/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during the build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during the build
  },
  experimental: {
    forceSwcTransforms: true, // Optional: You can include this if you need it
    staticPageGenerationTimeout: 120, // Increase timeout to 120 seconds
  },
  future: {
    webpack5: true,
  },
  // Other Next.js configurations can go here if needed
};

export default nextConfig;
