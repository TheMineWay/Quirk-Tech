import { pgSchema } from "drizzle-orm/pg-core";

export const DB_SCHEMAS = {
  users: pgSchema("users"),
};
