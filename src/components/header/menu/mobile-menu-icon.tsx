"use client";

import MobileMenu from "@/components/header/menu/mobile-menu";
import { MenuItems } from "@/types/components/header/menu/menu-item.type";
import { Menu } from "@mui/icons-material";
import { useDisclosure } from "@nextui-org/modal";

type Props = {
  menuItems: MenuItems;
};

export default function MobileMenuIcon({ menuItems }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>
        <Menu />
      </button>
      <MobileMenu
        menuItems={menuItems}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
}
