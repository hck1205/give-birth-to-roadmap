import week21 from "./week21.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week21Data = week21 as WeekInfo;

export default function Week21({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week21Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
