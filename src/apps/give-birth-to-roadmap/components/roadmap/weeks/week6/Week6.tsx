import week6 from "./week6.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";

const week6Data = week6 as WeekInfo;

export default function Week6({ isActive, onSelect, isPriority }: WeekComponentProps) {
  return (
    <WeekCard
      week={week6Data}
      isActive={isActive}
      onSelect={onSelect}
      isPriority={isPriority}
    />
  );
}
