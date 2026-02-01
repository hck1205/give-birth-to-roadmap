import week13 from "./week13.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week13Data = week13 as WeekInfo;

export default function Week13({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week13Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
