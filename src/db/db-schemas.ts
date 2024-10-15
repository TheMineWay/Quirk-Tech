import { pgSchema } from "drizzle-orm/pg-core";

export const DB_SCHEMAS = {
  users: pgSchema("users"),
  configs: pgSchema("configs"),
  landings: pgSchema("landings"),
  info: pgSchema("info"),
};
