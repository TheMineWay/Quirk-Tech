// Schemas
import { DB_SCHEMAS } from "@/db/db-schemas";

export const userSchema = DB_SCHEMAS.users;
export const configSchema = DB_SCHEMAS.configs;
export const landingSchema = DB_SCHEMAS.landings;

// Tables

// -> Users
export { users } from "@/db/schema/user/user.table";
export { userCredentials } from "@/db/schema/user/user-credential.table";

// -> Configs
export { headerMenuItems } from "@/db/schema/configs/header-menu-items.table";

// -> Landings
export { componentsEnum } from "@/db/schema/landing/component.enum";
export { landings } from "@/db/schema/landing/landing.table";
export { components } from "@/db/schema/landing/component.table";
