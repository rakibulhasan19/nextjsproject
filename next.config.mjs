/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.keyName, // pulls from .env file
  },
  async rewrites() {
    return [
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
