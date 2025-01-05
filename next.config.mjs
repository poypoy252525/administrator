/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "icvwnnvjiybbmdfkamis.supabase.co",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
