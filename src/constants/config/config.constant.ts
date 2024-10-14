import { ENV } from "@/constants/env/env.constant";
import pk from "@/../package.json";

export const CONFIG = {
  ...ENV,
  BASE_URL: ENV.BASE_URL ?? pk.homepage,
  REPO_URL: ENV.REPO_URL ?? pk.repository.url,
};
