import week29 from "./week29.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week29Data = week29 as WeekInfo;

export default function Week29({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week29Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
