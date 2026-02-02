import week15 from "./week15.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week15Data = week15 as WeekInfo;

export default function Week15({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week15Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
