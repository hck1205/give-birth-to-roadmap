import styled from "@emotion/styled";
import Tag from "../../common/Tag";
import { formatWeekLabel } from "../../PregnancyRoadmap/PregnancyRoadmap.utils";
import type { WeekInfo } from "../../../types/WeekInfo";

type WeekCardProps = {
  week: WeekInfo;
  isActive: boolean;
  onSelect: (week: number) => void;
};

const Card = styled.button<{ $active: boolean }>`
  width: 100%;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: ${({ $active }) =>
    $active ? "var(--accent-soft)" : "var(--card-muted)"};
  color: inherit;
  display: grid;
  gap: 8px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: var(--shadow);
  }
`;

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 68px 1fr;
  gap: 12px;
  align-items: center;
`;

const Illustration = styled.img`
  width: 68px;
  height: 52px;
  border-radius: 12px;
  object-fit: cover;
  border: 1px solid var(--border);
`;

const Title = styled.h3`
  margin: 0;
  font-size: 15px;
  color: var(--text);
`;

const Summary = styled.p`
  margin: 0;
  color: var(--muted);
  line-height: 1.4;
  font-size: 13px;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export default function WeekCard({ week, isActive, onSelect }: WeekCardProps) {
  return (
    <Card type="button" $active={isActive} onClick={() => onSelect(week.week)}>
      <TopRow>
        <Illustration src={week.fetalIllustration} alt={`${week.week}주차 태아`} />
        <div>
          <Title>{week.title}</Title>
          <TagRow>
            <Tag>{formatWeekLabel(week)}</Tag>
          </TagRow>
        </div>
      </TopRow>
      <Summary>{week.summary}</Summary>
    </Card>
  );
}
