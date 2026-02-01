import week4 from "./week4.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week4Data = week4 as WeekInfo;

export default function Week4({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week4Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
