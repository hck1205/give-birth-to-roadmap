import PregnancyRoadmap from "../../components/PregnancyRoadmap";
import Seo from "../../components/common/Seo";

export default function RoadmapPage() {
  return (
    <>
      <Seo
        title="임신 로드맵 | 주차별 체크리스트"
        description="임신 주차별로 필요한 체크리스트와 정보를 한눈에 볼 수 있는 로드맵입니다."
        path="/apps/give-birth-to-roadmap"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "임신 로드맵 | 주차별 체크리스트",
          description:
            "임신 주차별로 필요한 체크리스트와 정보를 한눈에 볼 수 있는 로드맵입니다.",
        }}
      />
      <PregnancyRoadmap />
    </>
  );
}
