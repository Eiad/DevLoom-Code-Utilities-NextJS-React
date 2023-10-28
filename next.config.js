/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // disable the Image Optimization feature during static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
