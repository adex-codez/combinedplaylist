/** @type {import('next').NextConfig} */
const nextConfig = {};
import withBundleAnalyzer from "@next/bundle-analyzer";

const config =
  process.env.ANALYZE === "true" ? withBundleAnalyzer(nextConfig) : nextConfig;

export default config;
