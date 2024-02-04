/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'th.bing.com',
      'img.freepik.com',
      'camo.githubusercontent.com',
      'miro.medium.com',
    ],
  },
  sassOptions: {
    includePaths: ['styles'],
  },
};

export default nextConfig;
