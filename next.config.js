/** @type {import('next').NextConfig} */
const nextConfig = {
  // output Needs to be enabled for electron
  //output: "export",

  // disable the Image Optimization feature during static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
