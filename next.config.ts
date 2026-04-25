import type { NextConfig } from "next";

/**
 * Next.js 16 config — performance-focused.
 *
 * Only options verified against the Next 16 docs
 * (node_modules/next/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/*)
 * are set here. Defaults that already match our intent (compress: true,
 * productionBrowserSourceMaps: false) are intentionally omitted.
 */
const nextConfig: NextConfig = {
  // Do not advertise the stack in response headers.
  // Ref: config/01-next-config-js/poweredByHeader.md
  poweredByHeader: false,

  images: {
    // Serve modern formats. AVIF is preferred (smaller), WebP is the fallback.
    // Ref: components/image.md#formats
    formats: ["image/avif", "image/webp"],

    // Cache optimized images for 1 year. The expiration is whichever is larger
    // of this value and the upstream Cache-Control.
    // Ref: components/image.md#minimumCacheTTL
    minimumCacheTTL: 31536000,
  },

  experimental: {
    // Tree-shake deep imports from packages with many named exports.
    // lucide-react is already auto-optimized by Next 16, but declaring it
    // explicitly is harmless and documents our intent if the default list
    // changes. Ref: config/01-next-config-js/optimizePackageImports.md
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
