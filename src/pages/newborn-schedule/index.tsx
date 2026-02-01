import { Helmet } from "react-helmet-async";
import NewbornSchedulePage from "../../components/NewbornSchedulePage";

export default function NewbornSchedule() {
  return (
    <>
      <Helmet>
        <title>신생아 케어 일정표 | 수유·수면·예방접종</title>
        <meta
          name="description"
          content="신생아 수유, 수면, 예방접종 일정을 요약해 확인하세요."
        />
        <meta property="og:title" content="신생아 케어 일정표 | 수유·수면·예방접종" />
        <meta
          property="og:description"
          content="신생아 수유, 수면, 예방접종 일정을 요약해 확인하세요."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <NewbornSchedulePage />
    </>
  );
}
