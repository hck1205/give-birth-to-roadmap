import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import Drawer from "@mui/material/Drawer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SectionCard from "../common/SectionCard";
import ThemeToggle from "../common/ThemeToggle";
import { themeAtom } from "@/apps/give-birth-to-roadmap/atom/themeAtom";
import ActionButton from "../common/ActionButton";
import {
  FilterRow,
  Header,
  HeaderRow,
  SectionTitle,
  Subtitle,
  Title,
  TitleLink,
  Disclaimer,
} from "../PregnancyRoadmap/PregnancyRoadmap.styled";
import { getTrimesterLabel } from "../PregnancyRoadmap/PregnancyRoadmap.utils";
import { BASE_APP_PATH } from "@/apps/give-birth-to-roadmap/constants/appPaths";
import {
  SectionHeading,
  VideoGrid,
  VideoList,
  VideoEmbedCard,
  VideoFrame,
  VideoSummary,
  VideoSummaryButton,
  VideoSummaryRow,
  VideoTitle,
  VideoDrawerContent,
  VideoDrawerHeader,
  VideoDrawerClose,
  VideoDrawerBody,
  VideoDrawerEmpty,
  VideoMarkdown,
  VideoPartnerGrid,
  DisclaimerHeader,
  VideoSectionHeader,
  WeekNav,
  WeekNavButton,
  WeekNavInner,
  WeekBlock,
  WeekGroup,
  WeekGroupHeader,
  WeekGroupToggle,
  WeekGroupTitle,
} from "./WeekVideoPage.styled";
import videoGroups from "./videoGroups.json";
import { videoSummaries } from "./videoSummaries";

const trimesterOptions: Array<1 | 2 | 3 | "all"> = ["all", 1, 2, 3];

type VideoGroup = {
  id: string;
  startWeek: number;
  endWeek: number;
  trimesters: Array<1 | 2 | 3>;
  title: string;
  videos: Array<{ title: string; url: string; summary?: string }>;
  products: Array<{ name: string; url: string }>;
};

const getYouTubeEmbedUrl = (url: string) => {
  if (url.includes("youtube.com/watch")) {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  }

  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1]?.split(/[?&]/)[0];
    return id ? `https://www.youtube.com/embed/${id}` : null;
  }

  return null;
};

const getYouTubeVideoId = (url: string) => {
  if (url.includes("youtube.com/watch")) {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
  }

  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1]?.split(/[?&]/)[0];
    return id || null;
  }

  return null;
};

