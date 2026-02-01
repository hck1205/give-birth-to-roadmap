export type WeekInfo = {
  week: number;
  trimester: 1 | 2 | 3;
  title: string;
  summary: string;
  fetalGrowth: string;
  purchases: {
    name: string;
    url: string;
  }[];
  needs: string[];
  preparation: string[];
  nutrients: string[];
  tests: string[];
  avoidFoods: string[];
  recommendedExercises: string[];
};
