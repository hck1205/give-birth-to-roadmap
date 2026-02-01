import styled from "@emotion/styled";

export const SectionGrid = styled.div`
  display: grid;
  gap: 18px;
`;

export const ScheduleCard = styled.article`
  display: grid;
  gap: 12px;
  padding: 18px;
  border-radius: 18px;
  border: 1px solid var(--border);
  background: var(--card);
  box-shadow: var(--shadow);
`;

export const ScheduleHeader = styled.div`
  display: grid;
  gap: 6px;
`;

export const ScheduleTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: var(--text);
`;

export const ScheduleDescription = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 13px;
`;

export const ScheduleList = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 8px;
  color: var(--text);
  line-height: 1.6;
`;

export const Timeline = styled.div`
  display: grid;
  gap: 10px;
`;

export const TimelineRow = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 12px;
  align-items: start;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--card-muted);
`;

export const TimelineLabel = styled.span`
  font-weight: 600;
  color: var(--text);
  font-size: 13px;
`;

export const TimelineContent = styled.span`
  color: var(--text);
  font-size: 13px;
  line-height: 1.5;
`;
