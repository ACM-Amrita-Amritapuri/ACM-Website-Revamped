/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/students',
        destination: '/pages/students/index.html',
      },
    ];
  }
};

module.exports = nextConfig;
