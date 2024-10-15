import { DB_SCHEMAS } from "@/db/db-schemas";

export enum Components {
  CAROUSEL = "carousel",
}

export const componentsEnum = DB_SCHEMAS.landings.enum("components_enum", [
  Components.CAROUSEL,
]);
