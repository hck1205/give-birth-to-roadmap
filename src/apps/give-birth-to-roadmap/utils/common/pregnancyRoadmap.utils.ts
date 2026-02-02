import type { WeekInfo } from "../../types/WeekInfo";

export const getWeekInfoMap = (weeks: WeekInfo[]) => {
  return new Map(weeks.map((week) => [week.week, week]));
};

export const filterWeeksByTrimester = (
  weeks: WeekInfo[],
  trimester: 1 | 2 | 3 | "all",
) => {
  if (trimester === "all") {
    return weeks;
  }
  return weeks.filter((week) => week.trimester === trimester);
};

export const getWeeksInRange = (
  weeks: WeekInfo[],
  startWeek: number,
  endWeek: number,
) => {
  return weeks.filter((week) => week.week >= startWeek && week.week <= endWeek);
};

export const groupWeeksByTrimester = (weeks: WeekInfo[]) => {
  return weeks.reduce(
    (acc, week) => {
      acc[week.trimester].push(week);
      return acc;
    },
    { 1: [] as WeekInfo[], 2: [] as WeekInfo[], 3: [] as WeekInfo[] },
  );
};
