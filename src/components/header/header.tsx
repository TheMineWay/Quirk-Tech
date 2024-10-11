import MainSearch from "@/components/header/search/main-search";
import DesktopMenu from "@/components/header/menu/desktop-menu";
import Image from "next/image";
import { HeaderMenuItemsRepository } from "@/db/repository/configs/header-menu-items.repository";
import NodeCache from "node-cache";
import { HeaderMenuItemsSelect } from "@/db/schema/configs/header-menu-items.table";
import Link from "next/link";

import logo from "@/assets/branding/logo/logo.png";
import { LangProps } from "@/types/i18n/lang-props.type";
import HeaderExtraActions from "@/components/header/extra-actions/header-extra-actions";

const cache = new NodeCache({ stdTTL: 60 * 60, checkperiod: 120 });

const getMenuItems = async () => {
  "use server";

  const cacheData = cache.get<HeaderMenuItemsSelect[]>("menu-items");
  if (cacheData && cacheData.length > 0) return cacheData;

  const data = await new HeaderMenuItemsRepository().findAllActiveByParent({
    parentId: null,
  });

  cache.set("menu-items", data);

  return data;
};

export default async function Header({ lang }: LangProps) {
  const menuItems = await getMenuItems();

  return (
    <div className="flex h-24 gap-8 px-6 pt-4 bg-background shadow-xl">
      <div className="h-14 max-w-24">
        <Link href="/">
          <Image className="h-full w-full" alt="Quirktech logo" src={logo} />
        </Link>
      </div>
      <nav className="h-20 w-full gap-1 flex flex-col justify-between">
        <MainSearch lang={lang} className="h-2/4" />
        <DesktopMenu className="h-2/4" items={menuItems} />
      </nav>
      <HeaderExtraActions />
    </div>
  );
}
