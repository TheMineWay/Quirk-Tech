import { bytea } from "@/db/custom/datatype/bytea.db.datatype";
import { DB_SCHEMAS } from "@/db/db-schemas";
import { TABLE_TIMESTAMPS } from "@/db/schema-utils/table-timestamps";
import { languagesEnum } from "@/db/schema/info/language.enum";
import { carouselImageCodesEnum } from "@/db/schema/landing/components/carousel/carousel-image-category.enum";
import { serial, unique } from "drizzle-orm/pg-core";

// Table
export const carouselItems = DB_SCHEMAS.landings.table(
  "carousel_items",
  {
    id: serial().primaryKey(),
    code: carouselImageCodesEnum(),
    language: languagesEnum(),
    image: bytea().notNull(),
    ...TABLE_TIMESTAMPS,
  },
  (t) => ({
    codePerLang: unique().on(t.code, t.language),
  })
);
