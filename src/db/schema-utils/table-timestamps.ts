import { timestamp } from "drizzle-orm/pg-core";

export const TABLE_TIMESTAMPS = {
  createdAt: timestamp().notNull().defaultNow(),
};
