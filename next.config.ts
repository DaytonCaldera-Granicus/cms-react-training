import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'i.annihil.us'
      },
      {
        protocol: 'https',
        hostname: 'comicvine.gamespot.com'
      }
    ],
  },
};

export default nextConfig;
