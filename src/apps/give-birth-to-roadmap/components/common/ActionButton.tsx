import styled from "@emotion/styled";

type ActionButtonProps = {
  $active?: boolean;
};

const ActionButton = styled.button<ActionButtonProps>`
  border-radius: 999px;
  padding: 10px 18px;
  font-weight: 600;
  border: 1px solid
    ${({ $active }) => ($active ? "var(--accent)" : "var(--border)")};
  background: ${({ $active }) => ($active ? "var(--accent)" : "transparent")};
  color: ${({ $active }) =>
    $active ? "var(--accent-contrast)" : "var(--text)"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

export default ActionButton;
