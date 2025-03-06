import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Gambling',
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;
