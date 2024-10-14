import { CONFIG } from "@/constants/config/config.constant";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${CONFIG.BASE_URL}sitemap.xml`,
  };
}
