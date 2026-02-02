import week12 from "./week12.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week12Data = week12 as WeekInfo;

export default function Week12({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week12Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
