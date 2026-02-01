import { useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import ActionButton from "./common/ActionButton";
import PageLayout from "./common/PageLayout";
import SectionCard from "./common/SectionCard";
import Tag from "./common/Tag";
import {
  FilterRow,
  Header,
  SectionTitle,
  Subtitle,
  SummaryGrid,
  TagRow,
  Title,
  WeekSummary,
} from "./PregnancyRoadmap.styled";
import { getTrimesterLabel } from "./PregnancyRoadmap.utils";
import {
  activeWeekAtom,
  filteredWeeksAtom,
  selectedTrimesterAtom,
  selectedWeekAtom,
  weekDrawerOpenAtom,
} from "../atom/roadmapAtom";
import WeekFlow from "./roadmap/WeekFlow";
import WeekDetailDrawer from "./roadmap/WeekDetailDrawer";
import "reactflow/dist/style.css";

const trimesterOptions: Array<1 | 2 | 3 | "all"> = ["all", 1, 2, 3];

export default function PregnancyRoadmap() {
  const [selectedTrimester, setSelectedTrimester] = useAtom(
    selectedTrimesterAtom,
  );
  const [selectedWeek, setSelectedWeek] = useAtom(selectedWeekAtom);
  const [, setDrawerOpen] = useAtom(weekDrawerOpenAtom);
  const filteredWeeks = useAtomValue(filteredWeeksAtom);
  const activeWeek = useAtomValue(activeWeekAtom);

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
          <Title>임신 주차별 로드맵</Title>
          <Subtitle>
            roadmap.sh/frontend 흐름처럼 단계별 진행 경로를 한눈에 확인하고,
            주차를 클릭하면 오른쪽 메뉴에서 필요한 정보를 확인할 수 있어요.
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
              {activeWeek ? `${activeWeek.week}주차` : "주차를 선택하세요"}
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
        <SectionCard>
          <SectionTitle>주차 선택 안내</SectionTitle>
          <WeekSummary>
            로드맵 카드 혹은 플로우 노드를 클릭하면 오른쪽 패널이 열려 상세
            준비 사항을 확인할 수 있습니다.
          </WeekSummary>
          <ActionButton onClick={() => setDrawerOpen(true)}>
            선택한 주차 보기
          </ActionButton>
        </SectionCard>
      </SummaryGrid>

      <SectionCard>
        <Header>
          <SectionTitle>주차별 로드맵 플로우</SectionTitle>
          <WeekSummary>
            주차별 준비 과정이 순서대로 연결됩니다. 원하는 주차를 선택해 세부
            정보를 확인하세요.
          </WeekSummary>
        </Header>
        <WeekFlow />
      </SectionCard>

      <WeekDetailDrawer />
    </PageLayout>
  );
}
