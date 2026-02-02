import week14 from "./week14.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week14Data = week14 as WeekInfo;

export default function Week14({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week14Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
