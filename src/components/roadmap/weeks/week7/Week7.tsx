import week7 from "./week7.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week7Data = week7 as WeekInfo;

export default function Week7({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week7Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
