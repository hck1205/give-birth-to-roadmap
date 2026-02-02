import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundApp from "./apps/NotFoundApp";
import AppsIndex from "./apps/AppsIndex";
import AppShell from "./routes/AppShell";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/apps" replace />} />
      <Route path="/apps" element={<AppsIndex />} />
      <Route path="/apps/:slug/*" element={<AppShell />} />
      <Route path="*" element={<NotFoundApp />} />
    </Routes>
  );
}
