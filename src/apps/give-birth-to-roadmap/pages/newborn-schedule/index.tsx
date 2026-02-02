import NewbornSchedulePage from "../../components/NewbornSchedulePage";
import Seo from "../../components/common/Seo";

export default function NewbornSchedule() {
  return (
    <>
      <Seo
        title="신생아 케어 일정표 | 수유·수면·예방접종"
        description="신생아 수유, 수면, 예방접종 일정을 요약해 확인하세요."
        path="/apps/give-birth-to-roadmap/newborn-schedule"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "신생아 케어 일정표 | 수유·수면·예방접종",
          description: "신생아 수유, 수면, 예방접종 일정을 요약해 확인하세요.",
        }}
      />
      <NewbornSchedulePage />
    </>
  );
}
