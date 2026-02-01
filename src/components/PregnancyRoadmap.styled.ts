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

export const WeekSummary = styled.p`
  margin: 0;
  color: #94a3b8;
  line-height: 1.5;
  font-size: 14px;
`;

export const SectionTitle = styled.h4`
  margin: 0;
  font-size: 15px;
  color: #e2e8f0;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
