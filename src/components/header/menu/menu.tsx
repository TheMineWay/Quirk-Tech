import DesktopMenu from "@/components/header/menu/desktop-menu";
import { MenuItems } from "@/types/components/header/menu/menu-item.type";

type Props = {
  items: MenuItems;
};

export default function Menu({ items }: Props) {
  return <DesktopMenu className="h-2/4" items={items} />;
}
