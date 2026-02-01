import { Helmet } from "react-helmet-async";
import RecoveryGuidePage from "../../components/RecoveryGuidePage";

export default function RecoveryPage() {
  return (
    <>
      <Helmet>
        <title>산모 회복 가이드 | 산후조리·식단·운동</title>
        <meta
          name="description"
          content="산모 회복을 위한 산후조리, 식단, 운동 가이드를 확인하세요."
        />
        <meta property="og:title" content="산모 회복 가이드 | 산후조리·식단·운동" />
        <meta
          property="og:description"
          content="산모 회복을 위한 산후조리, 식단, 운동 가이드를 확인하세요."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <RecoveryGuidePage />
    </>
  );
}
