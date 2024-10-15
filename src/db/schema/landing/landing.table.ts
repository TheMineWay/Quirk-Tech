import { DB_SCHEMAS } from "@/db/db-schemas";
import { TABLE_TIMESTAMPS } from "@/db/schema-utils/table-timestamps";
import { serial, varchar } from "drizzle-orm/pg-core";

// Table
export const landings = DB_SCHEMAS.landings.table("landings", {
  id: serial().primaryKey(),
  code: varchar({ length: 16 }).unique().notNull(),
  path: varchar({ length: 128 }).unique().notNull(),
  ...TABLE_TIMESTAMPS,
});
