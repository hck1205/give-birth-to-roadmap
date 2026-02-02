import week11 from "./week11.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week11Data = week11 as WeekInfo;

export default function Week11({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week11Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
