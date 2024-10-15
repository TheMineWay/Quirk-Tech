import clsx from "clsx";
import { GitHub, LinkedIn, X, YouTube } from "@mui/icons-material";
import { ReactNode } from "react";
import Link from "next/link";
import { SOCIAL } from "@/constants/social/social.constant";
import { CONFIG } from "@/constants/config/config.constant";
import Image from "next/image";
import { ROUTES } from "@/constants/routes/routes.constant";
import { I18nProps } from "@/types/i18n/i18n-props.type";

import logo from "@/assets/branding/logo/logo.png";

import styles from "./footer.module.css";

type Props = {
  className?: string;
} & I18nProps;

export default async function Footer({ className, i18n }: Props) {
  const { layout } = i18n.dictionary;
  const { links } = layout.footer;

  const footerLinks: Links = {
    [links.legal.Title]: [
      {
        text: links.legal.items.Terms,
        href: ROUTES.termsAndConditions(),
        blank: true,
      },
      {
        text: links.legal.items.Privacy,
        href: ROUTES.privacy(),
        blank: true,
      },
    ],
  };

  return (
    <footer
      className={clsx(
        "mt-4 pt-14 pb-8 flex flex-col gap-4",
        className,
        styles.footer
      )}
    >
      <Content slogan={layout.Slogan} links={footerLinks} />
      <hr />
      <div className="flex gap-4 justify-between items-center">
        <small>
          © {getCurrentYear()} {CONFIG.COMPANY_NAME}. {layout.footer.Copyright}.
        </small>
        <Social />
      </div>
    </footer>
  );
}

type LinkItem = { text: string; href: string; blank?: boolean };
type Links = Record<string, LinkItem[]>;

type ContentProps = {
  slogan: string;
  links: Links;
};

const Content = ({ slogan, links }: ContentProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between md:mb-4">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Image src={logo} height={32} alt="Logo" />
        <p className="text-2xl font-bold text-center md:text-left">{slogan}</p>
        <p className="text-sm">
          {CONFIG.COMPANY_NAME}, {getCurrentYear()}.
        </p>
      </div>
      <hr className="block md:hidden" />
      <div className="flex flex-col gap-2">
        {Object.entries(links).map(([title, items], i) => (
          <div key={i}>
            <h1 className="font-bold">{title}</h1>
            <ul>
              {items.map(({ text, href, blank }, i) => (
                <li key={i} className="pt-4">
                  <Link target={blank ? "_blank" : undefined} href={href}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

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

const getCurrentYear = () => new Date().getFullYear();
