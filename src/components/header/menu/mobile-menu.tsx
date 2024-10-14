import Drawer from "@/components/ui/drawer/drawer";
import { MenuItem } from "@/types/components/header/menu/menu-item.type";
import { useDisclosure } from "@nextui-org/modal";
import Link from "next/link";

import styles from "./mobile-menu.module.css";
import clsx from "clsx";

type Props = {
  isOpen?: boolean;
  menuItems: (MenuItem & { label: string })[];
} & Pick<ReturnType<typeof useDisclosure>, "onOpenChange">;

export default function MobileMenu({ isOpen, onOpenChange, menuItems }: Props) {
  return (
    <>
      <Drawer
        size="sm"
        showHeader={false}
        isOpen={isOpen}
        toggleDrawer={onOpenChange}
      >
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Item className={clsx(styles.item, "pb-2")} item={item} />
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  );
}

const Item = ({
  item,
  className,
}: {
  item: MenuItem & { label: string };
  className: string;
}) =>
  item.href ? (
    <Link className={className} href={item.href}>
      {item.label}
    </Link>
  ) : (
    <p className={className}>{item.label}</p>
  );
