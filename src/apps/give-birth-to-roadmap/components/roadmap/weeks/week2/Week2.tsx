import week2 from "./week2.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week2Data = week2 as WeekInfo;

export default function Week2({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week2Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
