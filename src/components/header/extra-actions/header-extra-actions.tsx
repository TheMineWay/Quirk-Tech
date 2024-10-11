import Link from "next/link";
import { SupervisedUserCircle, ShoppingCart } from "@mui/icons-material";
import styles from "./header-extra-actions.module.css";
import clsx from "clsx";

const linkClassName = clsx(styles.action, "p-2");

export default function HeaderExtraActions() {
  return (
    <div className="h-14 max-w-24 flex items-center content-center">
      <Link href="/" className={linkClassName}>
        <ShoppingCart />
      </Link>
      <Link href="/" className={linkClassName}>
        <SupervisedUserCircle />
      </Link>
    </div>
  );
}
