import week24 from "./week24.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week24Data = week24 as WeekInfo;

export default function Week24({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week24Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
