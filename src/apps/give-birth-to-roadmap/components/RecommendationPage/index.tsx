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
  CategoryDescription,
  CategoryGrid,
  CategoryHeader,
  CategoryTitle,
  ChipButton,
  Chips,
  EmptyState,
  ItemCard,
  ItemGrid,
  ItemName,
  ItemNote,
  ItemLinks,
  ItemLink,
  SearchInput,
  SearchSection,
} from "./RecommendationPage.styled";
import { useAtom } from "jotai";
import { themeAtom } from "@/apps/give-birth-to-roadmap/atom/themeAtom";
import { BASE_APP_PATH } from "@/apps/give-birth-to-roadmap/constants/appPaths";

type RecommendationItem = {
  name: string;
  note: string;
  keywords: string[];
  links: Array<{ label: string; url: string }>;
};

type RecommendationCategory = {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  items: RecommendationItem[];
};

const synonymMap: Record<string, string[]> = {
  유모차: ["스트롤러", "stroller", "외출", "산책"],
  젖병: ["병", "수유병", "젖꼭지", "니플", "분유"],
  수유: ["모유", "분유", "젖병", "수유패드", "수유브라", "유축기"],
  모유: ["수유", "유축", "유축기", "수유패드"],
  분유: ["수유", "젖병", "분유포트", "워머"],
  기저귀: ["배변", "팬티형", "테이프형"],
  옷: ["의류", "바디수트", "우주복", "배냇저고리", "내의"],
  신발: ["양말", "부츠", "신생아 신발"],
  안전: ["안전용품", "코너가드", "문고리", "콘센트", "침대가드"],
  카시트: ["차량", "안전벨트", "주니어카시트"],
  침대: ["요람", "바운서", "아기침대", "베드가드"],
  매트: ["바닥", "놀이매트", "층간소음"],
  장난감: ["교구", "모빌", "치발기"],
  건강식품: ["영양제", "비타민", "철분", "엽산", "오메가3"],
  위생: ["손세정", "소독", "살균", "세탁"],
  피부: ["보습", "로션", "크림", "오일"],
  목욕: ["아기욕조", "바디워시", "샴푸"],
  체온계: ["온도계", "발열", "건강"],
  기저귀가방: ["외출가방", "수납"],
  임산부: ["임신", "임부", "산모"],
  튼살: ["스트레치마크", "보습오일"],
  허리: ["복대", "지지대", "벨트"],
};

