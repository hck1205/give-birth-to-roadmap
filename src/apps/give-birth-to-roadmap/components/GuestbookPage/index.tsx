import SectionCard from "../common/SectionCard";
import ThemeToggle from "../common/ThemeToggle";
import {
  Disclaimer,
  Header,
  HeaderRow,
  Subtitle,
  Title,
  TitleLink,
} from "../PregnancyRoadmap/PregnancyRoadmap.styled";
import { useAtom } from "jotai";
import { themeAtom } from "@/apps/give-birth-to-roadmap/atom/themeAtom";
import { BASE_APP_PATH } from "@/apps/give-birth-to-roadmap/constants/appPaths";

export default function GuestbookPage() {
  const [theme, setTheme] = useAtom(themeAtom);
  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <>
      <SectionCard>
        <Header>
          <HeaderRow>
            <Title>
              <TitleLink to={BASE_APP_PATH}>방명록 & Q&A</TitleLink>
            </Title>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </HeaderRow>
          <Subtitle>
            질문, 답변, 자유 댓글을 남길 수 있는 공간입니다. 추후 Disqus 모듈을 연결하면
            서버리스 댓글이 활성화됩니다.
          </Subtitle>
        </Header>
      </SectionCard>

      <SectionCard>
        <div id="disqus_thread" />
        <Disclaimer>
          지금은 Disqus 연동 전 상태입니다. 준비가 완료되면 이 영역에 댓글 기능이 표시됩니다.
        </Disclaimer>
      </SectionCard>
    </>
  );
}
