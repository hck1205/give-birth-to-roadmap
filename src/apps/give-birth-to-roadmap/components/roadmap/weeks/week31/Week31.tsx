import week31 from "./week31.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week31Data = week31 as WeekInfo;

export default function Week31({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week31Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
