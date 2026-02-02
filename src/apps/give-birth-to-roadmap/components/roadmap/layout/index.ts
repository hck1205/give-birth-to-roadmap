import styled from "@emotion/styled";

export const WeekGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 18px;
  padding: 16px;
  border-radius: 20px;
  border: 1px solid var(--border);
  background: var(--grid-bg);
`;
