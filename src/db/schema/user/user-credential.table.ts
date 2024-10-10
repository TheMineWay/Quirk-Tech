import { DB_SCHEMAS } from "@/db/db-schemas";
import { TABLE_TIMESTAMPS } from "@/db/schema-utils/table-timestamps";
import { USER_ID, usersTable } from "@/db/schema/user/user.table";
import { integer, varchar } from "drizzle-orm/pg-core";

export const USER_CREDENTIALS_ID = integer();

// Table
export const userCredentialsTable = DB_SCHEMAS.users.table("user_credentials", {
  id: USER_CREDENTIALS_ID.primaryKey(),
  password: varchar({ length: 512 }).notNull(),
  userId: USER_ID.references(() => usersTable.id),
  ...TABLE_TIMESTAMPS,
});
