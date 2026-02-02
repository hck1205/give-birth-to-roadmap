import week40 from "./week40.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week40Data = week40 as WeekInfo;

export default function Week40({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week40Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
