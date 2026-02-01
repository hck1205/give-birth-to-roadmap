import { atom } from "jotai";

export type ThemeMode = "light" | "dark";

export const themeAtom = atom<ThemeMode>("light");
