import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import type { AppManifestItem } from "./manifest-types";

const manifests = import.meta.glob("./*/manifest.ts", { eager: true });

const apps = Object.values(manifests)
  .map((module) => (module as { default: AppManifestItem }).default)
  .filter(Boolean);

const Main = styled.main`
  min-height: 100vh;
  padding: 48px 24px 80px;
  background: var(--bg);
  color: var(--text);
`;

const Content = styled.div`
  width: min(1100px, 100%);
  margin: 0 auto;
  display: grid;
  gap: 24px;
`;

const Card = styled.section`
  background: var(--card);
  border-radius: 20px;
  padding: 20px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
`;

const AppList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
`;

const AppItem = styled(Link)`
  display: grid;
  gap: 6px;
  padding: 12px 14px;
  aspect-ratio: 1 / 1;
  align-content: start;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: var(--accent);
  }
`;

const AppTitle = styled.h3`
  margin: 0;
  font-size: 15px;
`;

const AppDescription = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.5;
`;

const sortedApps = [...apps].sort((a, b) => a.name.localeCompare(b.name));

export default function AppsIndex() {
  return (
    <Main>
      <Content>
        <Card>
          <h1>Apps</h1>
          <p>Browse available apps and jump in.</p>
        </Card>
        <AppList>
          {sortedApps.map((app) => (
            <AppItem key={app.slug} to={`/apps/${app.slug}`}>
              <AppTitle>{app.name}</AppTitle>
              <AppDescription>{app.description}</AppDescription>
            </AppItem>
          ))}
        </AppList>
      </Content>
    </Main>
  );
}
