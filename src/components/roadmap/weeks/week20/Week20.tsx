import week20 from "./week20.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week20Data = week20 as WeekInfo;

export default function Week20({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week20Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
