import { getDictionary } from "@/i18n/dictionary.util";
import clsx from "clsx";
import { Locale } from "@/constants/i18n/locale.enum";
import { Button } from "@nextui-org/button";
import styles from "./main-search.module.css";

type Props = {
  className?: string;
};

export default async function MainSearch({ className }: Props) {
  const { layout } = await getDictionary(Locale.EN_US);

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
      >
        <span className="material-symbols-outlined">search</span>
      </Button>
    </div>
  );
}
