import { useEffect } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import ActionButton from "../common/ActionButton";
import PageLayout from "../common/PageLayout";
import SectionCard from "../common/SectionCard";
import Tag from "../common/Tag";
import ThemeToggle from "../common/ThemeToggle";
import {
  FilterRow,
  Header,
  HeaderRow,
  SectionTitle,
  SummaryGrid,
  TagRow,
  Title,
  WeekSummary,
} from "./PregnancyRoadmap.styled";
import { getTrimesterLabel } from "./PregnancyRoadmap.utils";
import { themeAtom } from "../../atom/themeAtom";
import {
  activeWeekAtom,
  filteredWeeksByTrimesterAtom,
  loadWeeksAtom,
  selectedTrimesterAtom,
  selectedWeekAtom,
  weekDrawerOpenAtom,
  weeksLoadedAtom,
} from "../../atom/roadmapAtom";
import { InfoDetailDrawer, WeekDetailDrawer, WeekGrid } from "../roadmap";

const trimesterOptions: Array<1 | 2 | 3 | "all"> = ["all", 1, 2, 3];

export default function PregnancyRoadmap() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [selectedTrimester, setSelectedTrimester] = useAtom(selectedTrimesterAtom);
  const [selectedWeek, setSelectedWeek] = useAtom(selectedWeekAtom);
  const [, setDrawerOpen] = useAtom(weekDrawerOpenAtom);
  const filteredWeeks = useAtomValue(filteredWeeksByTrimesterAtom);
  const weeksLoaded = useAtomValue(weeksLoadedAtom);
  const loadWeeks = useSetAtom(loadWeeksAtom);
  const activeWeek = useAtomValue(activeWeekAtom);
  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  useEffect(() => {
    if (!weeksLoaded) {
      loadWeeks();
    }
  }, [loadWeeks, weeksLoaded]);

  useEffect(() => {
    if (!weeksLoaded) {
      return;
    }
    setSelectedWeek((current) => {
      if (!current && filteredWeeks.length) {
        return filteredWeeks[0].week;
      }
      return current;
    });
  }, [filteredWeeks, setSelectedWeek, weeksLoaded]);

  useEffect(() => {
    if (!filteredWeeks.length) {
      return;
    }
    const hasSelected = selectedWeek
      ? filteredWeeks.some((week) => week.week === selectedWeek)
      : false;
    if (!hasSelected) {
      setSelectedWeek(filteredWeeks[0].week);
    }
  }, [filteredWeeks, selectedWeek, setSelectedWeek]);

  return (
    <PageLayout>
      <SectionCard>
        <Header>
          <HeaderRow>
            <Title>임신 주차별 로드맵</Title>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </HeaderRow>
        </Header>
      </SectionCard>
      <SectionCard>
        <Header>
          <SectionTitle>분기 선택</SectionTitle>
          <FilterRow>
            {trimesterOptions.map((option) => (
              <ActionButton
                key={option}
                $active={selectedTrimester === option}
                onClick={() => setSelectedTrimester(option)}
              >
                {getTrimesterLabel(option)}
              </ActionButton>
            ))}
          </FilterRow>
        </Header>
      </SectionCard>

      <SummaryGrid>
        <SectionCard>
          <SectionTitle>현재 선택</SectionTitle>
          <TagRow>
            <Tag>{getTrimesterLabel(selectedTrimester)}</Tag>
            <Tag>{activeWeek ? `${activeWeek.week}주차` : "주차를 선택하세요"}</Tag>
          </TagRow>
        </SectionCard>
        <SectionCard>
          <SectionTitle>선택된 주차 요약</SectionTitle>
          <WeekSummary>
            {activeWeek ? activeWeek.summary : "주차를 선택하면 요약이 표시됩니다."}
          </WeekSummary>
        </SectionCard>
        <SectionCard>
          <SectionTitle>주차 선택 안내</SectionTitle>
          <WeekSummary>
            로드맵 카드를 클릭하면 오른쪽 패널이 열려 상세 준비 사항을 확인할 수 있습니다.
          </WeekSummary>
          <ActionButton onClick={() => setDrawerOpen(true)}>선택한 주차 보기</ActionButton>
        </SectionCard>
      </SummaryGrid>

      <SectionCard>
        <Header>
          <SectionTitle>주차별 로드맵 카드</SectionTitle>
          <WeekSummary>
            주차별 준비 내용을 카드 형태로 확인할 수 있어요. 원하는 주차를 선택해 세부 정보를
            확인하세요.
          </WeekSummary>
        </Header>
        <WeekGrid />
      </SectionCard>

      <WeekDetailDrawer />
      <InfoDetailDrawer />
    </PageLayout>
  );
}
