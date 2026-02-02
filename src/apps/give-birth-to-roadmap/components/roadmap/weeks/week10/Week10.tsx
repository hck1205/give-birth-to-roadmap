import week10 from "./week10.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week10Data = week10 as WeekInfo;

export default function Week10({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week10Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