const categories: RecommendationCategory[] = [
  {
    id: "mobility",
    title: "이동/외출",
    description: "외출과 이동에 필요한 핵심 아이템",
    keywords: ["유모차", "외출", "이동", "산책"],
    items: [
      {
        name: "유모차",
        note: "휴대/디럭스 등 라이프스타일에 맞춰 선택",
        keywords: ["스트롤러"],
        links: [
          { label: "휴대형 유모차", url: "https://example.com/stroller-compact" },
          { label: "디럭스 유모차", url: "https://example.com/stroller-deluxe" },
          { label: "트래블 시스템", url: "https://example.com/stroller-travel" },
        ],
      },
      {
        name: "힙시트/아기띠",
        note: "장시간 외출 시 어깨 부담을 줄여줘요",
        keywords: ["캐리어"],
        links: [
          { label: "힙시트", url: "https://example.com/hipseat" },
          { label: "아기띠", url: "https://example.com/carrier" },
        ],
      },
      {
        name: "기저귀 가방",
        note: "수납과 방수/세탁 편의성 확인",
        keywords: ["외출가방"],
        links: [
          { label: "백팩형", url: "https://example.com/diaper-bag-backpack" },
          { label: "토트형", url: "https://example.com/diaper-bag-tote" },
        ],
      },
    ],
  },
  {
    id: "feeding",
    title: "수유/모유/분유",
    description: "모유수유와 분유수유에 필요한 준비물",
    keywords: ["수유", "모유", "분유", "젖병"],
    items: [
      {
        name: "젖병",
        note: "용량/소재/젖꼭지 호환성을 체크",
        keywords: ["수유병"],
        links: [
          { label: "PPSU 젖병", url: "https://example.com/bottle-ppsu" },
          { label: "유리 젖병", url: "https://example.com/bottle-glass" },
        ],
      },
      {
        name: "젖꼭지",
        note: "월령에 맞는 단계 선택",
        keywords: ["니플"],
        links: [
          { label: "1단계", url: "https://example.com/nipple-stage1" },
          { label: "2단계", url: "https://example.com/nipple-stage2" },
        ],
      },
      {
        name: "유축기",
        note: "전동/수동 타입과 세척 편의성 비교",
        keywords: ["유축"],
        links: [
          { label: "전동 유축기", url: "https://example.com/pump-electric" },
          { label: "수동 유축기", url: "https://example.com/pump-manual" },
        ],
      },
      {
        name: "수유패드",
        note: "새는 모유 흡수와 피부 자극 최소화",
        keywords: ["패드"],
        links: [
          { label: "일회용", url: "https://example.com/nursing-pad-disposable" },
          { label: "세탁형", url: "https://example.com/nursing-pad-washable" },
        ],
      },
      {
        name: "수유브라/수유복",
        note: "수유 동선이 편한 디자인",
        keywords: ["수유"],
        links: [
          { label: "수유브라", url: "https://example.com/nursing-bra" },
          { label: "수유복", url: "https://example.com/nursing-wear" },
        ],
      },
      {
        name: "분유포트/워머",
        note: "온도 유지와 위생 관리가 중요",
        keywords: ["분유"],
        links: [
          { label: "분유포트", url: "https://example.com/formula-pot" },
          { label: "보틀워머", url: "https://example.com/bottle-warmer" },
        ],
      },
    ],
  },
  {
    id: "diapering",
    title: "기저귀/배변",
    description: "하루 사용량이 많은 기본 소모품",
    keywords: ["기저귀", "배변", "위생"],
    items: [
      {
        name: "기저귀",
        note: "신생아용 사이즈부터 준비",
        keywords: ["테이프형"],
        links: [
          { label: "테이프형", url: "https://example.com/diaper-tape" },
          { label: "팬티형", url: "https://example.com/diaper-pants" },
        ],
      },
      {
        name: "물티슈/거즈",
        note: "저자극 성분과 두께 확인",
        keywords: ["물티슈"],
        links: [
          { label: "물티슈", url: "https://example.com/wet-wipes" },
          { label: "거즈", url: "https://example.com/gauze" },
        ],
      },
      {
        name: "기저귀 발진 크림",
        note: "피부 보호와 보습",
        keywords: ["연고"],
        links: [
          { label: "크림", url: "https://example.com/diaper-cream" },
          { label: "밤 타입", url: "https://example.com/diaper-balm" },
        ],
      },
      {
        name: "기저귀 교환 패드",
        note: "방수/세탁이 쉬운 제품",
        keywords: ["체인지패드"],
        links: [
          { label: "휴대용", url: "https://example.com/changing-pad-portable" },
          { label: "대형", url: "https://example.com/changing-pad-large" },
        ],
      },
      {
        name: "기저귀 쓰레기통",
        note: "냄새 차단 기능 확인",
        keywords: ["쓰레기통"],
        links: [
          { label: "밀폐형", url: "https://example.com/diaper-pail-sealed" },
          { label: "리필형", url: "https://example.com/diaper-pail-refill" },
        ],
      },
    ],
  },
  {
    id: "sleep",
    title: "수면/침구",
    description: "편안한 수면 환경을 위한 구성",
    keywords: ["침대", "수면", "요람"],
    items: [
      {
        name: "아기침대/요람",
        note: "공간과 안전 기준을 고려",
        keywords: ["요람"],
        links: [
          { label: "미니 침대", url: "https://example.com/crib-mini" },
          { label: "요람", url: "https://example.com/bassinet" },
        ],
      },
      {
        name: "아기 이불",
        note: "통기성과 계절감을 확인",
        keywords: ["침구"],
        links: [
          { label: "여름용", url: "https://example.com/blanket-summer" },
          { label: "겨울용", url: "https://example.com/blanket-winter" },
        ],
      },
      {
        name: "수면조끼/스와들",
        note: "포근함과 안정감을 제공",
        keywords: ["스와들"],
        links: [
          { label: "수면조끼", url: "https://example.com/sleep-sack" },
          { label: "스와들", url: "https://example.com/swaddle" },
        ],
      },
      {
        name: "모니터/센서",
        note: "수면 중 모니터링 용도",
        keywords: ["베이비모니터"],
        links: [
          { label: "카메라형", url: "https://example.com/baby-monitor-camera" },
          { label: "센서형", url: "https://example.com/baby-monitor-sensor" },
        ],
      },
    ],
  },
  {
    id: "safety",
    title: "안전용품",
    description: "집안에서 안전을 지키는 필수품",
    keywords: ["안전", "안전용품", "카시트"],
    items: [
      {
        name: "카시트",
        note: "신생아용/영유아용 사이즈 확인",
        keywords: ["차량"],
        links: [
          { label: "신생아용", url: "https://example.com/car-seat-newborn" },
          { label: "영유아용", url: "https://example.com/car-seat-infant" },
        ],
      },
      {
        name: "코너가드",
        note: "테이블/가구 모서리 보호",
        keywords: ["안전"],
        links: [
          { label: "투명형", url: "https://example.com/corner-guard-clear" },
          { label: "쿠션형", url: "https://example.com/corner-guard-cushion" },
        ],
      },
      {
        name: "콘센트 커버",
        note: "접근 차단용",
        keywords: ["전기"],
        links: [
          { label: "단독형", url: "https://example.com/outlet-cover" },
          { label: "멀티탭형", url: "https://example.com/power-strip-cover" },
        ],
      },
      {
        name: "문열림 방지",
        note: "손 끼임 사고 예방",
        keywords: ["도어락"],
        links: [
          { label: "도어 스토퍼", url: "https://example.com/door-stopper" },
          { label: "손 끼임 방지", url: "https://example.com/finger-guard" },
        ],
      },
    ],
  },
  {
    id: "health",
    title: "건강/의료",
    description: "기본 건강 체크와 응급 대응",
    keywords: ["체온계", "건강", "의료"],
    items: [
      {
        name: "체온계",
        note: "귀/이마/겨드랑이 등 사용 방식 확인",
        keywords: ["온도계"],
        links: [
          { label: "귀 체온계", url: "https://example.com/thermometer-ear" },
          { label: "이마 체온계", url: "https://example.com/thermometer-forehead" },
        ],
      },
      {
        name: "콧물 흡입기",
        note: "코막힘 완화",
        keywords: ["흡입기"],
        links: [
          { label: "수동 흡입기", url: "https://example.com/nasal-aspirator-manual" },
          { label: "전동 흡입기", url: "https://example.com/nasal-aspirator-electric" },
        ],
      },
      {
        name: "손톱깎이",
        note: "신생아 전용 안전 디자인",
        keywords: ["손톱"],
        links: [
          { label: "안전 가위", url: "https://example.com/baby-scissors" },
          { label: "손톱깎이", url: "https://example.com/baby-nail-clipper" },
        ],
      },
      {
        name: "응급 키트",
        note: "소독약/거즈 등 기본 구성",
        keywords: ["응급"],
        links: [
          { label: "기본 키트", url: "https://example.com/first-aid-basic" },
          { label: "휴대용 키트", url: "https://example.com/first-aid-portable" },
        ],
      },
    ],
  },
  {
    id: "bath",
    title: "위생/목욕",
    description: "피부와 위생을 위한 기본 구성",
    keywords: ["위생", "목욕", "피부"],
    items: [
      {
        name: "아기욕조",
        note: "미끄럼 방지와 배수 확인",
        keywords: ["목욕"],
        links: [
          { label: "접이식", url: "https://example.com/baby-bath-fold" },
          { label: "일반형", url: "https://example.com/baby-bath-basic" },
        ],
      },
      {
        name: "아기 샴푸/바디워시",
        note: "저자극/무향 제품 선호",
        keywords: ["바디"],
        links: [
          { label: "샴푸", url: "https://example.com/baby-shampoo" },
          { label: "바디워시", url: "https://example.com/baby-bodywash" },
        ],
      },
      {
        name: "보습 로션/크림",
        note: "신생아 피부 보호",
        keywords: ["보습"],
        links: [
          { label: "로션", url: "https://example.com/baby-lotion" },
          { label: "크림", url: "https://example.com/baby-cream" },
        ],
      },
      {
        name: "손세정/살균용품",
        note: "외출 후 위생 관리",
        keywords: ["살균"],
        links: [
          { label: "손세정제", url: "https://example.com/hand-sanitizer" },
          { label: "살균 스프레이", url: "https://example.com/sanitizer-spray" },
        ],
      },
      {
        name: "세탁세제",
        note: "유아용 저자극 제품",
        keywords: ["세탁"],
        links: [
          { label: "액체형", url: "https://example.com/baby-detergent-liquid" },
          { label: "분말형", url: "https://example.com/baby-detergent-powder" },
        ],
      },
    ],
  },
  {
    id: "clothing",
    title: "의류/신발",
    description: "성장과 계절을 고려한 의류 준비",
    keywords: ["옷", "의류", "신발"],
    items: [
      {
        name: "배냇저고리",
        note: "신생아 초기 기본 의류",
        keywords: ["내의"],
        links: [
          { label: "면 소재", url: "https://example.com/newborn-top-cotton" },
          { label: "여름용", url: "https://example.com/newborn-top-summer" },
        ],
      },
      {
        name: "바디수트",
        note: "교체가 쉬운 디자인",
        keywords: ["롬퍼"],
        links: [
          { label: "반팔", url: "https://example.com/bodysuit-short" },
          { label: "긴팔", url: "https://example.com/bodysuit-long" },
        ],
      },
      {
        name: "겉싸개",
        note: "외출 시 보온용",
        keywords: ["담요"],
        links: [
          { label: "사계절용", url: "https://example.com/swaddle-allseason" },
          { label: "겨울용", url: "https://example.com/swaddle-winter" },
        ],
      },
      {
        name: "신생아 양말/신발",
        note: "발 보호와 체온 유지",
        keywords: ["신발"],
        links: [
          { label: "양말", url: "https://example.com/newborn-socks" },
          { label: "신발", url: "https://example.com/newborn-shoes" },
        ],
      },
    ],
  },
  {
    id: "play",
    title: "놀이/발달",
    description: "오감 자극과 발달을 위한 장난감",
    keywords: ["장난감", "교구", "모빌"],
    items: [
      {
        name: "모빌",
        note: "시각 자극과 안정감",
        keywords: ["모빌"],
        links: [
          { label: "침대형", url: "https://example.com/mobile-crib" },
          { label: "휴대형", url: "https://example.com/mobile-portable" },
        ],
      },
      {
        name: "치발기",
        note: "잇몸 마사지와 안전한 소재",
        keywords: ["치발"],
        links: [
          { label: "실리콘", url: "https://example.com/teether-silicone" },
          { label: "목재", url: "https://example.com/teether-wood" },
        ],
      },
      {
        name: "촉감 놀이 매트",
        note: "감각 발달에 도움",
        keywords: ["놀이"],
        links: [
          { label: "촉감 매트", url: "https://example.com/sensory-mat" },
          { label: "액티비티 매트", url: "https://example.com/activity-mat" },
        ],
      },
      {
        name: "딸랑이",
        note: "청각 자극과 소근육 발달",
        keywords: ["라틀"],
        links: [
          { label: "손잡이형", url: "https://example.com/rattle-handle" },
          { label: "소프트형", url: "https://example.com/rattle-soft" },
        ],
      },
    ],
  },
  {
    id: "home",
    title: "생활/공간",
    description: "생활 동선과 공간을 정리하는 아이템",
    keywords: ["매트", "바닥", "시트"],
    items: [
      {
        name: "놀이매트/바닥매트",
        note: "층간 소음과 충격 완화",
        keywords: ["매트"],
        links: [
          { label: "폴더형", url: "https://example.com/floor-mat-fold" },
          { label: "롤형", url: "https://example.com/floor-mat-roll" },
        ],
      },
      {
        name: "방수 시트",
        note: "침구와 매트 오염 방지",
        keywords: ["시트"],
        links: [
          { label: "베드 시트", url: "https://example.com/waterproof-bed-sheet" },
          { label: "휴대용 시트", url: "https://example.com/waterproof-pad" },
        ],
      },
      {
        name: "수납 박스",
        note: "기저귀/수유용품 정리",
        keywords: ["수납"],
        links: [
          { label: "수납 박스", url: "https://example.com/storage-box" },
          { label: "수납 바구니", url: "https://example.com/storage-basket" },
        ],
      },
      {
        name: "가습기",
        note: "실내 습도 관리",
        keywords: ["습도"],
        links: [
          { label: "가열식", url: "https://example.com/humidifier-warm" },
          { label: "초음파식", url: "https://example.com/humidifier-ultrasonic" },
        ],
      },
    ],
  },
  {
    id: "mom-ready",
    title: "출산 준비/산모 케어",
    description: "출산 전후 산모를 위한 준비물",
    keywords: ["출산", "산모", "임산부"],
    items: [
      {
        name: "산모패드",
        note: "출산 후 회복기 필수품",
        keywords: ["패드"],
        links: [
          { label: "일반형", url: "https://example.com/mom-pad-basic" },
          { label: "대형", url: "https://example.com/mom-pad-large" },
        ],
      },
      {
        name: "수유패드",
        note: "모유 수유 시 누수 방지",
        keywords: ["수유"],
        links: [
          { label: "일회용", url: "https://example.com/nursing-pad-disposable" },
          { label: "세탁형", url: "https://example.com/nursing-pad-washable" },
        ],
      },
      {
        name: "수유브라",
        note: "편안한 착용감과 오픈형 디자인",
        keywords: ["수유"],
        links: [
          { label: "노와이어", url: "https://example.com/nursing-bra-soft" },
          { label: "스포츠형", url: "https://example.com/nursing-bra-sport" },
        ],
      },
      {
        name: "배냇저고리",
        note: "출산 가방에 기본으로 준비",
        keywords: ["내의"],
        links: [
          { label: "기본형", url: "https://example.com/newborn-top-basic" },
          { label: "세트", url: "https://example.com/newborn-top-set" },
        ],
      },
      {
        name: "바디필로우",
        note: "수면 자세와 허리 부담 완화",
        keywords: ["쿠션"],
        links: [
          { label: "C형", url: "https://example.com/body-pillow-c" },
          { label: "J형", url: "https://example.com/body-pillow-j" },
        ],
      },
    ],
  },
  {
    id: "mom-care",
    title: "임산부 케어/건강식품",
    description: "임신 중 건강 관리와 영양 보충",
    keywords: ["건강식품", "영양제", "임산부"],
    items: [
      {
        name: "엽산",
        note: "임신 준비/초기 필수 영양소",
        keywords: ["비타민"],
        links: [
          { label: "엽산 400mcg", url: "https://example.com/folic-acid-400" },
          { label: "엽산 800mcg", url: "https://example.com/folic-acid-800" },
        ],
      },
      {
        name: "철분",
        note: "임신 중기 이후 권장",
        keywords: ["철"],
        links: [
          { label: "철분 단일", url: "https://example.com/iron-basic" },
          { label: "철분 + 비타민C", url: "https://example.com/iron-vitc" },
        ],
      },
      {
        name: "오메가3",
        note: "DHA 포함 여부 확인",
        keywords: ["오메가"],
        links: [
          { label: "DHA 강화", url: "https://example.com/omega-dha" },
          { label: "식물성", url: "https://example.com/omega-plant" },
        ],
      },
      {
        name: "임산부 전용 비타민",
        note: "필요 영양소 조합 확인",
        keywords: ["멀티비타민"],
        links: [
          { label: "멀티비타민", url: "https://example.com/prenatal-multi" },
          { label: "구미형", url: "https://example.com/prenatal-gummy" },
        ],
      },
      {
        name: "임산부 쿠션",
        note: "수면/휴식 자세 보조",
        keywords: ["바디필로우"],
        links: [
          { label: "C형", url: "https://example.com/pillow-c" },
          { label: "U형", url: "https://example.com/pillow-u" },
        ],
      },
    ],
  },
  {
    id: "prenatal-care",
    title: "임신 중 케어/편의",
    description: "임신 기간 동안 편안함을 돕는 아이템",
    keywords: ["임산부", "임신", "케어"],
    items: [
      {
        name: "임산부 바디필로우",
        note: "수면 자세와 허리 부담 완화",
        keywords: ["쿠션", "허리"],
        links: [
          { label: "C형", url: "https://example.com/pregnancy-pillow-c" },
          { label: "U형", url: "https://example.com/pregnancy-pillow-u" },
        ],
      },
      {
        name: "튼살 케어 오일/크림",
        note: "건조함 완화와 피부 보습",
        keywords: ["튼살", "보습"],
        links: [
          { label: "오일", url: "https://example.com/stretch-oil" },
          { label: "크림", url: "https://example.com/stretch-cream" },
        ],
      },
      {
        name: "임산부 복대/허리지지대",
        note: "활동 시 허리 부담 줄이기",
        keywords: ["복대", "허리"],
        links: [
          { label: "복대", url: "https://example.com/maternity-belt" },
          { label: "지지대", url: "https://example.com/maternity-support" },
        ],
      },
      {
        name: "임산부 전용 의류",
        note: "편안한 착용감과 활동성",
        keywords: ["임산부", "옷"],
        links: [
          { label: "레깅스", url: "https://example.com/maternity-leggings" },
          { label: "원피스", url: "https://example.com/maternity-dress" },
        ],
      },
    ],
  },
];

