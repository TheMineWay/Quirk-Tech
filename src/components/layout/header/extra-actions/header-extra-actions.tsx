import Link from "next/link";
import { SupervisedUserCircle, ShoppingCart } from "@mui/icons-material";
import clsx from "clsx";
import { I18nProps } from "@/types/i18n/i18n-props.type";

import styles from "./header-extra-actions.module.css";

const linkClassName = clsx(styles.action, "p-2 rounded-md");

type Props = I18nProps;

export default async function HeaderExtraActions({ i18n }: Props) {
  const { layout } = i18n.dictionary;

  return (
    <div className="h-10 md:h-14 max-w-24 gap-1 flex items-center content-center">
      <Link
        aria-label={layout.header.actions.cart.a11y}
        href="/"
        className={linkClassName}
      >
        <ShoppingCart />
      </Link>
      <Link
        aria-label={layout.header.actions.account.a11y}
        href="/"
        className={linkClassName}
      >
        <SupervisedUserCircle />
      </Link>
    </div>
  );
}
