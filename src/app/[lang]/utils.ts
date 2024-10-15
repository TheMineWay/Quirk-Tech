import { CarouselItemsRepository } from "@/db/repository/landing/components/carousel-items.repository";
import { CarouselItemCode } from "@/db/schema/landing/components/carousel/carousel-image-category.enum";
import { LangProps } from "@/types/i18n/lang-props.type";
import { cache } from "react";

export const fetchInfo = cache(
  async (props: LangProps) => await _fetchInfo(props)
);

const _fetchInfo = async ({ lang }: LangProps) => {
  const [mainCarouselItems] = await Promise.all([
    new CarouselItemsRepository().findByCodesAndLanguageWithFallback({
      lang: lang,
      codes: [CarouselItemCode.DISCOUNTS],
    }),
  ]);

  return {
    mainCarousel: {
      items: mainCarouselItems,
    },
  };
};
