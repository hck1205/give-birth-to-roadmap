import styled from "@emotion/styled";

export const VideoGrid = styled.div`
  display: grid;
  gap: 16px;
`;

export const VideoDrawerContent = styled.div`
  display: grid;
  gap: 16px;
  padding: 20px;
  height: 100%;
  background: var(--bg);
`;

export const VideoDrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: var(--text);
`;

export const VideoDrawerClose = styled.button`
  border: 1px solid var(--border);
  background: var(--card-muted);
  color: var(--text);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

export const VideoDrawerBody = styled.div`
  display: grid;
  gap: 12px;
`;

export const VideoMarkdown = styled.div`
  color: var(--text);
  font-size: 14px;
  line-height: 1.7;

  & h1,
  & h2,
  & h3,
  & h4 {
    margin: 12px 0 6px;
    font-weight: 600;
    color: var(--text);
  }

  & h3 {
    font-size: 16px;
  }

  & p {
    margin: 0 0 10px;
    color: var(--muted);
  }

  & ul {
    margin: 6px 0 12px 18px;
    padding: 0;
    color: var(--muted);
  }

  & li {
    margin: 4px 0;
  }

  & strong {
    color: var(--text);
  }

  & hr {
    border: 0;
    border-top: 1px solid var(--border);
    margin: 12px 0;
  }

  & table {
    width: 100%;
    border-collapse: collapse;
    margin: 8px 0 14px;
    font-size: 13px;
  }

  & th,
  & td {
    border: 1px solid var(--border);
    padding: 6px 8px;
    text-align: left;
    vertical-align: top;
  }

  & th {
    background: var(--card-muted);
    color: var(--text);
    font-weight: 600;
  }

  & td {
    color: var(--muted);
  }

  & thead th {
    position: sticky;
    top: 0;
    z-index: 1;
  }
`;

export const VideoDrawerEmpty = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.5;
`;

export const WeekNav = styled.nav`
  position: sticky;
  top: 12px;
  z-index: 20;
  padding: 10px 12px;
  margin-bottom: 16px;
  border-radius: 18px;
  border: 1px solid var(--border);
  background: var(--bg);
  box-shadow: var(--shadow);
`;

export const WeekNavInner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
`;

export const WeekNavButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--text);
  text-decoration: none;
  font-size: 15px;
  justify-content: center;
  background: var(--card-muted);
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-1px);
  }
`;

export const WeekBlock = styled.section`
  display: grid;
  gap: 12px;
  padding: 18px;
  border-radius: 18px;
  border: 1px solid var(--border);
  background: var(--card);
  box-shadow: var(--shadow);
  scroll-margin-top: 120px;
`;

export const WeekGroup = styled.section`
  display: grid;
  gap: 14px;
  padding: 18px;
  border-radius: 22px;
  border: 1px solid var(--border);
  background: var(--card-muted);
  box-shadow: var(--shadow);
  scroll-margin-top: 120px;
`;

export const WeekGroupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const WeekGroupTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  color: var(--text);
`;

export const WeekGroupToggle = styled.button`
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

export const VideoList = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

export const VideoPartnerGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const VideoEmbedCard = styled.div`
  display: grid;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--card-muted);
`;

export const VideoFrame = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  border-radius: 10px;
  background: var(--card);
`;

export const VideoSummaryRow = styled.div`
  display: flex;
  gap: 8px 10px;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const VideoTitle = styled.span`
  flex: 1 1 200px;
  font-size: 14px;
  color: var(--text);
  line-height: 1.4;
`;

export const VideoSummaryButton = styled.button`
  flex: 0 0 auto;
  white-space: nowrap;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

export const VideoSummary = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.5;
  white-space: pre-wrap;
`;

export const VideoMeta = styled.span`
  color: var(--muted);
  font-size: 12px;
`;

export const ProductGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
`;

export const ProductCard = styled.a`
  display: grid;
  gap: 6px;
  padding: 12px;
  border-radius: 12px;
  border: 1px dashed var(--border);
  text-decoration: none;
  color: var(--text);
  background: var(--card-muted);
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-1px);
  }
`;

export const SectionHeading = styled.h3`
  margin: 0;
  font-size: 16px;
  color: var(--text);
  margin-bottom: 8px;
`;

export const SectionNote = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 13px;
`;

export const DisclaimerHeader = styled.div`
  margin-bottom: 10px;
`;

export const VideoSectionHeader = styled.div`
  margin-bottom: 12px;
`;
