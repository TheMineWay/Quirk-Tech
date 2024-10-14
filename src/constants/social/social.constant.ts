import { CONFIG } from "@/constants/config/config.constant";

export const SOCIAL = {
  youtube: CONFIG.SOCIAL_YT_URL ?? null,
  github: CONFIG.REPO_URL ?? null,
  x: CONFIG.SOCIAL_X_URL ?? null,
  linkedin: CONFIG.SOCIAL_LINKEDIN_URL ?? null,
} satisfies Record<string, string | null>;
