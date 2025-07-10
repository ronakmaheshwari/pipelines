/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Opt-out of Turbopack's externalization of Prisma
    serverExternalPackages: ['!@prisma/client']
  }
}

export default nextConfig;
