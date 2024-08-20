/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  output: "export",
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    config.resolve.alias["@/assets"] = path.resolve(__dirname, "public/assets");
    return config;
  },
};

module.exports = nextConfig;
