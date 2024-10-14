import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import { LangProps } from "@/types/i18n/lang-props.type";
import { ReactNode } from "react";
import clsx from "clsx";

import styles from "./layout.module.css";

type Props = { children: ReactNode } & LangProps;

export default function Layout({ lang, children }: Props) {
  return (
    <div className={styles.layout}>
      <Header lang={lang} />
      <main className={clsx("dark text-foreground mt-4 px-6", styles.content)}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
