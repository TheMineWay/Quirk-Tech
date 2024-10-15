import Carousel from "@/components/ui/carousel/carousel";
import { DictionaryProps } from "@/types/i18n/dictionary-props.type";
import { FC } from "react";

import banner from "@/assets/branding/banner-1.png";

type MainCarouselProps = DictionaryProps;
const MainCarousel: FC<MainCarouselProps> = async ({ dictionary }) => (
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

export default MainCarousel;
