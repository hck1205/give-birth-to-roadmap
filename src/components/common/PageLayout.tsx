import styled from "@emotion/styled";
import { ReactNode } from "react";

const Wrapper = styled.main`
  min-height: 100vh;
  padding: 48px 24px 80px;
  background: #0f172a;
  color: #e2e8f0;
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
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}
