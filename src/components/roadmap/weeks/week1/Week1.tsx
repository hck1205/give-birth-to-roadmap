import week1 from "./week1.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week1Data = week1 as WeekInfo;

export default function Week1({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week1Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
