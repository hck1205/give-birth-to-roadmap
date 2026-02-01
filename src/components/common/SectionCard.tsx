import styled from "@emotion/styled";
import { ReactNode } from "react";

const Card = styled.section`
  background: #111827;
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.4);
  border: 1px solid rgba(148, 163, 184, 0.15);
`;

type SectionCardProps = {
  children: ReactNode;
};

export default function SectionCard({ children }: SectionCardProps) {
  return <Card>{children}</Card>;
}
