import Drawer from "@/components/ui/drawer/drawer";
import { MenuItem } from "@/types/components/header/menu/menu-item.type";
import { useDisclosure } from "@nextui-org/modal";
import Link from "next/link";

type Props = {
  isOpen?: boolean;
  menuItems: (MenuItem & { label: string })[];
} & Pick<ReturnType<typeof useDisclosure>, "onOpenChange">;

export default function MobileMenu({ isOpen, onOpenChange, menuItems }: Props) {
  return (
    <>
      <Drawer isOpen={isOpen} toggleDrawer={onOpenChange}>
        <ul>
          {menuItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </Drawer>
    </>
  );
}

const Item = ({ item }: { item: MenuItem & { label: string } }) =>
  item.href ? <Link href={item.href}>{item.label}</Link> : <p>{item.label}</p>;
