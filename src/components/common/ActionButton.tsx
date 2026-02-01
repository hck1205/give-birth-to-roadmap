import styled from "@emotion/styled";

type ActionButtonProps = {
  $active?: boolean;
};

const ActionButton = styled.button<ActionButtonProps>`
  border-radius: 999px;
  padding: 10px 18px;
  font-weight: 600;
  border: 1px solid
    ${({ $active }) => ($active ? "#6366f1" : "rgba(148, 163, 184, 0.35)")};
  background: ${({ $active }) => ($active ? "#4f46e5" : "transparent")};
  color: ${({ $active }) => ($active ? "#f8fafc" : "#e2e8f0")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #818cf8;
    color: #f8fafc;
  }
`;

export default ActionButton;
