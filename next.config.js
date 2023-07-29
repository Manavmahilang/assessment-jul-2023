/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "images.pexels.com",
      "preview.cruip.com",
      "encrypted-tbn0.gstatic.com",
      "www.kaochen.com",
      "justinsportsmedicineteam.com",
      "www.netmeds.com",
      "m.media-amazon.com",
      "5.imimg.com" 
    ],
  },
};

module.exports = nextConfig;
