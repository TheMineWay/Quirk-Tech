import Link from "next/link";
import { SupervisedUserCircle, ShoppingCart } from "@mui/icons-material";
import styles from "./header-extra-actions.module.css";
import clsx from "clsx";

const linkClassName = clsx(styles.action, "p-2 rounded-md");

export default function HeaderExtraActions() {
  return (
    <div className="h-10 md:h-14 max-w-24 gap-1 flex items-center content-center">
      <Link href="/" className={linkClassName}>
        <ShoppingCart />
      </Link>
      <Link href="/" className={linkClassName}>
        <SupervisedUserCircle />
      </Link>
    </div>
  );
}
