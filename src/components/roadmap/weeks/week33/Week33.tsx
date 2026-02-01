import week33 from "./week33.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week33Data = week33 as WeekInfo;

export default function Week33({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week33Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
