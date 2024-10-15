import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import LegalMessage from "@/components/legal/legal-modal/legal-message";
import { ReactNode } from "react";
import clsx from "clsx";
import { cookies } from "next/headers";
import { COOKIES } from "@/constants/cookies.constant";
import { I18nProps } from "@/types/i18n/i18n-props.type";

import styles from "./layout.module.css";

type Props = { children: ReactNode } & I18nProps;

const margin = "px-4 md:px-6";

export default async function Layout({ i18n, children }: Props) {
  const { legal, common } = i18n.dictionary;
  const cookiesJar = cookies();

  return (
    <div className={styles.layout}>
      <Header i18n={i18n} />
      <main
        className={clsx(
          "container mx-auto dark text-foreground mt-10",
          styles.content,
          margin
        )}
      >
        {children}
      </main>
      <Footer className={clsx("container mx-auto", margin)} i18n={i18n} />
      {cookiesJar.get(COOKIES.cookiesConsent)?.value !== "true" && (
        <LegalMessage
          i18n={{
            message: legal["legal-message"],
            accept: common.actions.Accept,
          }}
        />
      )}
    </div>
  );
}
