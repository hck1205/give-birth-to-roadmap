import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";
import { WeekSection } from "./PregnancyRoadmap.types";

export const getTrimesterLabel = (trimester: 1 | 2 | 3 | "all") => {
  if (trimester === "all") {
    return "전체";
  }
  return `${trimester}분기`;
};

export const buildWeekSections = (week: WeekInfo): WeekSection[] => {
  return [
    { key: "needs", title: "필요 사항", items: week.needs },
    { key: "preparation", title: "준비", items: week.preparation },
    { key: "nutrients", title: "영양", items: week.nutrients },
    { key: "tests", title: "검사", items: week.tests },
    { key: "avoidFoods", title: "피해야 할 음식", items: week.avoidFoods },
    {
      key: "recommendedExercises",
      title: "추천 운동",
      items: week.recommendedExercises,
    },
  ];
};

export const formatWeekLabel = (week: WeekInfo) => {
  return `${week.week}주차 · ${week.trimester}분기`;
};
