import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: "ee712ed3d9a31ac90e78463a3c77245f",
    IMG_URI: "https://image.tmdb.org/t/p/original",
  },
};

export default nextConfig;
