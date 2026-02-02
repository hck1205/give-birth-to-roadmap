import ChecklistPage from "../../components/ChecklistPage";
import Seo from "../../components/common/Seo";

export default function Checklist() {
  return (
    <>
      <Seo
        title="출산 준비 체크리스트 | 필수 준비물"
        description="출산 준비를 위한 체크리스트를 카테고리별로 확인하세요."
        path="/apps/give-birth-to-roadmap/checklist"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "출산 준비 체크리스트 | 필수 준비물",
          description: "출산 준비를 위한 체크리스트를 카테고리별로 확인하세요.",
        }}
      />
      <ChecklistPage />
    </>
  );
}
