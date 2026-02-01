import styled from "@emotion/styled";

const Title = styled.h4`
  margin: 0;
  font-size: 15px;
  color: var(--text);
`;

const List = styled.ul`
  margin: 8px 0 0;
  padding-left: 18px;
  color: var(--muted);
  display: grid;
  gap: 6px;
  font-size: 14px;
`;

type InfoSectionProps = {
  title: string;
  items: string[];
};

export default function InfoSection({ title, items }: InfoSectionProps) {
  return (
    <div>
      <Title>{title}</Title>
      <List>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </List>
    </div>
  );
}
