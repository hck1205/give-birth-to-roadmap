import { useMemo, useState } from "react";
import SectionCard from "../common/SectionCard";
import ThemeToggle from "../common/ThemeToggle";
import {
  Disclaimer,
  Header,
  HeaderRow,
  Subtitle,
  Title,
  TitleLink,
} from "../PregnancyRoadmap/PregnancyRoadmap.styled";
import {
  CategoryCard,
  CategoryGrid,
  CategoryHeader,
  CategoryTitle,
  CategoryDescription,
  ChecklistItem,
  ChecklistLabel,
  ChecklistList,
  ProgressText,
  SearchInput,
  SearchSection,
} from "./ChecklistPage.styled";
import { useAtom } from "jotai";
import { themeAtom } from "@/apps/give-birth-to-roadmap/atom/themeAtom";
import { BASE_APP_PATH } from "@/apps/give-birth-to-roadmap/constants/appPaths";

type ChecklistTask = {
  id: string;
  label: string;
  notes?: string;
  keywords?: string[];
};

type ChecklistCategory = {
  id: string;
  title: string;
  description: string;
  tasks: ChecklistTask[];
};

const categories: ChecklistCategory[] = [
  {
    id: "prenatal",
    title: "임신 중 준비",
    description: "임신 기간에 필요한 기본 체크",
    tasks: [
      { id: "prenatal-nutrition", label: "엽산/철분 등 영양제 섭취 계획", keywords: ["영양"] },
      { id: "prenatal-checkups", label: "산전 검사 일정 캘린더 정리", keywords: ["검사"] },
      { id: "prenatal-exercise", label: "무리 없는 운동/스트레칭 루틴 만들기", keywords: ["운동"] },
      { id: "prenatal-sleep", label: "수면 자세 및 수면 환경 점검", keywords: ["수면"] },
      { id: "prenatal-work", label: "직장/생활 일정 조정 계획", keywords: ["일정"] },
    ],
  },
  {
    id: "hospital",
    title: "병원/검사",
    description: "산전 검사와 병원 일정 준비",
    tasks: [
      { id: "hospital-choose", label: "산부인과/분만 병원 선택", keywords: ["병원"] },
      { id: "hospital-reserve", label: "분만 병원 예약 및 진료 등록", keywords: ["예약"] },
      { id: "hospital-tests", label: "필수 산전 검사 일정 확인", keywords: ["검사"] },
      { id: "hospital-paper", label: "진료 기록/서류 정리", keywords: ["서류"] },
    ],
  },
  {
    id: "bag",
    title: "출산 가방",
    description: "입원/퇴원에 필요한 준비물",
    tasks: [
      { id: "bag-mom", label: "산모용 기본 의류/속옷 준비", keywords: ["산모"] },
      { id: "bag-baby", label: "아기 옷/담요 준비", keywords: ["아기"] },
      { id: "bag-docs", label: "신분증/보험/서류 챙기기", keywords: ["서류"] },
      { id: "bag-toiletries", label: "세면도구/수유용품 준비", keywords: ["세면"] },
    ],
  },
  {
    id: "home",
    title: "집 준비",
    description: "신생아 맞이 환경 점검",
    tasks: [
      { id: "home-crib", label: "수면 공간 세팅 (침대/요람)", keywords: ["침대"] },
      { id: "home-bath", label: "목욕/위생 용품 배치", keywords: ["목욕"] },
      { id: "home-safety", label: "안전용품 설치", keywords: ["안전"] },
      { id: "home-storage", label: "기저귀/수유용품 보관 정리", keywords: ["수납"] },
    ],
  },
  {
    id: "admin",
    title: "행정/보험",
    description: "출산 관련 행정 준비",
    tasks: [
      { id: "admin-insurance", label: "보험 보장 항목 확인", keywords: ["보험"] },
      { id: "admin-docs", label: "출산 관련 서류 체크", keywords: ["서류"] },
      { id: "admin-leave", label: "출산휴가/육아휴직 계획", keywords: ["휴가"] },
    ],
  },
];

const normalize = (value: string) => value.toLowerCase().replace(/\s+/g, "");

export default function ChecklistPage() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [query, setQuery] = useState("");
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const filteredCategories = useMemo(() => {
    if (!query.trim()) return categories;
    const token = normalize(query);

    return categories
      .map((category) => {
        const tasks = category.tasks.filter((task) => {
          const haystack = normalize(
            [task.label, task.notes, ...(task.keywords ?? [])].filter(Boolean).join(" ")
          );
          return haystack.includes(token);
        });
        return tasks.length ? { ...category, tasks } : null;
      })
      .filter((category): category is ChecklistCategory => Boolean(category));
  }, [query]);

  const totalTasks = categories.reduce((sum, category) => sum + category.tasks.length, 0);
  const completedTasks = Object.values(checked).filter(Boolean).length;

  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <>
      <SectionCard>
        <Header>
          <HeaderRow>
            <Title>
              <TitleLink to={BASE_APP_PATH}>임신·출산 준비 체크리스트</TitleLink>
            </Title>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </HeaderRow>
          <Subtitle>임신 기간부터 출산 준비까지 단계별로 체크하세요.</Subtitle>
        </Header>
      </SectionCard>

      <SectionCard>
        <SearchSection>
          <SearchInput
            placeholder="예: 병원, 서류, 안전, 수면"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ProgressText>
            완료 {completedTasks} / {totalTasks}
          </ProgressText>
        </SearchSection>
      </SectionCard>

      <SectionCard>
        <CategoryGrid>
          {filteredCategories.map((category) => (
            <CategoryCard key={category.id}>
              <CategoryHeader>
                <CategoryTitle>{category.title}</CategoryTitle>
                <CategoryDescription>{category.description}</CategoryDescription>
              </CategoryHeader>
              <ChecklistList>
                {category.tasks.map((task) => (
                  <ChecklistItem key={task.id}>
                    <input
                      type="checkbox"
                      checked={Boolean(checked[task.id])}
                      onChange={() =>
                        setChecked((prev) => ({ ...prev, [task.id]: !prev[task.id] }))
                      }
                    />
                    <ChecklistLabel>{task.label}</ChecklistLabel>
                  </ChecklistItem>
                ))}
              </ChecklistList>
            </CategoryCard>
          ))}
        </CategoryGrid>
      </SectionCard>

      <SectionCard>
        <Disclaimer>이 체크리스트는 참고용이며 개인 상황에 맞게 조정하세요.</Disclaimer>
      </SectionCard>
    </>
  );
}