const normalize = (value: string) => value.toLowerCase().replace(/\s+/g, "");

const expandTokens = (query: string) => {
  const rawTokens = query.split(/[\s,]+/).filter(Boolean);
  const expanded = new Set<string>();

  rawTokens.forEach((token) => {
    expanded.add(token);
    const synonyms = synonymMap[token];
    if (synonyms) {
      synonyms.forEach((synonym) => expanded.add(synonym));
    }
  });

  return Array.from(expanded);
};

const getRelatedSearches = (query: string) => {
  if (!query) return [];
  const tokens = expandTokens(query);
  const related = new Set<string>();

  tokens.forEach((token) => {
    const synonyms = synonymMap[token];
    if (synonyms) {
      synonyms.forEach((synonym) => related.add(synonym));
    }
  });

  return Array.from(related).slice(0, 8);
};

export default function RecommendationPage() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!query.trim()) {
      return categories;
    }

    const tokens = expandTokens(query).map((token) => normalize(token));

    return categories
      .map((category) => {
        const categoryTokens = [
          category.title,
          category.description,
          ...category.keywords,
        ].map((token) => normalize(token));

        const items = category.items.filter((item) => {
          const itemTokens = [
            item.name,
            item.note,
            ...item.keywords,
          ].map((token) => normalize(token));

          const haystack = [...categoryTokens, ...itemTokens].join("|");
          return tokens.some((token) => haystack.includes(token));
        });

        if (items.length === 0) {
          return null;
        }

        return { ...category, items };
      })
      .filter((category): category is RecommendationCategory => Boolean(category));
  }, [query]);

  const relatedSearches = useMemo(() => getRelatedSearches(query), [query]);

  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <>
      <SectionCard>
        <Header>
          <HeaderRow>
            <Title>
              <TitleLink to={BASE_APP_PATH}>추천 상품 카테고리</TitleLink>
            </Title>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </HeaderRow>
          <Subtitle>
            임신 중과 신생아 시기에 필요한 필수 아이템을 카테고리로 정리했어요. 검색어는
            관련 키워드와 유의어까지 함께 검색됩니다.
          </Subtitle>
        </Header>
      </SectionCard>

      <SearchSection>
        <SearchInput
          placeholder="예: 유모차, 수유, 모유, 안전, 매트"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {relatedSearches.length > 0 && (
          <Chips aria-label="관련 검색어">
            {relatedSearches.map((term) => (
              <ChipButton key={term} type="button" onClick={() => setQuery(term)}>
                {term}
              </ChipButton>
            ))}
          </Chips>
        )}
      </SearchSection>

      <SectionCard>
        <CategoryGrid>
          {filteredCategories.length === 0 && (
            <EmptyState>검색 결과가 없습니다. 다른 키워드를 입력해보세요.</EmptyState>
          )}
          {filteredCategories.map((category) => (
            <CategoryCard key={category.id}>
              <CategoryHeader>
                <CategoryTitle>{category.title}</CategoryTitle>
                <CategoryDescription>{category.description}</CategoryDescription>
              </CategoryHeader>
              <ItemGrid>
                {category.items.map((item) => (
                  <ItemCard key={item.name}>
                    <ItemName>{item.name}</ItemName>
                    <ItemNote>{item.note}</ItemNote>
                    {item.links.length > 0 && (
                      <ItemLinks>
                        {item.links.map((link) => (
                          <ItemLink key={link.url} href={link.url} target="_blank" rel="noreferrer">
                            {link.label}
                          </ItemLink>
                        ))}
                      </ItemLinks>
                    )}
                  </ItemCard>
                ))}
              </ItemGrid>
            </CategoryCard>
          ))}
        </CategoryGrid>
      </SectionCard>

      <SectionCard>
        <Disclaimer>
          이 추천 목록은 일반적인 참고 자료이며, 개인의 생활 패턴과 건강 상태에 따라 필요한
          준비물이 달라질 수 있습니다.
        </Disclaimer>
      </SectionCard>
    </>
  );
}
