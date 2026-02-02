import week36 from "./week36.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week36Data = week36 as WeekInfo;

export default function Week36({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week36Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
