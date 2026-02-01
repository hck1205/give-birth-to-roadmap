import week37 from "./week37.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week37Data = week37 as WeekInfo;

export default function Week37({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week37Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
