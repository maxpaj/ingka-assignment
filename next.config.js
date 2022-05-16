/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
