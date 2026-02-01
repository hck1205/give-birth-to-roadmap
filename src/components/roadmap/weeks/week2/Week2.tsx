import week2 from "./week2.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week2Data = week2 as WeekInfo;

export default function Week2({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week2Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
