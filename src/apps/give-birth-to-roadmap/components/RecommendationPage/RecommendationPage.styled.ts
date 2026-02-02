import styled from "@emotion/styled";

export const SearchSection = styled.section`
  position: sticky;
  top: 12px;
  z-index: 20;
  display: grid;
  gap: 12px;
  padding: 12px;
  border-radius: 18px;
  border: 1px solid var(--border);
  background: var(--bg);
  box-shadow: var(--shadow);
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  font-size: 16px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 2px var(--accent-soft);
  }
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ChipButton = styled.button`
  border: 1px solid var(--border);
  background: var(--card-muted);
  color: var(--text);
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
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

export const ItemGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
`;

export const ItemCard = styled.div`
  display: grid;
  gap: 6px;
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--card-muted);
  color: var(--text);
`;

export const ItemName = styled.h4`
  margin: 0;
  font-size: 15px;
  color: var(--text);
`;

export const ItemNote = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.5;
`;

export const ItemLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ItemLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  text-decoration: none;
  font-size: 12px;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

export const EmptyState = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 14px;
`;
