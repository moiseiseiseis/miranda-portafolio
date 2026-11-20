import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/portafolio/monitor-rehabilitacion-hombro",
        destination: "/portafolio/rumbo-rehab",
        permanent: true,
      },
      {
        source: "/portafolio/purple-bananas",
        destination: "/portafolio/purple-bonnes",
        permanent: true,
      },
      {
        source: "/portafolio/simulacion-esquizofilano",
        destination: "/portafolio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
