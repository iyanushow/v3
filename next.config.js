/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_RESUME_LINK: "1Y5ttDgKB_Q3NVjPe5lzKZxYOrP7nEX5v",
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
});
