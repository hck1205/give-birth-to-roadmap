import { atom } from "jotai";
import { weekDataList } from "../components/roadmap/weeks/data";
import {
  filterWeeksByTrimester,
  getWeekInfoMap,
} from "../utils/common/pregnancyRoadmap.utils";

export const weeksAtom = atom(weekDataList);
export const selectedTrimesterAtom = atom<1 | 2 | 3 | "all">("all");
export const selectedWeekAtom = atom<number | null>(null);
export const weekDrawerOpenAtom = atom(false);

export const filteredWeeksAtom = atom((get) =>
  filterWeeksByTrimester(get(weeksAtom), get(selectedTrimesterAtom)),
);

export const weekMapAtom = atom((get) => getWeekInfoMap(get(weeksAtom)));

export const activeWeekAtom = atom((get) => {
  const selectedWeek = get(selectedWeekAtom);
  const weekMap = get(weekMapAtom);
  if (selectedWeek && weekMap.has(selectedWeek)) {
    return weekMap.get(selectedWeek) ?? null;
  }
  const filteredWeeks = get(filteredWeeksAtom);
  return filteredWeeks[0] ?? null;
});
