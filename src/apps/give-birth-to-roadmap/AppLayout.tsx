import { Outlet } from "react-router-dom";
import PageLayout from "./components/common/PageLayout";
import SectionCard from "./components/common/SectionCard";
import TopNav from "./components/common/TopNav";

export default function GiveBirthToRoadmapLayout() {
  return (
    <PageLayout>
      <SectionCard>
        <TopNav />
      </SectionCard>
      <Outlet />
    </PageLayout>
  );
}
