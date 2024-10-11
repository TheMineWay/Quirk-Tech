// Schemas
import { DB_SCHEMAS } from "@/db/db-schemas";

export const userSchema = DB_SCHEMAS.users;
export const configSchema = DB_SCHEMAS.configs;

// Tables

// -> Users
export { users } from "@/db/schema/user/user.table";
export { userCredentials } from "@/db/schema/user/user-credential.table";

// -> Configs
export { headerMenuItems } from "@/db/schema/configs/header-menu-items.table";
