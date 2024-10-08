import { Locale } from "@/constants/i18n/locale.enum";

const dictionaries = {
  [Locale.EN_US]: () =>
    import("./locales/en-us/locale").then((module) => module.en_US),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
