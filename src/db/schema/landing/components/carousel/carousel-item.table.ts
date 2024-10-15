import { DB_SCHEMAS } from "@/db/db-schemas";
import { files } from "@/db/schema";
import { TABLE_TIMESTAMPS } from "@/db/schema-utils/table-timestamps";
import { languagesEnum } from "@/db/schema/info/language.enum";
import { carouselItemCodesEnum } from "@/db/schema/landing/components/carousel/carousel-image-category.enum";
import { InferSelectModel } from "drizzle-orm";
import { serial, unique, uuid } from "drizzle-orm/pg-core";

// Table
export const carouselItems = DB_SCHEMAS.landings.table(
  "carousel_items",
  {
    id: serial().primaryKey(),
    code: carouselItemCodesEnum(),
    language: languagesEnum(),
    imageId: uuid().references(() => files.id),
    ...TABLE_TIMESTAMPS,
  },
  (t) => ({
    codePerLang: unique().on(t.code, t.language),
  })
);

export type CarouselItemsSelect = InferSelectModel<typeof carouselItems>;
