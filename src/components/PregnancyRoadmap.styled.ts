import styled from "@emotion/styled";

export const Header = styled.header`
  display: grid;
  gap: 12px;
`;

export const Title = styled.h1`
  font-size: clamp(28px, 4vw, 44px);
  margin: 0;
  color: #f8fafc;
`;

export const Subtitle = styled.p`
  margin: 0;
  color: #94a3b8;
  line-height: 1.6;
`;

export const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`;

export const WeekGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

export const WeekCard = styled.button`
  text-align: left;
  background: #0b1220;
  border-radius: 20px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  padding: 18px 20px;
  display: grid;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: inherit;

  &:hover {
    border-color: #6366f1;
    transform: translateY(-2px);
    box-shadow: 0 16px 32px rgba(15, 23, 42, 0.4);
  }

  &[data-active="true"] {
    border-color: #6366f1;
    background: rgba(79, 70, 229, 0.2);
  }
`;

export const WeekTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #f8fafc;
`;

export const WeekSummary = styled.p`
  margin: 0;
  color: #94a3b8;
  line-height: 1.5;
  font-size: 14px;
`;

export const DetailPanel = styled.div`
  display: grid;
  gap: 16px;
`;

export const SectionTitle = styled.h4`
  margin: 0;
  font-size: 15px;
  color: #e2e8f0;
`;

export const SectionList = styled.ul`
  margin: 8px 0 0;
  padding-left: 18px;
  color: #cbd5f5;
  display: grid;
  gap: 6px;
  font-size: 14px;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
