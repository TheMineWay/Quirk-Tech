// Schemas
import { DB_SCHEMAS } from "@/db/db-schemas";

export const userSchema = DB_SCHEMAS.users;

// Tables
export { users } from "@/db/schema/user/user.table";
export { userCredentials } from "@/db/schema/user/user-credential.table";
