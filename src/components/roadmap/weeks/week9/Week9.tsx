import week9 from "./week9.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week9Data = week9 as WeekInfo;

export default function Week9({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week9Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
