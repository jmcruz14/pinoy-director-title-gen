/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose' // find more stable method of importing esm functions
  }
};

export default nextConfig;
