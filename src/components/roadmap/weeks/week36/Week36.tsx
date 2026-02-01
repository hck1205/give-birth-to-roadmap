import week36 from "./week36.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week36Data = week36 as WeekInfo;

export default function Week36({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week36Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
