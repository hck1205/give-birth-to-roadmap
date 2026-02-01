import { WeekInfo } from "../utils/common/pregnancyRoadmap";

export type PregnancyRoadmapProps = {
  weeks: WeekInfo[];
};

export type WeekSection = {
  title: string;
  items: string[];
};
