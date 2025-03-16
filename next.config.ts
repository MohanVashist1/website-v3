import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    GH_AUTH: process.env.GH_AUTH,
    GH_NAME: process.env.GH_NAME,
  },
};

export default nextConfig;
