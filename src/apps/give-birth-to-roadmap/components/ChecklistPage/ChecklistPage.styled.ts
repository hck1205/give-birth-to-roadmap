import styled from "@emotion/styled";

export const SearchSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  flex: 1 1 260px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  font-size: 15px;
`;

export const ProgressText = styled.p`
  margin: 0;
  font-size: 14px;
  color: var(--muted);
`;

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

export const ChecklistList = styled.div`
  display: grid;
  gap: 10px;
`;

export const ChecklistItem = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--card-muted);
  color: var(--text);

  input {
    margin-top: 2px;
  }
`;

export const ChecklistLabel = styled.span`
  font-size: 14px;
  line-height: 1.5;
`;
