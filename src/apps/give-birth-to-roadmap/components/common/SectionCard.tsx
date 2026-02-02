import styled from "@emotion/styled";
import { ReactNode } from "react";

const Card = styled.section`
  background: var(--card);
  border-radius: 24px;
  padding: 28px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
`;

type SectionCardProps = {
  children: ReactNode;
};

export default function SectionCard({ children }: SectionCardProps) {
  return <Card>{children}</Card>;
}
