import styled from "@emotion/styled";
import type { ReactNode } from "react";

const Title = styled.h4`
  margin: 0;
  font-size: 15px;
  color: var(--text);
`;

const List = styled.ul`
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 6px;
`;

type InfoSectionProps = {
  title: string;
  items: string[];
  onItemSelect?: (item: string) => void;
  itemSuffix?: ReactNode;
};

const ItemButton = styled.button`
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--card-muted);
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: var(--text);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    box-shadow: var(--shadow);
    transform: translateY(-1px);
  }
`;

const ItemText = styled.span`
  color: var(--text);
  font-weight: 600;
`;

const ItemHint = styled.span`
  color: var(--muted);
  font-size: 12px;
`;

export default function InfoSection({
  title,
  items,
  onItemSelect,
  itemSuffix = "자세히 보기",
}: InfoSectionProps) {
  return (
    <div>
      <Title>{title}</Title>
      <List>
        {items.map((item) => (
          <li key={item}>
            <ItemButton
              type="button"
              onClick={() => onItemSelect?.(item)}
              aria-label={`${title} 항목 상세 보기: ${item}`}
            >
              <ItemText>{item}</ItemText>
              <ItemHint>{itemSuffix}</ItemHint>
            </ItemButton>
          </li>
        ))}
      </List>
    </div>
  );
}
