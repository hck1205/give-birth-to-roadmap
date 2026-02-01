import week18 from "./week18.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week18Data = week18 as WeekInfo;

export default function Week18({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week18Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
