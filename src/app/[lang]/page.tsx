import { LOCALES } from "@/constants/i18n/locales";
import { getDictionary } from "@/i18n/dictionary.util";
import { I18nParams } from "@/types/i18n/i18n-params.type";
import MainCarousel from "@/components/landing/branding/main-carousel";
import { fetchInfo } from "@/app/[lang]/utils";

export const revalidate = 3600;

export default async function Home({ params: { lang } }: I18nParams) {
  const { mainCarousel } = await fetchInfo({ lang });

  const i18n = { dictionary: await getDictionary(lang), lang };

  return (
    <div className="flex flex-col">
      <MainCarousel {...mainCarousel} i18n={i18n} />
    </div>
  );
}

export const generateStaticParams = () =>
  LOCALES.map((lang) => ({
    lang,
  }));
