import clsx from "clsx";
import { GitHub, LinkedIn, X, YouTube } from "@mui/icons-material";
import { ReactNode } from "react";
import Link from "next/link";
import { SOCIAL } from "@/constants/social/social.constant";

import styles from "./footer.module.css";
import { CONFIG } from "@/constants/config/config.constant";
import { LangProps } from "@/types/i18n/lang-props.type";
import { getDictionary } from "@/i18n/dictionary.util";

type Props = {
  className?: string;
} & LangProps;

export default async function Footer({ className, lang }: Props) {
  const { layout } = await getDictionary(lang);

  return (
    <footer
      className={clsx(
        "mt-4 px-14 pt-14 pb-8 flex flex-col gap-4",
        className,
        styles.footer
      )}
    >
      <div>CONTENT</div>
      <hr />
      <div className="flex gap-4 justify-between items-center">
        <small>
          © {new Date().getFullYear()} {CONFIG.COMPANY_NAME}.{" "}
          {layout.footer.Copyright}.
        </small>
        <Social />
      </div>
    </footer>
  );
}

const Social = () => {
  const items: { icon: ReactNode; href: string | null; a11yLabel: string }[] = [
    { icon: <GitHub />, href: SOCIAL.github, a11yLabel: "GitHub" },
    { icon: <LinkedIn />, href: SOCIAL.linkedin, a11yLabel: "LinkedIn" },
    { icon: <X />, href: SOCIAL.x, a11yLabel: "X (Twitter)" },
    { icon: <YouTube />, href: SOCIAL.youtube, a11yLabel: "YouTube" },
  ];

  return (
    <div className="flex gap-2">
      {items
        .filter(({ href }) => href !== null)
        .map(({ href, a11yLabel, icon }, i) => (
          <Link target="_blank" href={href!} key={i} aria-label={a11yLabel}>
            {icon}
          </Link>
        ))}
    </div>
  );
};
