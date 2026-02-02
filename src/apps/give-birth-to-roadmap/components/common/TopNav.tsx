import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { BASE_APP_PATH } from "@/apps/give-birth-to-roadmap/constants/appPaths";

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`;

const NavButton = styled(NavLink)`
  border-radius: 999px;
  padding: 10px 18px;
  font-weight: 600;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  &.active {
    border-color: var(--accent);
    background: var(--accent);
    color: var(--accent-contrast);
  }
`;

export default function TopNav() {
  return (
    <Nav aria-label="페이지 이동">
      <NavButton to={BASE_APP_PATH} end>
        주차별 로드맵
      </NavButton>
      <NavButton to={`${BASE_APP_PATH}/videos`}>주차별 영상</NavButton>
      <NavButton to={`${BASE_APP_PATH}/products`}>추천 상품</NavButton>
      <NavButton to={`${BASE_APP_PATH}/checklist`}>체크리스트</NavButton>
      <NavButton to={`${BASE_APP_PATH}/recovery`}>산모 회복</NavButton>
      <NavButton to={`${BASE_APP_PATH}/newborn-schedule`}>신생아 일정</NavButton>
      <NavButton to={`${BASE_APP_PATH}/faq`}>FAQ</NavButton>
      <NavButton to={`${BASE_APP_PATH}/guestbook`}>방명록</NavButton>
    </Nav>
  );
}
