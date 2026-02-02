import { useAtom, useAtomValue, useSetAtom } from "jotai";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Tag from "../../common/Tag";
import InfoSection from "../../common/InfoSection";
import {
  infoDetailDrawerOpenAtom,
  infoDetailSelectionAtom,
  type InfoCategory,
} from "@/apps/give-birth-to-roadmap/atom/infoDetailAtom";
import {
  activeWeekAtom,
  selectedTrimesterAtom,
  weekDrawerOpenAtom,
} from "@/apps/give-birth-to-roadmap/atom/roadmapAtom";
import {
  buildWeekSections,
  getTrimesterLabel,
} from "../../PregnancyRoadmap/PregnancyRoadmap.utils";
import { PurchaseLink, PurchaseList, PurchaseSection } from "./WeekDetailDrawer.styled";
import type { PurchaseItem } from "./WeekDetailDrawer.types";
import { getFetalIllustration } from "@/apps/give-birth-to-roadmap/utils/common/fetalIllustration";
import { useState } from "react";

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
  const [imageOpen, setImageOpen] = useState(false);

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
              onClick={() => setImageOpen(true)}
              loading="lazy"
              decoding="async"
              sx={{
                width: 120,
                height: 84,
                borderRadius: 2,
                border: "1px solid var(--border)",
                objectFit: "cover",
                cursor: "zoom-in",
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

      <Dialog
        open={imageOpen}
        onClose={() => setImageOpen(false)}
        aria-labelledby="week-image-title"
        maxWidth="md"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px={2}
          py={1.5}
          sx={{ borderBottom: "1px solid var(--border)" }}
        >
          <Typography id="week-image-title" variant="subtitle1" fontWeight={700}>
            {activeWeek ? `${activeWeek.week}주차 태아` : "태아 이미지"}
          </Typography>
          <IconButton onClick={() => setImageOpen(false)} aria-label="닫기">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={2}
          sx={{ backgroundColor: "var(--card)", position: "relative" }}
        >
          {activeWeek ? (
            <Box
              sx={{
                width: "min(520px, 90vw)",
                aspectRatio: "1 / 1",
                borderRadius: 2,
                border: "1px solid var(--border)",
                overflow: "hidden",
                backgroundColor: "var(--card-muted)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={getFetalIllustration(activeWeek.week, activeWeek.trimester)}
                alt={`${activeWeek.week}주차 태아 확대 이미지`}
                loading="eager"
                decoding="async"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
          ) : null}
          <Typography
            variant="caption"
            sx={{
              position: "absolute",
              right: 16,
              bottom: 12,
              color: "var(--muted)",
              fontSize: 11,
              backgroundColor: "rgba(0,0,0,0.04)",
              padding: "4px 8px",
              borderRadius: 999,
            }}
          >
            AI로 생성된 그림
          </Typography>
        </Box>
      </Dialog>

      {activeWeek?.purchases?.length ? (
        <PurchaseSection>
          <Typography variant="subtitle2" fontWeight={700}>
            구매 추천 리스트
          </Typography>
          <Typography variant="body2" color="var(--muted)">
            필요한 영양제 및 준비물을 클릭해 쿠팡 파트너스 링크로 이동하세요.
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
