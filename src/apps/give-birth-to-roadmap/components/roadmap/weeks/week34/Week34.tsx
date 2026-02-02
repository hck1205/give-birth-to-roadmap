import week34 from "./week34.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week34Data = week34 as WeekInfo;

export default function Week34({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week34Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
