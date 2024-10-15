import { getDictionary } from "@/i18n/dictionary.util";

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
