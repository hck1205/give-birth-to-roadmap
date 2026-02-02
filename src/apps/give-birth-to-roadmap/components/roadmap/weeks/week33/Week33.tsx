import week33 from "./week33.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week33Data = week33 as WeekInfo;

export default function Week33({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week33Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
