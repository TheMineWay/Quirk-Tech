import { MenuItem } from "@/types/components/header/menu/menu-item.type";
import Link from "next/link";
import clsx from "clsx";

import styles from "./menu-item.module.css";

type Props = {
  className?: string;
  items: (MenuItem & { label: string })[];
};

export default function DesktopMenu({ className, items }: Props) {
  return (
    <ul className={clsx("hidden md:flex gap-4", className)}>
      {items.map((item) => (
        <li className={clsx(styles.item, "p-2")} key={item.id}>
          <Item {...item} />
        </li>
      ))}
    </ul>
  );
}

const Item = (item: MenuItem & { label: string }) => {
  if (item.href)
    return (
      <Link className="text-md" href={item.href}>
        {item.label}
      </Link>
    );

  return <p className="text-md">{item.label}</p>;
};
