import week23 from "./week23.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week23Data = week23 as WeekInfo;

export default function Week23({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week23Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
