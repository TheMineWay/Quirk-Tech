import MainSearch from "@/components/header/search/main-search";
import DesktopMenu from "@/components/header/menu/desktop-menu";
import Image from "next/image";
import { HeaderMenuItemsRepository } from "@/db/repository/configs/header-menu-items.repository";
import NodeCache from "node-cache";
import { HeaderMenuItemsSelect } from "@/db/schema/configs/header-menu-items.table";
import Link from "next/link";
import { LangProps } from "@/types/i18n/lang-props.type";
import HeaderExtraActions from "@/components/header/extra-actions/header-extra-actions";
import { Menu } from "@mui/icons-material";

import logo from "@/assets/branding/logo/logo.png";

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
    <div className="flex h-18 md:h-24 gap-2 md:gap-8 px-2 md:px-6 pt-4 pb-4 md:pb-0 bg-background shadow-xl">
      <div className="block md:hidden w-4 items-center content-center mr-2">
        <Menu />
      </div>
      <div className="hidden md:block h-14 max-w-24">
        <Link href="/">
          <Image className="h-full w-full" alt="Quirktech logo" src={logo} />
        </Link>
      </div>
      <nav className="h-10 md:h-20 w-full gap-1 flex flex-col justify-between">
        <MainSearch lang={lang} className="h-full md:h-2/4" />
        <DesktopMenu className="h-2/4" items={menuItems} />
      </nav>
      <HeaderExtraActions />
    </div>
  );
}
