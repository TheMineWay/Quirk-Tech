import { DictionaryProps } from "@/types/i18n/dictionary-props.type";
import { LangProps } from "@/types/i18n/lang-props.type";

export type I18nProps = {
  i18n: DictionaryProps & LangProps;
};
