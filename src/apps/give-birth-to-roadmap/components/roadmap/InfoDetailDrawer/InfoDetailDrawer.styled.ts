import styled from "@emotion/styled";

export const DetailSection = styled.div`
  display: grid;
  gap: 10px;
`;

export const DetailCard = styled.div`
  border-radius: 14px;
  border: 1px solid var(--border);
  padding: 14px;
  background: var(--card-muted);
  display: grid;
  gap: 6px;
`;

export const DetailTitle = styled.h4`
  margin: 0;
  font-size: 15px;
  color: var(--text);
`;

export const DetailText = styled.p`
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
  font-size: 14px;
`;
