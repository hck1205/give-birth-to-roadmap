import styled from "@emotion/styled";
import Tag from "../../common/Tag";
import { formatWeekLabel } from "../../PregnancyRoadmap/PregnancyRoadmap.utils";
import type { WeekInfo } from "@/apps/give-birth-to-roadmap/types/WeekInfo";
import { getFetalIllustration } from "@/apps/give-birth-to-roadmap/utils/common/fetalIllustration";
import { useInViewOnce } from "@/apps/give-birth-to-roadmap/utils/common/useInViewOnce";

type WeekCardProps = {
  week: WeekInfo;
  isActive: boolean;
  onSelect: (week: number) => void;
  isPriority?: boolean;
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

const Illustration = styled.div`
  width: 68px;
  height: 52px;
  border-radius: 12px;
  border: 1px solid var(--border);
  overflow: hidden;
  display: grid;
  place-items: center;
  background: var(--card);
`;

const IllustrationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const IllustrationPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, #e2e8f0, #f8fafc, #e2e8f0);
  background-size: 200% 200%;
  animation: shimmer 1.6s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
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

export default function WeekCard({ week, isActive, onSelect, isPriority }: WeekCardProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const shouldRenderImage = isPriority || inView;

  return (
    <Card
      type="button"
      $active={isActive}
      onClick={() => onSelect(week.week)}
      aria-pressed={isActive}
      aria-label={`${week.week}주차 선택`}
    >
      <TopRow>
        <Illustration ref={ref}>
          {shouldRenderImage ? (
            <IllustrationImage
              src={getFetalIllustration(week.week, week.trimester)}
              alt={`${week.week}주차 태아`}
              loading={isPriority ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={isPriority ? "high" : "auto"}
            />
          ) : (
            <IllustrationPlaceholder />
          )}
        </Illustration>
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
