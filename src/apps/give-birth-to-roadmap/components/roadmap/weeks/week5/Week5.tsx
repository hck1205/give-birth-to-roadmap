import week5 from "./week5.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week5Data = week5 as WeekInfo;

export default function Week5({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week5Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
