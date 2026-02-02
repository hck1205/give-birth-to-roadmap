import { useAtom, useAtomValue } from "jotai";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import Tag from "../../common/Tag";
import {
  infoDetailDrawerOpenAtom,
  infoDetailSelectionAtom,
} from "@/apps/give-birth-to-roadmap/atom/infoDetailAtom";
import { DetailCard, DetailSection, DetailText, DetailTitle } from "./InfoDetailDrawer.styled";
import { getInfoDetail } from "./InfoDetailDrawer.data";

const categoryLabelMap = {
  needs: "필요 사항",
  preparation: "준비",
  nutrients: "영양",
  tests: "검사",
  avoidFoods: "피해야 할 음식",
  recommendedExercises: "추천 운동",
} as const;

export default function InfoDetailDrawer() {
  const [open, setOpen] = useAtom(infoDetailDrawerOpenAtom);
  const selection = useAtomValue(infoDetailSelectionAtom);
  const detail = selection ? getInfoDetail(selection.item, selection.category) : null;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="info-detail-title"
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: 440 },
          backgroundColor: "var(--drawer-bg)",
          color: "var(--drawer-text)",
          padding: 3,
        },
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="h6" fontWeight={700}>
            <span id="info-detail-title">
              {detail ? detail.title : "정보를 선택하세요"}
            </span>
          </Typography>
          {detail ? <Tag>{categoryLabelMap[detail.category]}</Tag> : null}
        </Box>
        <IconButton
          onClick={() => setOpen(false)}
          aria-label="닫기"
          sx={{ color: "var(--muted)" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: "var(--border)", my: 2 }} />

      {detail ? (
        <DetailSection>
          <DetailCard>
            <DetailTitle>왜 필요한가요?</DetailTitle>
            <DetailText>{detail.why}</DetailText>
          </DetailCard>
          <DetailCard>
            <DetailTitle>주의해야 할 점</DetailTitle>
            <DetailText>{detail.caution}</DetailText>
          </DetailCard>
          <DetailCard>
            <DetailTitle>검사/확인 포인트</DetailTitle>
            <DetailText>{detail.tests}</DetailText>
          </DetailCard>
        </DetailSection>
      ) : (
        <Typography variant="body2" color="var(--muted)">
          목록에서 항목을 선택하면 자세한 안내가 표시됩니다.
        </Typography>
      )}
    </Drawer>
  );
}
