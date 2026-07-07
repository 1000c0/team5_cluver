import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: "export",
  trailingSlash: true,
  outputFileTracingRoot: process.cwd()
};

export default nextConfig;