export default function WeekVideoPage() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [selectedTrimester, setSelectedTrimester] = useState<1 | 2 | 3 | "all">("all");
  const [selectedSummary, setSelectedSummary] = useState<{
    title: string;
    summary: string;
  } | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);
  const initialGroupSetRef = useRef(false);
  const allGroups = videoGroups as VideoGroup[];
  const filteredGroups =
    selectedTrimester === "all"
      ? allGroups
      : allGroups.filter((group) => group.trimesters.includes(selectedTrimester));
  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  useEffect(() => {
    if (!filteredGroups.length) {
      initialGroupSetRef.current = false;
      setActiveGroupId(null);
      return;
    }

    if (!initialGroupSetRef.current) {
      setActiveGroupId(filteredGroups[0].id);
      initialGroupSetRef.current = true;
      return;
    }

    if (activeGroupId && !filteredGroups.some((group) => group.id === activeGroupId)) {
      setActiveGroupId(null);
    }
  }, [activeGroupId, filteredGroups]);
  const openSummary = (title: string, summary?: string) => {
    setSelectedSummary({
      title,
      summary: summary || "요약 내용을 준비 중입니다.",
    });
    setDrawerOpen(true);
  };

  return (
    <>
      <SectionCard>
        <Header>
          <HeaderRow>
            <Title>
              <TitleLink to={BASE_APP_PATH}>주차별 영상</TitleLink>
            </Title>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </HeaderRow>
        </Header>
      </SectionCard>

      <WeekNav aria-label="주차 바로가기">
        <WeekNavInner>
          {filteredGroups.map((group) => (
            <WeekNavButton
              key={group.id}
              href={`#${group.id}`}
              onClick={() => setActiveGroupId(group.id)}
            >
              {group.title}
            </WeekNavButton>
          ))}
        </WeekNavInner>
      </WeekNav>

      <SectionCard>
        <Header>
          <SectionTitle>분기 선택</SectionTitle>
          <FilterRow>
            {trimesterOptions.map((option) => (
              <ActionButton
                key={option}
                $active={selectedTrimester === option}
                onClick={() => setSelectedTrimester(option)}
              >
                {getTrimesterLabel(option)}
              </ActionButton>
            ))}
          </FilterRow>
        </Header>
      </SectionCard>

      <SectionCard>
        <VideoSectionHeader>
          <SectionTitle>주차별 영상</SectionTitle>
        </VideoSectionHeader>
        <VideoGrid>
          {filteredGroups.map((group) => {
            const isActive = group.id === activeGroupId;

            return (
              <WeekGroup key={group.id} id={group.id}>
                <WeekGroupHeader>
                  <WeekGroupTitle>{group.title}</WeekGroupTitle>
                  <WeekGroupToggle
                    type="button"
                    onClick={() => setActiveGroupId(isActive ? null : group.id)}
                    aria-expanded={isActive}
                    aria-controls={`${group.id}-content`}
                  >
                    {isActive ? "접기" : "펼치기"}
                  </WeekGroupToggle>
                </WeekGroupHeader>
                {isActive && (
                  <WeekBlock id={`${group.id}-content`}>
                    <SectionHeading>주차별 영상</SectionHeading>
                    <VideoList>
                      {group.videos.map((video, videoIndex) => {
                        const embedUrl = getYouTubeEmbedUrl(video.url);
                        const videoId = getYouTubeVideoId(video.url);
                        const summary = videoId ? videoSummaries[videoId] : undefined;

                        if (embedUrl) {
                          return (
                            <VideoEmbedCard key={`${group.id}-${video.title}-${videoIndex}`}>
                              <VideoFrame
                                src={embedUrl}
                                title={video.title}
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                              />
                              <VideoSummaryRow>
                                <VideoTitle>{video.title}</VideoTitle>
                                <VideoSummaryButton
                                  type="button"
                                  onClick={() => openSummary(video.title, summary)}
                                >
                                  요약보기
                                </VideoSummaryButton>
                              </VideoSummaryRow>
                            </VideoEmbedCard>
                          );
                        }

                        return null;
                      })}
                    </VideoList>
                    <SectionHeading>관련 구매 상품</SectionHeading>
                    {group.id === "weeks-1-4" && (
                      <VideoPartnerGrid>
                        <iframe
                          src="https://coupa.ng/cluBEo"
                          width="120"
                          height="240"
                          frameBorder="0"
                          scrolling="no"
                          referrerPolicy="unsafe-url"
                          browsingtopics
                          title="쿠팡 파트너스 테스트"
                        />
                        <iframe
                          src="https://coupa.ng/cluBEQ"
                          width="120"
                          height="240"
                          frameBorder="0"
                          scrolling="no"
                          referrerPolicy="unsafe-url"
                          browsingtopics
                          title="쿠팡 파트너스 테스트 2"
                        />
                        <iframe
                          src="https://coupa.ng/cluBFa"
                          width="120"
                          height="240"
                          frameBorder="0"
                          scrolling="no"
                          referrerPolicy="unsafe-url"
                          browsingtopics
                          title="쿠팡 파트너스 테스트 3"
                        />
                        <iframe
                          src="https://coupa.ng/cluBFq"
                          width="120"
                          height="240"
                          frameBorder="0"
                          scrolling="no"
                          referrerPolicy="unsafe-url"
                          browsingtopics
                          title="쿠팡 파트너스 테스트 4"
                        />
                        <iframe
                          src="https://coupa.ng/cluBFD"
                          width="120"
                          height="240"
                          frameBorder="0"
                          scrolling="no"
                          referrerPolicy="unsafe-url"
                          browsingtopics
                          title="쿠팡 파트너스 테스트 5"
                        />
                      </VideoPartnerGrid>
                    )}
                  </WeekBlock>
                )}
              </WeekGroup>
            );
          })}
        </VideoGrid>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{ sx: { width: { xs: "100%", sm: 420 } } }}
        >
          <VideoDrawerContent>
            <VideoDrawerHeader>
              <strong>영상 요약</strong>
              <VideoDrawerClose type="button" onClick={() => setDrawerOpen(false)}>
                닫기
              </VideoDrawerClose>
            </VideoDrawerHeader>
            {selectedSummary ? (
              <VideoDrawerBody>
                <VideoTitle>{selectedSummary.title}</VideoTitle>
                <VideoMarkdown>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {selectedSummary.summary}
                  </ReactMarkdown>
                </VideoMarkdown>
              </VideoDrawerBody>
            ) : (
              <VideoDrawerEmpty>영상의 “요약보기”를 눌러 요약을 확인하세요.</VideoDrawerEmpty>
            )}
          </VideoDrawerContent>
        </Drawer>
      </SectionCard>

      <SectionCard>
        <DisclaimerHeader>
          <SectionTitle>의료 정보 안내</SectionTitle>
        </DisclaimerHeader>
        <Disclaimer>
          이 콘텐츠는 일반적인 정보 제공을 위한 참고 자료이며, 개인의 건강 상태나 의료적 판단을
          대체하지 않습니다. 증상이나 진료가 필요하다고 느끼면 의료 전문가와 상담하세요.
        </Disclaimer>
        <Disclaimer>
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
        </Disclaimer>
      </SectionCard>
    </>
  );
}
