import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { BASE_APP_PATH } from "@/apps/give-birth-to-roadmap/constants/appPaths";

const Main = styled.main`
  min-height: 100vh;
  padding: 48px 24px 80px;
  background: var(--bg);
  color: var(--text);
  display: grid;
  place-items: center;
`;

const Card = styled.section`
  width: min(720px, 100%);
  background: var(--card);
  border-radius: 24px;
  padding: 28px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  display: grid;
  gap: 12px;
`;

const BackLink = styled(Link)`
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
`;

export default function NotFoundApp() {
  return (
    <Main>
      <Card>
        <h1>앱을 찾을 수 없습니다</h1>
        <p>요청한 앱이 없어요. 주소를 확인해 주세요.</p>
        <BackLink to={BASE_APP_PATH}>로드맵으로 돌아가기</BackLink>
      </Card>
    </Main>
  );
}
