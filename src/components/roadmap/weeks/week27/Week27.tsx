import week27 from "./week27.json";
import WeekCard from "../../WeekCard";
import { WeekComponentProps } from "../types";
import type { WeekInfo } from "../../../../types/WeekInfo";

const week27Data = week27 as WeekInfo;

export default function Week27({ isActive, onSelect }: WeekComponentProps) {
  return (
    <WeekCard
      week={week27Data}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}
