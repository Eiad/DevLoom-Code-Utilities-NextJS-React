/** @type {import('next').NextConfig} */
const nextConfig = {
  // output Needs to be enabled for electron's apps build to use out folder for static "Offline" apps
  //output: "export",

  // disable the Image Optimization feature during static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
