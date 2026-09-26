import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/garcia' : '',
  assetPrefix: isProd ? '/garcia/' : '',
  trailingSlash: true,
};

export default nextConfig;
