import LegalViewer from "@/components/legal/legal-viewer";
import { LOCALES } from "@/constants/i18n/locales";
import { getDictionary } from "@/i18n/dictionary.util";
import { I18nParams } from "@/types/i18n/i18n-params.type";

type Props = I18nParams;

export default async function Page({ params: { lang } }: Props) {
  const { legal } = await getDictionary(lang);

  const legalInfo = {
    parts: Object.values(legal["terms-and-conditions"].sections).map(
      ({ Content: content, Title: title }) => ({ content, title })
    ),
    title: legal["terms-and-conditions"].Title,
  };

  return <LegalViewer info={legalInfo} />;
}

export async function getStaticPaths() {
  const paths = LOCALES.map((lang) => ({
    params: { lang },
  }));

  return {
    paths,
    fallback: false,
  };
}
