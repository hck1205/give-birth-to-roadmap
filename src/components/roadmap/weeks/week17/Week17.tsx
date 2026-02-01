import week17 from "./week17.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week17Data = week17 as WeekInfo;

export default function Week17({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week17Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
