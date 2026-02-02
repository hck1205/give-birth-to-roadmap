import WeekVideoPage from "../../components/WeekVideoPage";
import Seo from "../../components/common/Seo";

export default function VideosPage() {
  return (
    <>
      <Seo
        title="주차별 영상 | 임신 주수별 추천"
        description="임신 주차별로 도움이 되는 영상과 추천 상품을 확인하세요."
        path="/apps/give-birth-to-roadmap/videos"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "주차별 영상 | 임신 주수별 추천",
          description: "임신 주차별로 도움이 되는 영상과 추천 상품을 확인하세요.",
        }}
      />
      <WeekVideoPage />
    </>
  );
}
