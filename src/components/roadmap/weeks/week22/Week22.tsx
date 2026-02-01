import week22 from "./week22.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week22Data = week22 as WeekInfo;

export default function Week22({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week22Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
