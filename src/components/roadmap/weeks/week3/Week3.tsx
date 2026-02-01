import week3 from "./week3.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week3Data = week3 as WeekInfo;

export default function Week3({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week3Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
