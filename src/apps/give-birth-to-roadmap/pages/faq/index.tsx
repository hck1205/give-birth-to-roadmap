import FaqPage from "../../components/FaqPage";
import Seo from "../../components/common/Seo";

export default function Faq() {
  return (
    <>
      <Seo
        title="자주 묻는 질문 | FAQ"
        description="임신, 출산, 신생아 준비에 대한 자주 묻는 질문과 답변을 확인하세요."
        path="/apps/give-birth-to-roadmap/faq"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "임신 주차는 어떻게 계산하나요?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "마지막 생리 시작일을 기준으로 계산하는 것이 일반적입니다. 개인 상황에 따라 다를 수 있으니 의료진의 안내를 따르세요.",
              },
            },
            {
              "@type": "Question",
              name: "산전 검사는 얼마나 자주 해야 하나요?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "임신 초기에는 4주 간격, 중기에는 2~3주, 말기에는 1~2주 간격으로 늘어날 수 있어요. 정확한 일정은 병원 지시에 따르세요.",
              },
            },
            {
              "@type": "Question",
              name: "출산 가방은 언제 준비하는 게 좋을까요?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "임신 32~36주 사이에 준비해두면 좋아요. 상황에 따라 더 일찍 준비하는 것도 권장됩니다.",
              },
            },
            {
              "@type": "Question",
              name: "모유수유가 어려울 때 대안은 있나요?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "분유 수유도 건강하게 아기를 키울 수 있는 방법입니다. 전문가와 상담해 나와 아기에게 맞는 방법을 선택하세요.",
              },
            },
            {
              "@type": "Question",
              name: "신생아 필수 준비물은 무엇인가요?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "기저귀, 젖병, 수유용품, 기본 의류, 침구, 안전용품 등을 우선 준비하면 좋아요.",
              },
            },
          ],
        }}
      />
      <FaqPage />
    </>
  );
}
