export const ENV = {
  GA_ID: process.env.GA_ID as string,
  BASE_URL: process.env.BASE_URL as string,

  // Social
  REPO_URL: process.env.REPO_URL as string | undefined,
  SOCIAL_YT_URL: process.env.SOCIAL_YT_URL,
  SOCIAL_X_URL: process.env.SOCIAL_X_URL,
  SOCIAL_LINKEDIN_URL: process.env.SOCIAL_LINKEDIN_URL,

  // Branding
  COMPANY_NAME: process.env.COMPANY_NAME,
};
