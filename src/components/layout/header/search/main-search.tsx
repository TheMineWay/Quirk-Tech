import clsx from "clsx";
import { Button } from "@nextui-org/button";
import { Search } from "@mui/icons-material";
import { I18nProps } from "@/types/i18n/i18n-props.type";

import styles from "./main-search.module.css";

type Props = {
  className?: string;
} & I18nProps;

export default async function MainSearch({ className, i18n }: Props) {
  const {
    dictionary: { layout },
  } = i18n;

  return (
    <div className={clsx(className, "w-full flex")}>
      <input
        placeholder={layout.header.search.Placeholder}
        className={clsx("pl-2 rounded-l-md h-full w-full", styles.search)}
      />
      <Button
        className={clsx(
          styles.button,
          "h-full flex items-center justify-center"
        )}
        aria-label={layout.header.search.SearchButtonA11y}
      >
        <Search />
      </Button>
    </div>
  );
}
