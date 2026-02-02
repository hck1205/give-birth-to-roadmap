import RecoveryGuidePage from "../../components/RecoveryGuidePage";
import Seo from "../../components/common/Seo";

export default function RecoveryPage() {
  return (
    <>
      <Seo
        title="산모 회복 가이드 | 산후조리·식단·운동"
        description="산모 회복을 위한 산후조리, 식단, 운동 가이드를 확인하세요."
        path="/apps/give-birth-to-roadmap/recovery"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "산모 회복 가이드 | 산후조리·식단·운동",
          description: "산모 회복을 위한 산후조리, 식단, 운동 가이드를 확인하세요.",
        }}
      />
      <RecoveryGuidePage />
    </>
  );
}
