import week31 from "./week31.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week31Data = week31 as WeekInfo;

export default function Week31({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week31Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
