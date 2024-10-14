import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_ID } from "@/constants/analytics/google-analytics.constants";
import { LOCALES } from "@/constants/i18n/locales";
import { Locale } from "@/constants/i18n/locale.enum";
import { getDictionary } from "@/i18n/dictionary.util";
import { I18nParams } from "@/types/i18n/i18n-params.type";
import Header from "@/components/header/header";
import { NextUIProvider } from "@nextui-org/system";
import { CONFIG } from "@/constants/config/config.constant";
import { ROBOTS_METADATA } from "@/constants/config/robots-metadata.constant";

import pageBanner from "@/assets/branding/logo/logo.png";

import "@/app/globals.css";

export async function generateMetadata({
  params: { lang },
}: I18nParams): Promise<Metadata> {
  const { layout } = await getDictionary(lang);

  return {
    title: layout.Title,
    description: layout.seo.Description,
    keywords: Object.values(layout.seo.keywords),
    alternates: {
      languages: LOCALES.reduce((prev, locale) => {
        prev[locale] = `${CONFIG.BASE_URL}${locale}`;
        return prev;
      }, {} as Record<Locale, string>),
    },
    robots: ROBOTS_METADATA.default,
    openGraph: {
      title: layout.Title,
      description: layout.seo.Description,
      url: CONFIG.BASE_URL,
      images: [
        {
          url: pageBanner.src,
          width: 800,
          height: 600,
          alt: layout.seo.banner.Alt,
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<
  {
    children: React.ReactNode;
  } & I18nParams
>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NextUIProvider>
          <Header lang={lang} />
          <main className="dark text-foreground bg-background">{children}</main>
        </NextUIProvider>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
