import styled from "@emotion/styled";
import { ReactNode, useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { themeAtom } from "@/apps/give-birth-to-roadmap/atom/themeAtom";

const Wrapper = styled.main`
  min-height: 100vh;
  padding: 48px 24px 80px;
  background: var(--bg);
  color: var(--text);
  transition: background 0.2s ease, color 0.2s ease;
`;

const Content = styled.div`
  width: min(1100px, 100%);
  margin: 0 auto;
  display: grid;
  gap: 32px;
`;

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 16px;
  padding: 8px 12px;
  border-radius: 8px;
  background: var(--card);
  color: var(--text);
  border: 1px solid var(--border);
  text-decoration: none;
  z-index: 100;

  &:focus {
    top: 16px;
  }
`;

const ScrollTopButton = styled.button<{ $visible: boolean }>`
  position: fixed;
  right: 24px;
  bottom: 24px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  border-radius: 999px;
  width: 44px;
  height: 44px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: opacity 0.2s ease, transform 0.2s ease;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transform: ${({ $visible }) => ($visible ? "translateY(0)" : "translateY(6px)")};

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  const theme = useAtomValue(themeAtom);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Wrapper data-theme={theme}>
      <SkipLink href="#main-content">본문 바로가기</SkipLink>
      <Content id="main-content">{children}</Content>
      <ScrollTopButton
        type="button"
        $visible={showScrollTop}
        onClick={scrollToTop}
        aria-label="위로 올라가기"
        title="위로 올라가기"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M12 5l7 7-1.4 1.4L13 8.8V19h-2V8.8l-4.6 4.6L5 12l7-7z"
            fill="currentColor"
          />
        </svg>
      </ScrollTopButton>
    </Wrapper>
  );
}
