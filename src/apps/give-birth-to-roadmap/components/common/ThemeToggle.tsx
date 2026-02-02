import styled from "@emotion/styled";
import type { ThemeMode } from "@/apps/give-birth-to-roadmap/atom/themeAtom";

type ThemeToggleProps = {
  theme: ThemeMode;
  onToggle: () => void;
};

const Toggle = styled.button`
  border-radius: 999px;
  padding: 8px 16px;
  font-weight: 600;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

const Dot = styled.span<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? "var(--accent)" : "var(--muted)")};
  display: inline-block;
`;

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <Toggle
      type="button"
      onClick={onToggle}
      aria-pressed={theme === "dark"}
      aria-label={`테마 전환: 현재 ${theme === "light" ? "라이트" : "다크"} 모드`}
    >
      <Dot $active={theme === "light"} />
      {theme === "light" ? "라이트 모드" : "다크 모드"}
    </Toggle>
  );
}
