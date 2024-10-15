import { Locale } from "@/constants/i18n/locale.enum";
import {
  Repository,
  RepositoryOptions,
} from "@/db/repository/repository.abstract";
import { carouselItems } from "@/db/schema";
import { CarouselItemCode } from "@/db/schema/landing/components/carousel/carousel-image-category.enum";
import { and, desc, eq, isNull, or } from "drizzle-orm";

export class CarouselItemsRepository extends Repository<typeof carouselItems> {
  constructor() {
    super(carouselItems);
  }

  findByCodeAndLanguageWithFallback = async (
    {
      code,
      lang,
    }: {
      code: CarouselItemCode;
      lang: Locale;
    },
    options?: RepositoryOptions
  ) =>
    await this.db(options)
      .select()
      .from(this.table)
      .where(
        and(
          eq(this.table.code, code),
          or(eq(this.table.language, lang), isNull(this.table.language))
        )
      )
      .orderBy(desc(this.table.language))
      .limit(1);
}
