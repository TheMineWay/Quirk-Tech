import MainSearch from "@/components/header/search/main-search";
import styles from "./header.module.css";
import clsx from "clsx";

export default function Header() {
  return (
    <>
      <nav
        className={clsx(
          styles.header,
          "border-b-1 bg-background border-primary"
        )}
      >
        <MainSearch />
        <p>Hola</p>
      </nav>
    </>
  );
}
