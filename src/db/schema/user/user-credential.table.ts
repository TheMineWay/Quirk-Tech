import { DB_SCHEMAS } from "@/db/db-schemas";
import { TABLE_TIMESTAMPS } from "@/db/schema-utils/table-timestamps";
import { usersTable } from "@/db/schema/user/user.table";
import { serial, uuid, varchar } from "drizzle-orm/pg-core";

// Table
export const userCredentialsTable = DB_SCHEMAS.users.table("user_credentials", {
  id: serial().primaryKey(),
  password: varchar({ length: 512 }).notNull(),
  userId: uuid().references(() => usersTable.id),
  ...TABLE_TIMESTAMPS,
});
