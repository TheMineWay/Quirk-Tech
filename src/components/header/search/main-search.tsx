import { getDictionary } from "@/i18n/dictionary.util";
import clsx from "clsx";
import { Button } from "@nextui-org/button";
import { LangProps } from "@/types/i18n/lang-props.type";
import styles from "./main-search.module.css";

type Props = {
  className?: string;
} & LangProps;

export default async function MainSearch({ className, lang }: Props) {
  const { layout } = await getDictionary(lang);

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
