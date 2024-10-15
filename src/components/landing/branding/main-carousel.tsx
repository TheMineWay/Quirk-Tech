import Carousel from "@/components/ui/carousel/carousel";
import { FC } from "react";
import { I18nProps } from "@/types/i18n/i18n-props.type";

import banner from "@/assets/branding/banner-1.png";
import { CarouselItemsSelect } from "@/db/schema/landing/components/carousel/carousel-item.table";

export type MainCarouselProps = { items: CarouselItemsSelect[] } & I18nProps;

const MainCarousel: FC<MainCarouselProps> = async ({
  i18n: { dictionary },
}) => {
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
