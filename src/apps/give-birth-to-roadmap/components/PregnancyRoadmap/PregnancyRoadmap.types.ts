export type WeekSection = {
  key:
    | "needs"
    | "preparation"
    | "nutrients"
    | "tests"
    | "avoidFoods"
    | "recommendedExercises";
  title: string;
  items: string[];
};
