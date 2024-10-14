"use client";
import { Card, CardBody } from "@nextui-org/card";
import clsx from "clsx";
import { Button } from "@nextui-org/button";

import styles from "./legal-message.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/constants/routes/routes.constant";

type Props = {
  i18n: {
    message: { Cookies: string; Dummy: string; "Cookie-notice": string };
    accept: string;
  };
};

export default function LegalMessage({ i18n }: Props) {
  const [accepted, setAccepted] = useState(getCookieConsent());

  useEffect(() => {
    if (accepted) setCookieConsent(true);
  }, [accepted]);

  if (accepted) return null;

  return (
    <div className={clsx(styles.notification, "container mx-auto")}>
      <Card className="mb-8 mx-4 md:mx-0 p-2">
        <CardBody className="flex flex-col gap-2 text-justify">
          <p>
            {i18n.message.Cookies}{" "}
            <Link className="link" href={ROUTES.cookies()} target="_blank">
              {i18n.message["Cookie-notice"]}
            </Link>
          </p>
          <p>{i18n.message.Dummy}</p>
          <div className="mt-2">
            <Button onClick={() => setAccepted(true)} color="primary" size="sm">
              {i18n.accept}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

const setCookieConsent = (value: boolean): void => {
  const consentValue = value ? "true" : "false";
  const cookieName = "cookieConsent";
  const expiryDays = 365; // Cookie will last 1 year

  const date = new Date();
  date.setTime(date.getTime() + expiryDays * 24 * 60 * 60 * 1000); // Set the expiration date
  const expires = `expires=${date.toUTCString()}`;

  document.cookie = `${cookieName}=${consentValue}; ${expires}; path=/`;
};

const getCookieConsent = (): boolean => {
  const cookieName = "cookieConsent=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length) === "true";
    }
  }

  return false; // Default to false if cookie not found
};
