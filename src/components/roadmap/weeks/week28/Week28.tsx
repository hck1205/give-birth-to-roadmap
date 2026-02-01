import week28 from "./week28.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week28Data = week28 as WeekInfo;

export default function Week28({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week28Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
