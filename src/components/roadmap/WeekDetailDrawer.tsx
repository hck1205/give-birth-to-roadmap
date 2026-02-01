import { useAtom, useAtomValue } from "jotai";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import Tag from "../common/Tag";
import InfoSection from "../common/InfoSection";
import {
  activeWeekAtom,
  selectedTrimesterAtom,
  weekDrawerOpenAtom,
} from "../../atom/roadmapAtom";
import { buildWeekSections, getTrimesterLabel } from "../PregnancyRoadmap.utils";

export default function WeekDetailDrawer() {
  const activeWeek = useAtomValue(activeWeekAtom);
  const [drawerOpen, setDrawerOpen] = useAtom(weekDrawerOpenAtom);
  const selectedTrimester = useAtomValue(selectedTrimesterAtom);

  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: 420 },
          backgroundColor: "#0f172a",
          color: "#e2e8f0",
          padding: 3,
        },
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="h6" fontWeight={700}>
            {activeWeek ? activeWeek.title : "주차를 선택하세요"}
          </Typography>
          <Box display="flex" gap={1} flexWrap="wrap">
            <Tag>{getTrimesterLabel(selectedTrimester)}</Tag>
            {activeWeek && <Tag>{`${activeWeek.week}주차`}</Tag>}
          </Box>
        </Box>
        <IconButton
          onClick={() => setDrawerOpen(false)}
          aria-label="닫기"
          sx={{ color: "#94a3b8" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: "rgba(148, 163, 184, 0.2)", my: 2 }} />

      <Typography variant="body2" color="#94a3b8" mb={2}>
        {activeWeek
          ? activeWeek.summary
          : "주차별 로드맵을 클릭하면 필요한 정보를 확인할 수 있습니다."}
      </Typography>

      <Box display="grid" gap={2}>
        {activeWeek
          ? buildWeekSections(activeWeek).map((section) => (
              <InfoSection
                key={section.title}
                title={section.title}
                items={section.items}
              />
            ))
          : null}
      </Box>
    </Drawer>
  );
}
