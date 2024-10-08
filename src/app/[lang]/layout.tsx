import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_ID } from "@/constants/analytics/google-analytics.constants";
import { LOCALES } from "@/constants/i18n/locales";
import { Locale } from "@/constants/i18n/locale.enum";
import { getDictionary } from "@/i18n/dictionary.util";
import { I18nParams } from "@/types/i18n/i18n-params.type";
import "@/app/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export async function generateMetadata({
  params: { lang },
}: I18nParams): Promise<Metadata> {
  const { layout } = await getDictionary(lang);

  return {
    title: layout.Title,
    description: `LinkedIn Queens game.`,
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
        <AntdRegistry>{children}</AntdRegistry>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
