import week18 from "./week18.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week18Data = week18 as WeekInfo;

export default function Week18({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week18Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
