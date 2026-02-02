import week3 from "./week3.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week3Data = week3 as WeekInfo;

export default function Week3({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week3Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
