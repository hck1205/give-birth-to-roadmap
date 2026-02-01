import { PregnancyRoadmap } from "./components";
import { pregnancyRoadmap } from "./utils/common/pregnancyRoadmap";

export default function App() {
  return <PregnancyRoadmap weeks={pregnancyRoadmap} />;
}
