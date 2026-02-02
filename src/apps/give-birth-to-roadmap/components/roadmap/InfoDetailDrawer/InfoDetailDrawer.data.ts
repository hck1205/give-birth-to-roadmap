import type { InfoCategory } from "@/apps/give-birth-to-roadmap/atom/infoDetailAtom";
import type { InfoDetail } from "./InfoDetailDrawer.types";

const nutrientDetails: Record<string, Omit<InfoDetail, "category">> = {
  엽산: {
    title: "엽산",
    why: "임신 초기 신경관 결손 위험을 낮추는 데 핵심적으로 작용하는 영양소예요.",
    caution:
      "가임기·임신 초기에는 일반적으로 1일 400mcg 수준이 권장되며, 제품 함량을 확인해 과다 복용을 피하세요.",
    tests: "개별 상태에 따라 복용량 조정이 필요할 수 있어요.",
  },
  철분: {
    title: "철분",
    why: "임신 중 혈액량이 증가해 철 결핍성 빈혈 위험이 커지므로 보충이 중요해요.",
    caution:
      "위장 불편·변비가 생길 수 있어 식후 섭취가 도움이 되고, WHO는 임신 중 30–60mg 철분과 400mcg 엽산을 권장해요.",
    tests: "헤모글로빈/페리틴 등 검사 결과를 참고해 복용량을 조절해요.",
  },
  칼슘: {
    title: "칼슘",
    why: "태아 뼈·치아 형성에 필요하고, 엄마의 골 대사에도 중요해요.",
    caution: "철분과 함께 복용 시 흡수가 떨어질 수 있어 시간을 나눠요.",
    tests: "식이 섭취가 부족하다면 의료진과 상담해요.",
  },
  "오메가-3": {
    title: "오메가-3",
    why: "DHA 등은 태아의 뇌·시각 발달에 관여하는 지방산이에요.",
    caution: "원료 품질과 중금속 검사 여부를 확인하고 권장량을 지켜요.",
    tests: "복용 시기는 의료진과 상의하는 것이 좋아요.",
  },
  "비타민 B군": {
    title: "비타민 B군",
    why: "에너지 대사를 돕고 피로 회복에 도움이 돼요.",
    caution: "과다 섭취는 피하고, 멀티비타민 중복 복용에 주의하세요.",
    tests: "필요 시 영양 상태 검사를 참고해요.",
  },
  "비타민 D": {
    title: "비타민 D",
    why: "칼슘 흡수와 면역 기능에 관여해요.",
    caution: "지용성 비타민이라 과다 복용 시 체내 축적 위험이 있어요.",
    tests: "혈중 농도를 통해 필요 용량을 조정할 수 있어요.",
  },
  마그네슘: {
    title: "마그네슘",
    why: "근육 이완과 신경 전달에 관여해 컨디션 유지에 도움을 줄 수 있어요.",
    caution: "장 트러블이 있을 수 있어 용량을 나눠 섭취하세요.",
    tests: "필요 시 혈액검사로 결핍 여부를 확인해요.",
  },
  단백질: {
    title: "단백질",
    why: "태아 성장과 엄마 체력 유지에 핵심적인 기초 영양소예요.",
    caution: "균형 잡힌 식단으로 섭취하고 과도한 보충제 의존은 피하세요.",
    tests: "체중 변화와 식사 기록을 함께 점검하는 것이 좋아요.",
  },
  수분: {
    title: "수분",
    why: "혈액량 증가, 체온 조절, 부종 완화에 도움을 줘요.",
    caution: "카페인 음료 대신 물 위주로 섭취하세요.",
    tests: "부종이나 혈압 변화가 있으면 진료를 받아요.",
  },
};

const genericByCategory: Record<InfoCategory, Omit<InfoDetail, "category">> = {
  needs: {
    title: "필요 사항",
    why: "현재 주차에 맞는 컨디션 관리와 생활 습관이 모자·태아 건강에 직접 영향을 줘요.",
    caution: "복통·출혈·두통 등 증상 변화가 있으면 즉시 상담하세요.",
    tests: "정기 검진 일정에 맞춰 상태를 확인하세요.",
  },
  preparation: {
    title: "준비",
    why: "출산과 생활 준비를 계획적으로 진행하면 스트레스를 줄이고 안전을 확보할 수 있어요.",
    caution: "한 번에 무리하지 말고 일정별로 나눠 진행하세요.",
    tests: "검진 일정과 연동해 준비 계획을 조정하세요.",
  },
  nutrients: {
    title: "영양",
    why: "태아 성장과 엄마 건강 유지에 직접적인 영향을 줘요.",
    caution: "중복 복용을 피하고 권장량을 지키는 것이 중요해요.",
    tests: "필요 시 혈액검사로 영양 상태를 확인해요.",
  },
  tests: {
    title: "검사",
    why: "임신 진행 상태를 확인하고 위험 요인을 조기에 발견하는 데 도움이 돼요.",
    caution: "검사 시기와 안내사항을 놓치지 않도록 확인하세요.",
    tests: "의료진 안내에 따라 검사 예약과 결과 확인을 진행하세요.",
  },
  avoidFoods: {
    title: "피해야 할 음식",
    why: "식중독과 특정 감염 위험을 낮추기 위해 필요해요.",
    caution:
      "비살균 유제품, 생·덜 익힌 해산물, 덜 익힌 육류는 특히 주의하고, 델리미트는 먹기 전 김이 날 때까지 재가열하세요.",
    tests: "복통·발열 등 이상 증상이 있으면 병원에 연락하세요.",
  },
  recommendedExercises: {
    title: "추천 운동",
    why: "혈액순환과 체력 유지, 스트레스 완화에 도움이 돼요.",
    caution:
      "건강한 임신이라면 주당 150분의 중강도 유산소 활동이 권장되며, 20주 이후에는 오래 누운 자세 운동을 피하세요.",
    tests: "통증, 출혈, 호흡곤란, 어지럼증이 있으면 즉시 상담하세요.",
  },
};

export const getInfoDetail = (
  item: string,
  category: InfoCategory,
): InfoDetail => {
  if (category === "nutrients" && nutrientDetails[item]) {
    return { ...nutrientDetails[item], category };
  }

  const base = genericByCategory[category];
  return {
    ...base,
    title: item,
    category,
    why: `${item}은(는) ${base.why}`,
  };
};
