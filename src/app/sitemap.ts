import { CONFIG } from "@/constants/config/config.constant";
import { LOCALES } from "@/constants/i18n/locales";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return LOCALES.map((lang) => ({
    url: `${CONFIG.BASE_URL}${lang}`,
    lastModified: new Date(),
  }));
}
