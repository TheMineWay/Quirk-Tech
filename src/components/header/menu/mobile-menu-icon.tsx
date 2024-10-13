"use client";

import MobileMenu from "@/components/header/menu/mobile-menu";
import { MenuItem } from "@/types/components/header/menu/menu-item.type";
import { Menu } from "@mui/icons-material";
import { useDisclosure } from "@nextui-org/modal";

type Props = Readonly<{
  menuItems: (MenuItem & { label: string })[];
  openMenuAriaDescription?: string;
}>;

export default function MobileMenuIcon({
  menuItems,
  openMenuAriaDescription,
}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button onClick={onOpen} aria-roledescription={openMenuAriaDescription}>
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
