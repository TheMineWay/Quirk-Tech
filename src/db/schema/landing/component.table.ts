import { DB_SCHEMAS } from "@/db/db-schemas";
import { TABLE_TIMESTAMPS } from "@/db/schema-utils/table-timestamps";
import { componentsEnum } from "@/db/schema/landing/component.enum";
import { landings } from "@/db/schema/landing/landing.table";
import { serial, integer } from "drizzle-orm/pg-core";

// Table
export const components = DB_SCHEMAS.landings.table("components", {
  id: serial().primaryKey(),
  component: componentsEnum(),
  landingId: integer().references(() => landings.id),
  ...TABLE_TIMESTAMPS,
});
