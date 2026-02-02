import type { ComponentType } from "react";

export type WeekComponentProps = {
  isActive: boolean;
  onSelect: (week: number) => void;
  isPriority?: boolean;
};

export type WeekComponentMap = Record<number, ComponentType<WeekComponentProps>>;
