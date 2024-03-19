/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose', // find more stable method of importing esm functions
    optimizePackageImports: ["@headlessui/react"]
  }
};

export default nextConfig;
