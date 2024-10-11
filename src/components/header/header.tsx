import MainSearch from "@/components/header/search/main-search";
import DesktopMenu from "@/components/header/menu/desktop-menu";
import Image from "next/image";

import logo from "@/assets/branding/logo/logo.png";

export default function Header() {
  return (
    <div className="flex gap-8 p-4 bg-background shadow-xl">
      <Image className="w-20 h-20" alt="Quirktech logo" src={logo} />
      <nav className="h-full flex flex-col gap-4 justify-between">
        <MainSearch className="h-2/4" />
        <DesktopMenu className="h-2/4" />
      </nav>
    </div>
  );
}
