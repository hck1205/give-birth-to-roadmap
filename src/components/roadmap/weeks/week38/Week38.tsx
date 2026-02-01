import week38 from "./week38.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week38Data = week38 as WeekInfo;

export default function Week38({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week38Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
