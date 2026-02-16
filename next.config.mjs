/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "asset1.learningvalley.ir",
      },
    ],
  },
  allowedDevOrigins: [
    "192.168.1.3",
    "*.192.168.1.3",
    "localhost:3000",
    "localhost",
  ],
};

export default nextConfig;
