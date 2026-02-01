import week5 from "./week5.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week5Data = week5 as WeekInfo;

export default function Week5({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week5Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
