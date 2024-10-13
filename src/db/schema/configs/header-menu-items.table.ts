import { DB_SCHEMAS } from "@/db/db-schemas";
import { TABLE_TIMESTAMPS } from "@/db/schema-utils/table-timestamps";
import { InferSelectModel } from "drizzle-orm";
import {
  boolean,
  foreignKey,
  index,
  integer,
  serial,
  varchar,
} from "drizzle-orm/pg-core";

export const headerMenuItems = DB_SCHEMAS.configs.table(
  "header_menu_items",
  {
    id: serial().primaryKey(),
    i18nKey: varchar({ length: 128 }).notNull(),
    href: varchar({ length: 256 }),
    active: boolean().default(true).notNull(),
    parentId: integer(),
    order: integer(),
    ...TABLE_TIMESTAMPS,
  },
  (table) => ({
    parent: foreignKey({
      columns: [table.parentId],
      foreignColumns: [table.id],
      name: "parent_fk",
    }),
    orderIdx: index("order_idx").on(table.order),
  })
);

export type HeaderMenuItemsSelect = InferSelectModel<typeof headerMenuItems>;
