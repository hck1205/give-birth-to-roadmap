import styled from "@emotion/styled";
import { ReactNode, useEffect } from "react";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../atom/themeAtom";

const Wrapper = styled.main`
  min-height: 100vh;
  padding: 48px 24px 80px;
  background: var(--bg);
  color: var(--text);
  transition: background 0.2s ease, color 0.2s ease;
`;

const Content = styled.div`
  width: min(1100px, 100%);
  margin: 0 auto;
  display: grid;
  gap: 32px;
`;

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  const theme = useAtomValue(themeAtom);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <Wrapper data-theme={theme}>
      <Content>{children}</Content>
    </Wrapper>
  );
}
