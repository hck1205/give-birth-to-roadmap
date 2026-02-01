import week30 from "./week30.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week30Data = week30 as WeekInfo;

export default function Week30({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week30Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
