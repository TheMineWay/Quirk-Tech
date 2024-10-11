import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_ID } from "@/constants/analytics/google-analytics.constants";
import { LOCALES } from "@/constants/i18n/locales";
import { Locale } from "@/constants/i18n/locale.enum";
import { getDictionary } from "@/i18n/dictionary.util";
import { I18nParams } from "@/types/i18n/i18n-params.type";
import Header from "@/components/header/header";
import { NextUIProvider } from "@nextui-org/system";
import "@/app/globals.css";

export async function generateMetadata({
  params: { lang },
}: I18nParams): Promise<Metadata> {
  const { layout } = await getDictionary(lang);

  return {
    title: layout.Title,
    description: `Tech ecommerce (fake website).`,
    keywords: ["Ecommerce", "Technology"],
    alternates: {
      languages: LOCALES.reduce((prev, locale) => {
        prev[locale] = `/${locale}`;
        return prev;
      }, {} as Record<Locale, string>),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NextUIProvider>
          <Header />
          <main className="dark text-foreground bg-background">{children}</main>
        </NextUIProvider>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
