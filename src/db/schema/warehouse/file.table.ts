import { bytea } from "@/db/custom/datatype/bytea.db.datatype";
import { DB_SCHEMAS } from "@/db/db-schemas";
import { TABLE_TIMESTAMPS } from "@/db/schema-utils/table-timestamps";
import { uuid } from "drizzle-orm/pg-core";

// Table
export const files = DB_SCHEMAS.warehouse.table("files", {
  id: uuid().defaultRandom().primaryKey(),
  file: bytea().notNull(),
  ...TABLE_TIMESTAMPS,
});
