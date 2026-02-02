import styled from "@emotion/styled";

export const PurchaseSection = styled.div`
  display: grid;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid var(--border);
  padding: 14px;
  background: var(--card-muted);
`;

export const PurchaseList = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  display: grid;
  gap: 6px;
  font-size: 14px;
`;

export const PurchaseLink = styled.a`
  color: var(--text);
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: var(--accent);
    text-decoration: underline;
  }
`;
