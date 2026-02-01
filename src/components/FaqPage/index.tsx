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
import { Chevron, FaqCard, FaqContent, FaqList, FaqSummary } from "./FaqPage.styled";

const faqItems = [
  {
    question: "임신 주차는 어떻게 계산하나요?",
    answer:
      "마지막 생리 시작일을 기준으로 계산하는 것이 일반적입니다. 개인 상황에 따라 다를 수 있으니 의료진의 안내를 따르세요.",
  },
  {
    question: "산전 검사는 얼마나 자주 해야 하나요?",
    answer:
      "임신 초기에는 4주 간격, 중기에는 2~3주, 말기에는 1~2주 간격으로 늘어날 수 있어요. 정확한 일정은 병원 지시에 따르세요.",
  },
  {
    question: "출산 가방은 언제 준비하는 게 좋을까요?",
    answer:
      "임신 32~36주 사이에 준비해두면 좋아요. 상황에 따라 더 일찍 준비하는 것도 권장됩니다.",
  },
  {
    question: "모유수유가 어려울 때 대안은 있나요?",
    answer:
      "분유 수유도 건강하게 아기를 키울 수 있는 방법입니다. 전문가와 상담해 나와 아기에게 맞는 방법을 선택하세요.",
  },
  {
    question: "신생아 필수 준비물은 무엇인가요?",
    answer:
      "기저귀, 젖병, 수유용품, 기본 의류, 침구, 안전용품 등을 우선 준비하면 좋아요.",
  },
];

export default function FaqPage() {
  const [theme, setTheme] = useAtom(themeAtom);
  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <PageLayout>
      <SectionCard>
        <Header>
          <HeaderRow>
            <Title>자주 묻는 질문</Title>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </HeaderRow>
          <TopNav />
          <Subtitle>자주 묻는 질문을 모아 한 번에 확인하세요.</Subtitle>
        </Header>
      </SectionCard>

      <SectionCard>
        <FaqList>
          {faqItems.map((item) => (
            <FaqCard key={item.question}>
              <FaqSummary>
                {item.question}
                <Chevron>
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path
                      d="M12 15.5l-6-6 1.4-1.4L12 12.7l4.6-4.6L18 9.5l-6 6z"
                      fill="currentColor"
                    />
                  </svg>
                </Chevron>
              </FaqSummary>
              <FaqContent>{item.answer}</FaqContent>
            </FaqCard>
          ))}
        </FaqList>
      </SectionCard>

      <SectionCard>
        <Disclaimer>이 FAQ는 일반적인 참고용 정보이며 의료 조언을 대체하지 않습니다.</Disclaimer>
      </SectionCard>
    </PageLayout>
  );
}
