import { DB_SCHEMAS } from "@/db/db-schemas";

export enum CarouselImageCode {
  DISCOUNTS = "discounts",
}

export const carouselImageCodesEnum = DB_SCHEMAS.landings.enum(
  "carousel_image_codes_enum",
  [CarouselImageCode.DISCOUNTS]
);
