import { Locale } from "@/constants/i18n/locale.enum";
import { DB_SCHEMAS } from "@/db/db-schemas";

export const languagesEnum = DB_SCHEMAS.info.enum("languages_enum", [
  Locale.EN_US,
]);
