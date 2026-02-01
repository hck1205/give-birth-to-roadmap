import { Helmet } from "react-helmet-async";
import FaqPage from "../../components/FaqPage";

export default function Faq() {
  return (
    <>
      <Helmet>
        <title>자주 묻는 질문 | FAQ</title>
        <meta
          name="description"
          content="임신, 출산, 신생아 준비에 대한 자주 묻는 질문과 답변을 확인하세요."
        />
        <meta property="og:title" content="자주 묻는 질문 | FAQ" />
        <meta
          property="og:description"
          content="임신, 출산, 신생아 준비에 대한 자주 묻는 질문과 답변을 확인하세요."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <FaqPage />
    </>
  );
}
