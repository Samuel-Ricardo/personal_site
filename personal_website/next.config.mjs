/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'cdn.sanity.io',
      'th.bing.com',
      'img.freepik.com',
      'webimages.mongodb.com',
      'encrypted-tbn0.gstatic.com',
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
      'github.com',
      'img.icons8.com',
      'icons8.com.br',
    ],
  },
  sassOptions: {
    includePaths: ['styles'],
  },
};

export default nextConfig;
