import { DB_SCHEMAS } from "@/db/db-schemas";

export enum CarouselItemCode {
  DISCOUNTS = "discounts",
}

export const carouselItemCodesEnum = DB_SCHEMAS.landings.enum(
  "carousel_item_codes_enum",
  [CarouselItemCode.DISCOUNTS]
);
