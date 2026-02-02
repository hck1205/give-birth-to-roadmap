import { useRoutes } from "react-router-dom";
import GiveBirthToRoadmapLayout from "./AppLayout";
import RoadmapPage from "./pages/roadmap";
import VideosPage from "./pages/videos";
import ProductsPage from "./pages/products";
import ChecklistPage from "./pages/checklist";
import RecoveryPage from "./pages/recovery";
import NewbornSchedulePage from "./pages/newborn-schedule";
import FaqPage from "./pages/faq";
import GuestbookPage from "./pages/guestbook";

export default function GiveBirthToRoadmapApp() {
  return useRoutes([
    {
      element: <GiveBirthToRoadmapLayout />,
      children: [
        { index: true, element: <RoadmapPage /> },
        { path: "videos", element: <VideosPage /> },
        { path: "products", element: <ProductsPage /> },
        { path: "checklist", element: <ChecklistPage /> },
        { path: "recovery", element: <RecoveryPage /> },
        { path: "newborn-schedule", element: <NewbornSchedulePage /> },
        { path: "faq", element: <FaqPage /> },
        { path: "guestbook", element: <GuestbookPage /> },
        { path: "*", element: <RoadmapPage /> },
      ],
    },
  ]);
}
