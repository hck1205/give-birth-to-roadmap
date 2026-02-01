import { useMemo } from "react";
import { useAtom } from "jotai";
import ActionButton from "./common/ActionButton";
import PageLayout from "./common/PageLayout";
import SectionCard from "./common/SectionCard";
import Tag from "./common/Tag";
import {
  DetailPanel,
  FilterRow,
  Header,
  SectionList,
  SectionTitle,
  Subtitle,
  SummaryGrid,
  TagRow,
  Title,
  WeekCard,
  WeekGrid,
  WeekSummary,
  WeekTitle,
} from "./PregnancyRoadmap.styled";
import {
  buildWeekSections,
  formatWeekLabel,
  getTrimesterLabel,
} from "./PregnancyRoadmap.utils";
import {
  filterWeeksByTrimester,
  getWeekInfoMap,
} from "../utils/common/pregnancyRoadmap.utils";
import { PregnancyRoadmapProps } from "./PregnancyRoadmap.types";
import { selectedTrimesterAtom, selectedWeekAtom } from "../atom/roadmapAtom";

const trimesterOptions: Array<1 | 2 | 3 | "all"> = ["all", 1, 2, 3];

export default function PregnancyRoadmap({ weeks }: PregnancyRoadmapProps) {
  const [selectedTrimester, setSelectedTrimester] = useAtom(
    selectedTrimesterAtom,
  );
  const [selectedWeek, setSelectedWeek] = useAtom(selectedWeekAtom);

  const filteredWeeks = useMemo(
    () => filterWeeksByTrimester(weeks, selectedTrimester),
    [weeks, selectedTrimester],
  );
  const weekMap = useMemo(() => getWeekInfoMap(weeks), [weeks]);
  const activeWeek = selectedWeek ? weekMap.get(selectedWeek) : filteredWeeks[0];

  return (
    <PageLayout>
      <SectionCard>
        <Header>
          <Title>임신 주차별 로드맵</Title>
          <Subtitle>
            1주차부터 출산 직전까지 필요한 준비와 체크리스트를 주차별로
            확인하세요. 원하는 분기를 선택하면 해당 로드맵만 모아볼 수
            있습니다.
          </Subtitle>
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
            <Tag>
              {activeWeek
                ? `${activeWeek.week}주차`
                : "주차를 선택하세요"}
            </Tag>
          </TagRow>
        </SectionCard>
        <SectionCard>
          <SectionTitle>선택된 주차 요약</SectionTitle>
          <WeekSummary>
            {activeWeek
              ? activeWeek.summary
              : "주차를 선택하면 요약이 표시됩니다."}
          </WeekSummary>
        </SectionCard>
      </SummaryGrid>

      <WeekGrid>
        {filteredWeeks.map((week) => (
          <WeekCard
            key={week.week}
            type="button"
            data-active={week.week === activeWeek?.week}
            onClick={() => setSelectedWeek(week.week)}
          >
            <WeekTitle>{week.title}</WeekTitle>
            <TagRow>
              <Tag>{formatWeekLabel(week)}</Tag>
            </TagRow>
            <WeekSummary>{week.summary}</WeekSummary>
          </WeekCard>
        ))}
      </WeekGrid>

      {activeWeek && (
        <SectionCard>
          <DetailPanel>
            <Header>
              <SectionTitle>{activeWeek.title} 상세</SectionTitle>
              <WeekSummary>{activeWeek.summary}</WeekSummary>
            </Header>
            {buildWeekSections(activeWeek).map((section) => (
              <div key={section.title}>
                <SectionTitle>{section.title}</SectionTitle>
                <SectionList>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </SectionList>
              </div>
            ))}
          </DetailPanel>
        </SectionCard>
      )}
    </PageLayout>
  );
}
