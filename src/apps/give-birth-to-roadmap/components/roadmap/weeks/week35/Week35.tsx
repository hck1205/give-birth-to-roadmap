import week35 from "./week35.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week35Data = week35 as WeekInfo;

export default function Week35({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week35Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
