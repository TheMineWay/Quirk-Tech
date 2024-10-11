import {
  Repository,
  RepositoryOptions,
} from "@/db/repository/repository.abstract";
import { headerMenuItems } from "@/db/schema";
import { HeaderMenuItemsSelect } from "@/db/schema/configs/header-menu-items.table";
import { eq, isNull } from "drizzle-orm";

export class HeaderMenuItemsRepository extends Repository<
  typeof headerMenuItems
> {
  constructor() {
    super(headerMenuItems);
  }

  findAllActiveByParent = async (
    { parentId }: { parentId: HeaderMenuItemsSelect["parentId"] },
    options?: RepositoryOptions
  ) =>
    await this.db(options)
      .select()
      .from(this.table)
      .where(
        parentId
          ? eq(this.table.parentId, parentId)
          : isNull(this.table.parentId)
      )
      .orderBy(this.table.order);
}
