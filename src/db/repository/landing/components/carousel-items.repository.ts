import { Locale } from "@/constants/i18n/locale.enum";
import {
  Repository,
  RepositoryOptions,
} from "@/db/repository/repository.abstract";
import { carouselItems } from "@/db/schema";
import { CarouselItemCode } from "@/db/schema/landing/components/carousel/carousel-image-category.enum";
import { and, eq, inArray, isNull, or } from "drizzle-orm";

export class CarouselItemsRepository extends Repository<typeof carouselItems> {
  constructor() {
    super(carouselItems);
  }

  findByCodesAndLanguageWithFallback = async (
    {
      codes,
      lang,
    }: {
      codes: CarouselItemCode[];
      lang: Locale;
    },
    options?: RepositoryOptions
  ) => {
    return await this.db(options)
      .select()
      .from(this.table)
      .where(
        and(
          inArray(this.table.code, codes),
          or(eq(this.table.language, lang), isNull(this.table.language))
        )
      );
  };
}
