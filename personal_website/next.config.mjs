/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'th.bing.com',
      'img.freepik.com',
      'camo.githubusercontent.com',
      'miro.medium.com',
      'vitejs.dev',
      'ik.imagekit.io',
      'areadev.com.br',
      'refine-web.imgix.net',
      'blog.appsignal.com',
      'intuji.com',
      'beecrowd.io',
      'images.ctfassets.net',
      'cdn-icons-png.flaticon.com',
      'images.pexels.com',
    ],
  },
  sassOptions: {
    includePaths: ['styles'],
  },
};

export default nextConfig;
