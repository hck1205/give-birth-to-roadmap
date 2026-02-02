import week8 from "./week8.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week8Data = week8 as WeekInfo;

export default function Week8({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week8Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
