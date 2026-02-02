import week26 from "./week26.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week26Data = week26 as WeekInfo;

export default function Week26({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week26Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
