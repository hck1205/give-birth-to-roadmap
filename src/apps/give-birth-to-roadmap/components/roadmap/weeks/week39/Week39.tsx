import week39 from "./week39.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week39Data = week39 as WeekInfo;

export default function Week39({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week39Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
