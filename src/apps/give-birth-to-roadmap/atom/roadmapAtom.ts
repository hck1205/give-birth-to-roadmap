import { atom } from "jotai";
import type { WeekInfo } from "../types/WeekInfo";
import { getWeekInfoMap } from "../utils/common/pregnancyRoadmap.utils";

const trimesterOrder: Array<1 | 2 | 3> = [1, 2, 3];

export const weeksAtom = atom<WeekInfo[]>([]);
export const weeksByTrimesterAtom = atom<Record<1 | 2 | 3, WeekInfo[]>>({
  1: [],
  2: [],
  3: [],
});
export const weeksLoadedAtom = atom(false);
export const selectedTrimesterAtom = atom<1 | 2 | 3 | "all">("all");
export const selectedWeekAtom = atom<number | null>(null);
export const weekDrawerOpenAtom = atom(false);
export const weeksLoadingAtom = atom(false);

export const loadWeeksAtom = atom(null, async (get, set) => {
  if (get(weeksLoadedAtom) || get(weeksLoadingAtom)) {
    return;
  }
  set(weeksLoadingAtom, true);

  const imports = [
    import("@/apps/give-birth-to-roadmap/components/roadmap/weeks/data1"),
    import("@/apps/give-birth-to-roadmap/components/roadmap/weeks/data2"),
    import("@/apps/give-birth-to-roadmap/components/roadmap/weeks/data3"),
  ];

  const [d1, d2, d3] = await Promise.all(imports);
  const byTrimester = {
    1: d1.weekDataList,
    2: d2.weekDataList,
    3: d3.weekDataList,
  } as Record<1 | 2 | 3, WeekInfo[]>;

  const orderedWeeks = trimesterOrder.flatMap((trimester) => byTrimester[trimester]);
  set(weeksByTrimesterAtom, byTrimester);
  set(weeksAtom, orderedWeeks);
  set(weeksLoadedAtom, true);
  set(weeksLoadingAtom, false);
});

export const filteredWeeksByTrimesterAtom = atom((get) => {
  const trimester = get(selectedTrimesterAtom);
  const grouped = get(weeksByTrimesterAtom);
  if (trimester === "all") {
    return trimesterOrder.flatMap((key) => grouped[key]);
  }
  return grouped[trimester] ?? [];
});

export const weekMapAtom = atom((get) => getWeekInfoMap(get(weeksAtom)));

export const activeWeekAtom = atom((get) => {
  const selectedWeek = get(selectedWeekAtom);
  const weekMap = get(weekMapAtom);
  if (selectedWeek && weekMap.has(selectedWeek)) {
    return weekMap.get(selectedWeek) ?? null;
  }
  const filteredWeeks = get(filteredWeeksByTrimesterAtom);
  return filteredWeeks[0] ?? null;
});
