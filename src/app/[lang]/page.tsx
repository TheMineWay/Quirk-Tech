import { LOCALES } from "@/constants/i18n/locales";
import { getDictionary } from "@/i18n/dictionary.util";
import { I18nParams } from "@/types/i18n/i18n-params.type";
import MainCarousel from "@/components/landing/branding/main-carousel";

type Props = I18nParams;

export default async function Home({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col">
      <MainCarousel dictionary={dictionary} />
    </div>
  );
}

export const generateStaticParams = () =>
  LOCALES.map((lang) => ({
    lang,
  }));
