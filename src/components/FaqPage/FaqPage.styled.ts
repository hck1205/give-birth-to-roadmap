import styled from "@emotion/styled";

export const FaqList = styled.div`
  display: grid;
  gap: 12px;
`;

export const FaqCard = styled.details`
  border-radius: 18px;
  border: 1px solid var(--border);
  background: var(--card);
  box-shadow: var(--shadow);
  padding: 16px 18px;
  transition: border-color 0.2s ease;

  &[open] {
    border-color: var(--accent);
  }
`;

export const FaqSummary = styled.summary`
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text);

  &::-webkit-details-marker {
    display: none;
  }
`;

export const FaqContent = styled.div`
  margin-top: 12px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
`;

export const Chevron = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--card-muted);
  color: var(--text);
  transition: transform 0.2s ease, border-color 0.2s ease;

  svg {
    width: 14px;
    height: 14px;
  }

  details[open] & {
    transform: rotate(180deg);
    border-color: var(--accent);
    color: var(--accent);
  }
`;
