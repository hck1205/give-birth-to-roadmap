import { atom } from "jotai";

export type InfoCategory =
  | "needs"
  | "preparation"
  | "nutrients"
  | "tests"
  | "avoidFoods"
  | "recommendedExercises";

export type InfoDetailSelection = {
  item: string;
  category: InfoCategory;
};

export const infoDetailSelectionAtom = atom<InfoDetailSelection | null>(null);
export const infoDetailDrawerOpenAtom = atom(false);
