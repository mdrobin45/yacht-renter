/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "duruthemes.com",
         },
      ],
   },
};

export default nextConfig;
