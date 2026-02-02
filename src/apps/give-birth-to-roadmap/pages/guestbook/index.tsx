import GuestbookPage from "../../components/GuestbookPage";
import Seo from "../../components/common/Seo";

export default function Guestbook() {
  return (
    <>
      <Seo
        title="방명록 & Q&A | 함께 나누는 공간"
        description="질문, 답변, 자유 댓글을 남길 수 있는 방명록 공간입니다."
        path="/apps/give-birth-to-roadmap/guestbook"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "방명록 & Q&A | 함께 나누는 공간",
          description: "질문, 답변, 자유 댓글을 남길 수 있는 방명록 공간입니다.",
        }}
      />
      <GuestbookPage />
    </>
  );
}
