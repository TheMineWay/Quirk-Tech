import Link from "next/link";
import { SupervisedUserCircle, ShoppingCart } from "@mui/icons-material";
import styles from "./header-extra-actions.module.css";
import clsx from "clsx";
import { LangProps } from "@/types/i18n/lang-props.type";
import { getDictionary } from "@/i18n/dictionary.util";

const linkClassName = clsx(styles.action, "p-2 rounded-md");

type Props = LangProps;

export default async function HeaderExtraActions({ lang }: Props) {
  const { layout } = await getDictionary(lang);

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
