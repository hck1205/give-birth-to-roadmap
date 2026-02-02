import styled from "@emotion/styled";

export const CategoryGrid = styled.div`
  display: grid;
  gap: 18px;
`;

export const CategoryCard = styled.article`
  display: grid;
  gap: 12px;
  padding: 18px;
  border-radius: 18px;
  border: 1px solid var(--border);
  background: var(--card);
  box-shadow: var(--shadow);
`;

export const CategoryHeader = styled.div`
  display: grid;
  gap: 6px;
`;

export const CategoryTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: var(--text);
`;

export const CategoryDescription = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 13px;
`;

export const ItemList = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 8px;
  color: var(--text);
  line-height: 1.6;
`;

export const TipBox = styled.div`
  display: grid;
  gap: 8px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px dashed var(--border);
  background: var(--card-muted);
  color: var(--text);
  font-size: 13px;
`;
