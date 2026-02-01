export type WeekInfo = {
  week: number;
  trimester: 1 | 2 | 3;
  title: string;
  summary: string;
  needs: string[];
  preparation: string[];
  nutrients: string[];
  tests: string[];
  avoidFoods: string[];
  recommendedExercises: string[];
};

type TrimesterDefaults = {
  titlePrefix: string;
  summary: string;
  needs: string[];
  preparation: string[];
  nutrients: string[];
  tests: string[];
  avoidFoods: string[];
  recommendedExercises: string[];
};

const trimesterDefaults: Record<1 | 2 | 3, TrimesterDefaults> = {
  1: {
    titlePrefix: "착상과 초기 변화",
    summary: "호르몬 변화가 빠르게 진행되는 시기라 몸의 반응을 세심하게 관찰해요.",
    needs: ["입덧 및 피로 관리", "기초 건강 상태 체크", "휴식 루틴 확보"],
    preparation: ["산부인과 첫 방문 준비", "엽산 섭취 시작", "수면 패턴 조정"],
    nutrients: ["엽산", "비타민 B군", "철분 소량"],
    tests: ["임신 확인 검사"],
    avoidFoods: ["날생선", "비살균 유제품", "알코올"],
    recommendedExercises: ["가벼운 스트레칭", "짧은 산책"],
  },
  2: {
    titlePrefix: "성장 가속기",
    summary: "태아 성장 속도가 빨라지고 에너지가 회복되는 구간이에요.",
    needs: ["체중 증가 관리", "복부 변화 모니터링", "에너지 균형 유지"],
    preparation: ["태교 활동 계획", "출산 클래스 탐색", "중기 건강검진 일정 잡기"],
    nutrients: ["철분", "칼슘", "오메가-3"],
    tests: ["중기 정밀 초음파"],
    avoidFoods: ["카페인 과다", "고염식", "고당 간식"],
    recommendedExercises: ["요가", "수중 운동", "가벼운 근력 운동"],
  },
  3: {
    titlePrefix: "출산 준비",
    summary: "출산이 가까워지며 컨디션 관리와 실질적인 준비가 중요해요.",
    needs: ["부종 관리", "호흡 훈련", "수면 자세 조정"],
    preparation: ["출산 가방 준비", "병원 이동 경로 확인", "육아 공간 정리"],
    nutrients: ["단백질", "마그네슘", "수분"],
    tests: ["막달 검사"],
    avoidFoods: ["자극적인 음식", "과도한 당류", "과한 나트륨"],
    recommendedExercises: ["호흡 운동", "케겔 운동", "출산 준비 스트레칭"],
  },
};

const weekMilestones: Record<number, Partial<WeekInfo>> = {
  4: {
    tests: ["임신 확인 검사", "기초 혈액 검사"],
    needs: ["입덧 가능성 확인", "체온 변화 기록"],
  },
  8: {
    needs: ["초음파 일정 확인", "수분 섭취 증가"],
  },
  10: {
    tests: ["기형아 선별 검사 안내"],
    preparation: ["부부 건강 상담"],
  },
  12: {
    tests: ["1차 기형아 선별 검사"],
    nutrients: ["엽산", "비타민 D"],
  },
  16: {
    tests: ["기형아 2차 검사"],
    preparation: ["태교 루틴 정하기"],
  },
  20: {
    tests: ["정밀 초음파"],
    needs: ["태동 확인"],
  },
  24: {
    tests: ["임신성 당뇨 검사"],
    nutrients: ["철분", "칼슘"],
  },
  28: {
    tests: ["Rh 검사", "빈혈 검사"],
    preparation: ["출산 계획 초안 작성"],
  },
  32: {
    needs: ["태동 체크 기록"],
    preparation: ["출산 가방 체크리스트 만들기"],
  },
  34: {
    tests: ["태아 성장 초음파"],
    recommendedExercises: ["호흡 훈련", "가벼운 걷기"],
  },
  36: {
    tests: ["막달 검사", "태아 위치 확인"],
    preparation: ["병원 이동 경로 확정"],
  },
  38: {
    needs: ["진통 징후 숙지"],
    preparation: ["출산 후 회복 계획"],
  },
  40: {
    needs: ["출산 신호 체크"],
    preparation: ["응급 연락망 확인"],
  },
};

const mergeUnique = (base: string[], extra?: string[]) => {
  if (!extra || extra.length === 0) {
    return base;
  }
  return Array.from(new Set([...extra, ...base]));
};

const buildWeekInfo = (week: number): WeekInfo => {
  const trimester = week <= 13 ? 1 : week <= 27 ? 2 : 3;
  const defaults = trimesterDefaults[trimester];
  const milestone = weekMilestones[week];

  return {
    week,
    trimester,
    title: `${defaults.titlePrefix} ${week}주차`,
    summary: defaults.summary,
    needs: mergeUnique(defaults.needs, milestone?.needs),
    preparation: mergeUnique(defaults.preparation, milestone?.preparation),
    nutrients: mergeUnique(defaults.nutrients, milestone?.nutrients),
    tests: mergeUnique(defaults.tests, milestone?.tests),
    avoidFoods: mergeUnique(defaults.avoidFoods, milestone?.avoidFoods),
    recommendedExercises: mergeUnique(
      defaults.recommendedExercises,
      milestone?.recommendedExercises,
    ),
  };
};

export const pregnancyRoadmap: WeekInfo[] = Array.from({ length: 40 }, (_, index) =>
  buildWeekInfo(index + 1),
);
