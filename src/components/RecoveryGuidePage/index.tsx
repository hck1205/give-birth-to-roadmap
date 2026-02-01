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
  CategoryCard,
  CategoryDescription,
  CategoryGrid,
  CategoryHeader,
  CategoryTitle,
  ItemList,
  TipBox,
} from "./RecoveryGuidePage.styled";

const recoveryGuide = [
  {
    id: "postpartum-care",
    title: "산후조리",
    description: "회복을 최우선으로 두는 기본 원칙",
    items: [
      "출산 후 2주간은 충분한 휴식과 수면을 확보하세요.",
      "무리한 활동을 피하고, 몸 상태에 맞게 움직이세요.",
      "출혈/통증 등 이상 증상이 있으면 즉시 의료진과 상담하세요.",
      "체온을 따뜻하게 유지하고 몸의 회복 신호에 집중하세요.",
    ],
    tips: ["수면 부족은 회복을 늦출 수 있어요.", "가족/파트너와 역할 분담을 미리 정하세요."],
  },
  {
    id: "diet",
    title: "식단",
    description: "회복과 모유수유를 돕는 균형 잡힌 식사",
    items: [
      "단백질(살코기, 생선, 콩류)을 충분히 섭취하세요.",
      "수분 섭취를 늘려 탈수를 예방하세요.",
      "카페인/자극적인 음식은 과도하게 섭취하지 않아요.",
      "철분/칼슘/비타민이 포함된 식단을 구성하세요.",
    ],
    tips: ["짧고 자주 먹는 식사가 도움이 될 수 있어요."],
  },
  {
    id: "exercise",
    title: "운동",
    description: "천천히, 안전하게 회복하는 운동 루틴",
    items: [
      "의료진 허락 후 가벼운 스트레칭부터 시작하세요.",
      "케겔 운동으로 골반저 근육을 강화하세요.",
      "산책 등 저강도 유산소부터 점차 늘리세요.",
      "복직근 이완 여부를 확인하고 무리한 복근 운동은 피하세요.",
    ],
    tips: ["통증이 느껴지면 즉시 중단하고 휴식하세요."],
  },
];

export default function RecoveryGuidePage() {
  const [theme, setTheme] = useAtom(themeAtom);
  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <PageLayout>
      <SectionCard>
        <Header>
          <HeaderRow>
            <Title>산모 회복 가이드</Title>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </HeaderRow>
          <TopNav />
          <Subtitle>산후조리, 식단, 운동을 단계별로 정리했습니다.</Subtitle>
        </Header>
      </SectionCard>

      <SectionCard>
        <CategoryGrid>
          {recoveryGuide.map((section) => (
            <CategoryCard key={section.id}>
              <CategoryHeader>
                <CategoryTitle>{section.title}</CategoryTitle>
                <CategoryDescription>{section.description}</CategoryDescription>
              </CategoryHeader>
              <ItemList>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ItemList>
              {section.tips.length > 0 && (
                <TipBox>
                  {section.tips.map((tip) => (
                    <span key={tip}>• {tip}</span>
                  ))}
                </TipBox>
              )}
            </CategoryCard>
          ))}
        </CategoryGrid>
      </SectionCard>

      <SectionCard>
        <Disclaimer>
          개인의 회복 속도와 건강 상태는 다를 수 있습니다. 이상 증상이 있으면 반드시 의료진과
          상담하세요.
        </Disclaimer>
      </SectionCard>
    </PageLayout>
  );
}
