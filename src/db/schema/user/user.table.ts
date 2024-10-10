import { DB_SCHEMAS } from "@/db/db-schemas";
import { TABLE_TIMESTAMPS } from "@/db/schema-utils/table-timestamps";
import { uuid, varchar } from "drizzle-orm/pg-core";

export const USER_ID = uuid();

// Table
export const usersTable = DB_SCHEMAS.users.table("users", {
  id: USER_ID.defaultRandom().primaryKey(),
  name: varchar({ length: 64 }).notNull(),
  lastName: varchar({ length: 128 }),
  email: varchar({ length: 256 }).notNull().unique(),
  ...TABLE_TIMESTAMPS,
});
