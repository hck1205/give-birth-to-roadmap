import week19 from "./week19.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week19Data = week19 as WeekInfo;

export default function Week19({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week19Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
