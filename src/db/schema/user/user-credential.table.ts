import { DB_SCHEMAS } from "@/db/db-schemas";
import { TABLE_TIMESTAMPS } from "@/db/schema-utils/table-timestamps";
import { users } from "@/db/schema/user/user.table";
import { serial, uuid, varchar } from "drizzle-orm/pg-core";

// Table
export const userCredentials = DB_SCHEMAS.users.table("user_credentials", {
  id: serial().primaryKey(),
  password: varchar({ length: 512 }).notNull(),
  userId: uuid().references(() => users.id),
  ...TABLE_TIMESTAMPS,
});
