import { Robots } from "next/dist/lib/metadata/types/metadata-types";

export const ROBOTS_METADATA = {
  default: {
    index: true, // Allow search engines to index this page
    follow: true, // Allow crawlers to follow the links on this page
    nocache: false, // Allow search engines to cache this page
    noimageindex: false, // Allow images to be indexed
    noarchive: false, // Allow the page to be archived
    nosnippet: false, // Allow search engines to display a snippet
  },
} satisfies Record<string, Robots>;
