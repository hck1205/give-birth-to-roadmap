import week40 from "./week40.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week40Data = week40 as WeekInfo;

export default function Week40({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week40Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
