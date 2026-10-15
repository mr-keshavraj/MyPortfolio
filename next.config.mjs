/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site: works on Vercel and any static host.
  output: "export",
  distDir: "out",
  images: {
    // Static export has no image optimization server; local images are pre-sized.
    unoptimized: true,
  },
};

export default nextConfig;
