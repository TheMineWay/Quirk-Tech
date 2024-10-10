// Schemas
import { DB_SCHEMAS } from "@/db/db-schemas";

export const userSchema = DB_SCHEMAS.users;

// Tables
export { usersTable } from "@/db/schema/user/user.table";
export { userCredentialsTable } from "@/db/schema/user/user-credential.table";
