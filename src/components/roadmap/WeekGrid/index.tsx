import { useAtomValue, useSetAtom } from "jotai";
import {
  filteredWeeksAtom,
  selectedWeekAtom,
  weekDrawerOpenAtom,
} from "../../../atom/roadmapAtom";
import { WeekGridContainer } from "../layout";
import { weekComponentMap } from "../weeks";

export default function WeekGrid() {
  const weeks = useAtomValue(filteredWeeksAtom);
  const selectedWeek = useAtomValue(selectedWeekAtom);
  const setSelectedWeek = useSetAtom(selectedWeekAtom);
  const setDrawerOpen = useSetAtom(weekDrawerOpenAtom);

  const handleSelect = (week: number) => {
    setSelectedWeek(week);
    setDrawerOpen(true);
  };

  return (
    <WeekGridContainer>
      {weeks.map((week) => {
        const WeekComponent = weekComponentMap[week.week];
        if (!WeekComponent) {
          return null;
        }
        return (
          <WeekComponent
            key={week.week}
            isActive={selectedWeek === week.week}
            onSelect={handleSelect}
          />
        );
      })}
    </WeekGridContainer>
  );
}
