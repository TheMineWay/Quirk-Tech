"use client";

import Drawer from "@/components/ui/drawer/drawer";
import { MenuItems } from "@/types/components/header/menu/menu-item.type";
import { useDisclosure } from "@nextui-org/modal";

type Props = {
  isOpen?: boolean;
  menuItems: MenuItems;
} & Pick<ReturnType<typeof useDisclosure>, "onOpenChange">;

export default function MobileMenu({ isOpen, onOpenChange }: Props) {
  return (
    <>
      <Drawer isOpen={isOpen} toggleDrawer={onOpenChange}>
        PACO
      </Drawer>
    </>
  );
}
