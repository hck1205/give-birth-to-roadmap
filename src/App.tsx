import { Navigate, Route, Routes } from "react-router-dom";
import RoadmapPage from "./pages/roadmap";
import VideosPage from "./pages/videos";
import ProductsPage from "./pages/products";
import GuestbookPage from "./pages/guestbook";
import ChecklistPage from "./pages/checklist";
import RecoveryPage from "./pages/recovery";
import FaqPage from "./pages/faq";
import NewbornSchedulePage from "./pages/newborn-schedule";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RoadmapPage />} />
      <Route path="/videos" element={<VideosPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/checklist" element={<ChecklistPage />} />
      <Route path="/recovery" element={<RecoveryPage />} />
      <Route path="/newborn-schedule" element={<NewbornSchedulePage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/guestbook" element={<GuestbookPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
