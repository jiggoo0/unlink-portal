/** @format */

import { fileURLToPath } from "url";

const nextConfig = {
  // 🚀 NEXT.JS 16 OPTIMIZED CONFIGURATION
  reactStrictMode: true,

  // 🛡️ SECURITY & BUILD PROTOCOL (Optimized for Termux/WASM)
  // เราใช้ pnpm run aipc ตรวจสอบแยกอยู่แล้ว จึงปิดส่วนนี้เพื่อเลี่ยง WASM bug
  typescript: {
    ignoreBuildErrors: true,
  },

  // 🛡️ SECURITY HEADERS PROTOCOL
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // 🖼️ IMAGE OPTIMIZATION (SHARP READY)
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "promptpay.io" },
      { protocol: "https", hostname: "logos-world.net" },
      { protocol: "https", hostname: "www.thaiairways.com" },
    ],
  },

  // 📦 BUNDLE & BUILD OPTIMIZATION
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-accordion",
      "@radix-ui/react-slot",
      "sonner",
    ],
    serverActions: {
      bodySizeLimit: "2mb",
    },
    // 🔥 Critical Fix for Termux WASM
    memoryBasedWorkersCount: true,
    cpus: 1,
    workerThreads: false,
  },

  // 🔧 WEBPACK CUSTOMIZATION
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/lib/seo-schemas": fileURLToPath(
        new URL("./lib/shared-source/seo-schemas.ts", import.meta.url),
      ),
      "@/lib/db": fileURLToPath(
        new URL("./lib/shared-source/db.ts", import.meta.url),
      ),
      "@/types": fileURLToPath(
        new URL("./lib/shared-source/index.ts", import.meta.url),
      ),
      "@unlink/shared/lib/identities": fileURLToPath(
        new URL("./lib/shared-source/identities.ts", import.meta.url),
      ),
    };

    if (!isServer) {
      config.devtool = false;
    }

    if (!isServer && config.optimization) {
      config.optimization.splitChunks = {
        chunks: "all",
        maxInitialRequests: 25,
        minSize: 20000,
      };
    }
    return config;
  },
};

export default nextConfig;
