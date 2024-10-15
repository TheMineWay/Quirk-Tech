import Carousel from "@/components/ui/carousel/carousel";
import { LOCALES } from "@/constants/i18n/locales";
import { getDictionary } from "@/i18n/dictionary.util";
import { I18nParams } from "@/types/i18n/i18n-params.type";

type Props = I18nParams;

export default async function Home({ params: { lang } }: Props) {
  const {
    components: { carousel },
  } = await getDictionary(lang);

  return (
    <div className="flex flex-col">
      <Carousel
        items={[
          {
            image:
              "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Demo image",
            content: {
              action: {
                type: "button",
                text: "Click me",
              },
              title: {
                text: "Hola!",
              },
            },
          },
        ]}
        dictionary={carousel}
      />
    </div>
  );
}

export const generateStaticParams = () =>
  LOCALES.map((lang) => ({
    lang,
  }));
