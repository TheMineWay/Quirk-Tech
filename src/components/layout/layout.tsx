import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import { LangProps } from "@/types/i18n/lang-props.type";
import LegalMessage from "@/components/legal/legal-modal/legal-message";
import { ReactNode } from "react";
import clsx from "clsx";
import { getDictionary } from "@/i18n/dictionary.util";

import styles from "./layout.module.css";

type Props = { children: ReactNode } & LangProps;

const margin = "px-4 md:px-6";

export default async function Layout({ lang, children }: Props) {
  const { legal, common } = await getDictionary(lang);

  return (
    <div className={styles.layout}>
      <Header lang={lang} />
      <main
        className={clsx(
          "container mx-auto dark text-foreground mt-10",
          styles.content,
          margin
        )}
      >
        {children}
      </main>
      <Footer className={clsx("container mx-auto", margin)} lang={lang} />
      <LegalMessage
        i18n={{
          message: legal["legal-message"],
          accept: common.actions.Accept,
        }}
      />
    </div>
  );
}
