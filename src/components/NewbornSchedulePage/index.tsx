import PageLayout from "../common/PageLayout";
import SectionCard from "../common/SectionCard";
import ThemeToggle from "../common/ThemeToggle";
import TopNav from "../common/TopNav";
import {
  Disclaimer,
  Header,
  HeaderRow,
  Subtitle,
  Title,
} from "../PregnancyRoadmap/PregnancyRoadmap.styled";
import { useAtom } from "jotai";
import { themeAtom } from "../../atom/themeAtom";
import {
  ScheduleCard,
  ScheduleDescription,
  ScheduleHeader,
  ScheduleList,
  ScheduleTitle,
  SectionGrid,
  Timeline,
  TimelineContent,
  TimelineLabel,
  TimelineRow,
} from "./NewbornSchedulePage.styled";

const feedingSchedule = [
  "신생아는 2~3시간 간격으로 수유가 필요합니다.",
  "수유 후 트림을 도와주고, 기저귀 상태를 확인하세요.",
  "수유량/횟수는 아기 상태에 따라 조절하세요.",
];

const sleepSchedule = [
  "하루 14~17시간 수면이 일반적입니다.",
  "낮/밤 구분이 어려우므로 일정한 루틴을 만들어주세요.",
  "안전한 수면 환경(등으로 눕히기)을 유지하세요.",
];

const vaccineTimeline = [
  { label: "출생 직후", content: "BCG, B형간염 1차(병원 일정에 따라)" },
  { label: "1개월", content: "B형간염 2차" },
  { label: "2개월", content: "DTaP, IPV, Hib, 폐렴구균, 로타바이러스" },
  { label: "4개월", content: "DTaP, IPV, Hib, 폐렴구균, 로타바이러스" },
  { label: "6개월", content: "DTaP, IPV, Hib, 폐렴구균, B형간염 3차" },
];

export default function NewbornSchedulePage() {
  const [theme, setTheme] = useAtom(themeAtom);
  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <PageLayout>
      <SectionCard>
        <Header>
          <HeaderRow>
            <Title>신생아 케어 일정표</Title>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </HeaderRow>
          <TopNav />
          <Subtitle>수유, 수면, 예방접종 일정 요약을 한눈에 확인하세요.</Subtitle>
        </Header>
      </SectionCard>

      <SectionCard>
        <SectionGrid>
          <ScheduleCard>
            <ScheduleHeader>
              <ScheduleTitle>수유 일정</ScheduleTitle>
              <ScheduleDescription>수유 주기와 체크 포인트</ScheduleDescription>
            </ScheduleHeader>
            <ScheduleList>
              {feedingSchedule.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ScheduleList>
          </ScheduleCard>

          <ScheduleCard>
            <ScheduleHeader>
              <ScheduleTitle>수면 일정</ScheduleTitle>
              <ScheduleDescription>수면 패턴과 안전 수면</ScheduleDescription>
            </ScheduleHeader>
            <ScheduleList>
              {sleepSchedule.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ScheduleList>
          </ScheduleCard>

          <ScheduleCard>
            <ScheduleHeader>
              <ScheduleTitle>예방접종 타임라인</ScheduleTitle>
              <ScheduleDescription>월령별 권장 일정</ScheduleDescription>
            </ScheduleHeader>
            <Timeline>
              {vaccineTimeline.map((row) => (
                <TimelineRow key={row.label}>
                  <TimelineLabel>{row.label}</TimelineLabel>
                  <TimelineContent>{row.content}</TimelineContent>
                </TimelineRow>
              ))}
            </Timeline>
          </ScheduleCard>
        </SectionGrid>
      </SectionCard>

      <SectionCard>
        <Disclaimer>
          예방접종 일정은 국가/병원 지침에 따라 달라질 수 있습니다. 정확한 일정은 의료진과
          상담하세요.
        </Disclaimer>
      </SectionCard>
    </PageLayout>
  );
}
