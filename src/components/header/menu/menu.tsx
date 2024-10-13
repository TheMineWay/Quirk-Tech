import DesktopMenu from "@/components/header/menu/desktop-menu";
import { MenuItem } from "@/types/components/header/menu/menu-item.type";

type Props = {
  items: (MenuItem & { label: string })[];
};

export default function Menu({ items }: Props) {
  return <DesktopMenu className="h-2/4" items={items} />;
}
