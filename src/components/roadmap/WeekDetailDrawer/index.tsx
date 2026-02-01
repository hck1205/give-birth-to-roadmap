import { useAtom, useAtomValue, useSetAtom } from "jotai";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import Tag from "../../common/Tag";
import InfoSection from "../../common/InfoSection";
import {
  infoDetailDrawerOpenAtom,
  infoDetailSelectionAtom,
  type InfoCategory,
} from "../../../atom/infoDetailAtom";
import {
  activeWeekAtom,
  selectedTrimesterAtom,
  weekDrawerOpenAtom,
} from "../../../atom/roadmapAtom";
import {
  buildWeekSections,
  getTrimesterLabel,
} from "../../PregnancyRoadmap/PregnancyRoadmap.utils";
import { PurchaseLink, PurchaseList, PurchaseSection } from "./WeekDetailDrawer.styled";
import type { PurchaseItem } from "./WeekDetailDrawer.types";
import { getFetalIllustration } from "../../../utils/common/fetalIllustration";

const renderPurchaseList = (items: PurchaseItem[]) => (
  <PurchaseList>
    {items.map((item) => (
      <li key={item.name}>
        <PurchaseLink href={item.url} target="_blank" rel="noreferrer">
          {item.name}
        </PurchaseLink>
      </li>
    ))}
  </PurchaseList>
);

export default function WeekDetailDrawer() {
  const activeWeek = useAtomValue(activeWeekAtom);
  const [drawerOpen, setDrawerOpen] = useAtom(weekDrawerOpenAtom);
  const selectedTrimester = useAtomValue(selectedTrimesterAtom);
  const setInfoDrawerOpen = useSetAtom(infoDetailDrawerOpenAtom);
  const setInfoSelection = useSetAtom(infoDetailSelectionAtom);

  const handleInfoSelect = (category: InfoCategory, item: string) => {
    setInfoSelection({ category, item });
    setInfoDrawerOpen(true);
  };

  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      aria-labelledby="week-detail-title"
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: 480 },
          backgroundColor: "var(--drawer-bg)",
          color: "var(--drawer-text)",
          padding: 3,
        },
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="h6" fontWeight={700}>
            <span id="week-detail-title">
              {activeWeek ? activeWeek.title : "주차를 선택하세요"}
            </span>
          </Typography>
          <Box display="flex" gap={1} flexWrap="wrap">
            <Tag>{getTrimesterLabel(selectedTrimester)}</Tag>
            {activeWeek && <Tag>{`${activeWeek.week}주차`}</Tag>}
          </Box>
        </Box>
        <IconButton
          onClick={() => setDrawerOpen(false)}
          aria-label="닫기"
          sx={{ color: "var(--muted)" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: "var(--border)", my: 2 }} />

      <Typography variant="body2" color="var(--muted)" mb={2}>
        {activeWeek
          ? activeWeek.summary
          : "주차별 카드를 클릭하면 필요한 정보를 확인할 수 있습니다."}
      </Typography>

      {activeWeek ? (
        <Box
          display="grid"
          gap={1.5}
          mb={2}
          sx={{
            borderRadius: 2,
            border: "1px solid var(--border)",
            padding: 2,
            backgroundColor: "var(--card-muted)",
          }}
        >
          <Box display="flex" gap={2} alignItems="center">
            <Box
              component="img"
              src={getFetalIllustration(activeWeek.week, activeWeek.trimester)}
              alt={`${activeWeek.week}주차 태아`}
              sx={{
                width: 120,
                height: 84,
                borderRadius: 2,
                border: "1px solid var(--border)",
                objectFit: "cover",
              }}
            />
            <Box>
              <Typography variant="subtitle2" fontWeight={700}>
                태아 성장 스냅샷
              </Typography>
              <Typography variant="body2" color="var(--muted)">
                {activeWeek.fetalGrowth}
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : null}

      {activeWeek?.purchases?.length ? (
        <PurchaseSection>
          <Typography variant="subtitle2" fontWeight={700}>
            구매 추천 리스트
          </Typography>
          <Typography variant="body2" color="var(--muted)">
            필요한 영양제 및 준비물을 클릭해 구매 페이지로 이동하세요.
          </Typography>
          {renderPurchaseList(activeWeek.purchases)}
        </PurchaseSection>
      ) : null}

      <Box display="grid" gap={2} mt={2}>
        {activeWeek
          ? buildWeekSections(activeWeek).map((section) => (
              <InfoSection
                key={section.title}
                title={section.title}
                items={section.items}
                onItemSelect={(item) => handleInfoSelect(section.key, item)}
              />
            ))
          : null}
      </Box>
    </Drawer>
  );
}
