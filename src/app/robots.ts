import { MetadataRoute } from "next";

const BASE_URL = "https://kean-david-portfolio.vercel.app"; // TODO: replace with your real domain once deployed

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
