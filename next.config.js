/** @type {import('next').NextConfig} */
const path = require("path");
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "**.github.com" },
    ],
  },
};

module.exports = withSentryConfig(nextConfig, {
  org: "raj",
  project: "portfolio-nextjs",
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: false,
});
