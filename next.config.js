/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "api.dicebear.com",
      "www.google.com",
      "logos-world.net",
    ],
  },
};

if (process.env.NEXT_PUBLIC_TEMPO) {
  nextConfig["experimental"] = {
    // NextJS 13.4.8 up to 14.1.3:
    // swcPlugins: [[require.resolve("tempo-devtools/swc/0.86"), {}]],
    // NextJS 14.1.3 to 14.2.11:
    swcPlugins: [[require.resolve("tempo-devtools/swc/0.90"), {}]],

    // NextJS 15+ (Not yet supported, coming soon)
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "api.dicebear.com",
          pathname: "/7.x/initials/svg**", // Matches your avatar URLs
        },
        {
          protocol: "https",
          hostname: "www.google.com",
          pathname: "/**", // Matches your avatar URLs
        },
        {
          protocol: "https",
          hostname: "logos-world.net",
          pathname: "/**", // Matches your avatar URLs
        },
      ],
      dangerouslyAllowSVG: true, // Enable SVG support
    },
  };
}

module.exports = nextConfig;
