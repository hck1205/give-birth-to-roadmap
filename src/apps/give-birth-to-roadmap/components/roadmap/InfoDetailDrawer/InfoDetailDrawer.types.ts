import type { InfoCategory } from "@/apps/give-birth-to-roadmap/atom/infoDetailAtom";

export type InfoDetail = {
  title: string;
  category: InfoCategory;
  why: string;
  caution: string;
  tests: string;
  tips?: string;
};
