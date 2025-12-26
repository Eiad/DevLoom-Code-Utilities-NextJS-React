/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Tauri static export
  output: "export",

  // disable the Image Optimization feature during static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
