export const ROUTES = {
  home: () => "/",
  termsAndConditions: () => "/legal/terms-and-conditions",
  privacy: () => "/legal/privacy",
  cookies: () => "/legal/cookies",
} satisfies Record<string, (params?: Record<string, string>) => string>;
