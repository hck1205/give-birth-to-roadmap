import RecommendationPage from "../../components/RecommendationPage";
import Seo from "../../components/common/Seo";

export default function ProductsPage() {
  return (
    <>
      <Seo
        title="추천 상품 | 임신·신생아 준비물"
        description="임신 중과 신생아 시기에 필요한 추천 상품을 카테고리별로 확인하세요."
        path="/apps/give-birth-to-roadmap/products"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "추천 상품 | 임신·신생아 준비물",
          description:
            "임신 중과 신생아 시기에 필요한 추천 상품을 카테고리별로 확인하세요.",
        }}
      />
      <RecommendationPage />
    </>
  );
}
