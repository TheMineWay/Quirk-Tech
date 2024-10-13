import { headerMenuItems } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";

type Table = InferSelectModel<typeof headerMenuItems>;
type PrepMenuItem = Pick<Table, "i18nKey" | "href"> &
  Partial<Pick<Table, "id">>;

export type MenuItem = PrepMenuItem & {
  children?: PrepMenuItem[];
};
export type MenuItems = MenuItem[];
