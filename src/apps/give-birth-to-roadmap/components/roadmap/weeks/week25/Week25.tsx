import week25 from "./week25.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week25Data = week25 as WeekInfo;

export default function Week25({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week25Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
