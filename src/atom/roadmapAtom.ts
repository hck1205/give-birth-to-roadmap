import { atom } from "jotai";

export const selectedTrimesterAtom = atom<1 | 2 | 3 | "all">("all");
export const selectedWeekAtom = atom<number | null>(null);
