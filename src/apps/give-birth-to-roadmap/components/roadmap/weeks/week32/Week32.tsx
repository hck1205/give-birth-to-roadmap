import week32 from "./week32.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week32Data = week32 as WeekInfo;

export default function Week32({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week32Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
