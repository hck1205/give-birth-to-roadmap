import week16 from "./week16.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week16Data = week16 as WeekInfo;

export default function Week16({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week16Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
