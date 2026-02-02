import week38 from "./week38.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week38Data = week38 as WeekInfo;

export default function Week38({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week38Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
