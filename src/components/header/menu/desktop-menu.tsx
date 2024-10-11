import {
  MenuItem,
  MenuItems,
} from "@/types/components/header/menu/menu-item.type";
import Link from "next/link";
import clsx from "clsx";

import styles from "./menu-item.module.css";

type Props = {
  className?: string;
  items: MenuItems;
};

export default function DesktopMenu({ className, items }: Props) {
  return (
    <ul className={clsx("flex gap-4", className)}>
      {items.map((item) => (
        <li className={clsx(styles.item, "p-2")} key={item.id}>
          <Item {...item} />
        </li>
      ))}
    </ul>
  );
}

const Item = (item: MenuItem) => {
  if (item.href)
    return (
      <Link className="text-md" href={item.href}>
        {item.i18nKey}
      </Link>
    );

  return <p className="text-md">{item.i18nKey}</p>;
};
