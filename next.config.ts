import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Necessário para exportação estática no Next.js
  },
};

export default nextConfig;
