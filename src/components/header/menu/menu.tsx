"use client";

import DesktopMenu from "@/components/header/menu/desktop-menu";
import MobileMenu from "@/components/header/menu/mobile-menu";
import { MenuItems } from "@/types/components/header/menu/menu-item.type";
import { useState } from "react";

type Props = {
  items: MenuItems;
};

export default function Menu({ items }: Props) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <DesktopMenu className="h-2/4" items={items} />
      <MobileMenu
        open={isMobileMenuOpen}
        close={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
