/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //experimental: { optimizePackageImports: ["@chakra-ui/react"] },
  images: {
    domains: ["image.tmdb.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
        pathname: "/img/**", // Adjust the path based on your needs
      },
      {
        protocol: "https",
        hostname: "i.ebayimg.com",
        pathname: "/images/**", // Adjust the path if necessary
      },
      {
        protocol: "https",
        hostname: "cdn.majorcineplex.com",
        port: "",
        pathname: "/uploads/movie/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;
