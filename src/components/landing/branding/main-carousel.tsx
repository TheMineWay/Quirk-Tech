import Carousel from "@/components/ui/carousel/carousel";
import { FC } from "react";

import banner from "@/assets/branding/banner-1.png";
import { CarouselItemsRepository } from "@/db/repository/landing/components/carousel-items.repository";
import { CarouselItemCode } from "@/db/schema/landing/components/carousel/carousel-image-category.enum";
import { I18nProps } from "@/types/i18n/i18n-props.type";

type MainCarouselProps = I18nProps;
const MainCarousel: FC<MainCarouselProps> = async ({
  i18n: { dictionary, lang },
}) => {
  const image =
    await new CarouselItemsRepository().findByCodeAndLanguageWithFallback({
      code: CarouselItemCode.DISCOUNTS,
      lang,
    });

  return (
    <Carousel
      items={[
        {
          image: banner.src,
          alt: "Demo image",
          content: {
            action: {
              type: "link",
              href: "",
              color: "secondary",
              text: "aaa",
            },
            title: {
              text: "Hola!",
            },
          },
        },
      ]}
      dictionary={dictionary.components.carousel}
    />
  );
};

export default MainCarousel;
