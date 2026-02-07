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
                <WeekGroupHeader
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveGroupId(isActive ? null : group.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveGroupId(isActive ? null : group.id);
                    }
                  }}
                  aria-expanded={isActive}
                  aria-controls={`${group.id}-content`}
                >
                  <WeekGroupTitle>{group.title}</WeekGroupTitle>
                  <WeekGroupToggle
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setActiveGroupId(isActive ? null : group.id);
                    }}
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
                    {group.id === "weeks-5-8" && (
                      <VideoPartnerGrid>
                        <a
                          href="https://link.coupang.com/a/dFyO1Q"
                          target="_blank"
                          rel="noreferrer noopener"
                          referrerPolicy="unsafe-url"
                        >
                          <img
                            src="https://image8.coupangcdn.com/image/affiliate/banner/8993c514d03a466c062f7de36f077451@2x.jpg"
                            alt="하루웰빙 슈퍼 프리 프로바이오틱스, 60g, 6개"
                            width={120}
                            height={240}
                            loading="lazy"
                          />
                        </a>
                        <a
                          href="https://link.coupang.com/a/dFySJp"
                          target="_blank"
                          rel="noreferrer noopener"
                          referrerPolicy="unsafe-url"
                        >
                          <img
                            src="https://image11.coupangcdn.com/image/affiliate/banner/c85e91d7edae81858212f146d5ede6c4@2x.jpg"
                            alt="LG전자 퓨리케어 360도 공기청정기 62㎡, AS183HWWA, 화이트"
                            width={120}
                            height={240}
                            loading="lazy"
                          />
                        </a>
                        <a
                          href="https://link.coupang.com/a/dFyUeb"
                          target="_blank"
                          rel="noreferrer noopener"
                          referrerPolicy="unsafe-url"
                        >
                          <img
                            src="https://image14.coupangcdn.com/image/affiliate/banner/9be31c4eda9346fefe445acf07e3232e@2x.jpg"
                            alt="종근당 차전자피 식이섬유 30개입, 204g, 1개"
                            width={120}
                            height={240}
                            loading="lazy"
                          />
                        </a>
                        <a
                          href="https://link.coupang.com/a/dFyU51"
                          target="_blank"
                          rel="noreferrer noopener"
                          referrerPolicy="unsafe-url"
                        >
                          <img
                            src="https://img1c.coupangcdn.com/image/affiliate/banner/c184137c5d8742540688aa44f7425609@2x.jpg"
                            alt="웰꼼베베 닥터맘스 액상 철분, 600ml, 1개"
                            width={120}
                            height={240}
                            loading="lazy"
                          />
                        </a>
                        <a
                          href="https://link.coupang.com/a/dFyVzk"
                          target="_blank"
                          rel="noreferrer noopener"
                          referrerPolicy="unsafe-url"
                        >
                          <img
                            src="https://img1a.coupangcdn.com/image/affiliate/banner/a3ee2211f086a7d88a615c5aa333e6ca@2x.jpg"
                            alt="맘스포뮬러 칼마디 임산부 수유부 칼슘 마그네슘 비타민D 칼슘제, 2개, 90정"
                            width={120}
                            height={240}
                            loading="lazy"
                          />
                        </a>
                      </VideoPartnerGrid>
                    )}
                    {group.id === "weeks-9-12" && (
                      <VideoPartnerGrid>
                        <a
                          href="https://link.coupang.com/a/dHLiRV"
                          target="_blank"
                          rel="noreferrer noopener"
                          referrerPolicy="unsafe-url"
                        >
                          <img
                            src="https://image7.coupangcdn.com/image/affiliate/banner/89bb99da3b10037198d9d8d201d2a9b7@2x.jpg"
                            alt="MOZ 스웨덴 나혼자산다 보온병 포스코 316 스텐 대용량 원터치 손잡이 보온보냉병 보온텀블러, 포레스트그린, 1300ml, 1개"
                            width={120}
                            height={240}
                            loading="lazy"
                          />
                        </a>
                        <a
                          href="https://link.coupang.com/a/dHLlJN"
                          target="_blank"
                          rel="noreferrer noopener"
                          referrerPolicy="unsafe-url"
                        >
                          <img
                            src="https://img3a.coupangcdn.com/image/affiliate/banner/0189502c2cac0856e036621e8e4f3a34@2x.jpg"
                            alt="일리윤 세라마이드 아토 6.0 탑투토 바디워시 무향, 500ml, 2개"
                            width={120}
                            height={240}
                            loading="lazy"
                          />
                        </a>
                        <a
                          href="https://link.coupang.com/a/dHLmGZ"
                          target="_blank"
                          rel="noreferrer noopener"
                          referrerPolicy="unsafe-url"
                        >
                          <img
                            src="https://image5.coupangcdn.com/image/affiliate/banner/d26492be762935f0797e93e3e338ee20@2x.jpg"
                            alt="일리윤 세라마이드 아토 대용량 바디로션, 800ml, 1개"
                            width={120}
                            height={240}
                            loading="lazy"
                          />
                        </a>
                        <a
                          href="https://link.coupang.com/a/dHLosp"
                          target="_blank"
                          rel="noreferrer noopener"
                          referrerPolicy="unsafe-url"
                        >
                          <img
                            src="https://image8.coupangcdn.com/image/affiliate/banner/13c333ff738159cb8d05572f5526d13b@2x.jpg"
                            alt="마더케이 디아 세탁세제, 1L, 1개"
                            width={120}
                            height={240}
                            loading="lazy"
                          />
                        </a>
                        <a
                          href="https://link.coupang.com/a/dHLpfq"
                          target="_blank"
                          rel="noreferrer noopener"
                          referrerPolicy="unsafe-url"
                        >
                          <img
                            src="https://img4a.coupangcdn.com/image/affiliate/banner/6b6aa49f7905c460f469d9beda984c1b@2x.jpg"
                            alt="뉴트맘스 올인원, 60정, 1개"
                            width={120}
                            height={240}
                            loading="lazy"
                          />
                        </a>
                        <a
                          href="https://link.coupang.com/a/dHLqs4"
                          target="_blank"
                          rel="noreferrer noopener"
                          referrerPolicy="unsafe-url"
                        >
                          <img
                            src="https://image6.coupangcdn.com/image/affiliate/banner/bb448ed078b7b89969da164388f496ff@2x.jpg"
                            alt="맘스포뮬러 식물성 초임계 알티지 rTG 오메가3 미니캡슐 DHA 2개월분, 1개, 60정"
                            width={120}
                            height={240}
                            loading="lazy"
                          />
                        </a>
                        <a
                          href="https://link.coupang.com/a/dHLtzd"
                          target="_blank"
                          rel="noreferrer noopener"
                          referrerPolicy="unsafe-url"
                        >
                          <img
                            src="https://image12.coupangcdn.com/image/affiliate/banner/813807fcd8b5512cab6e198d98826dcd@2x.jpg"
                            alt="쿠폰할인 중 임산부 바디필로우 J자형 허리보호 긴배게 출산선물 추천, 그린"
                            width={120}
                            height={240}
                            loading="lazy"
                          />
                        </a>
                        <a
                          href="https://link.coupang.com/a/dHLwSq"
                          target="_blank"
                          rel="noreferrer noopener"
                          referrerPolicy="unsafe-url"
                        >
                          <img
                            src="https://image12.coupangcdn.com/image/affiliate/banner/dee23d8f03c97086a5f7e95361eeeeb4@2x.jpg"
                            alt="안국약품 푸룬 식이섬유 젤리, 280g, 4개"
                            width={120}
                            height={240}
                            loading="lazy"
                          />
                        </a>
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
          PaperProps={{ sx: { width: { xs: "100%", sm: 630 } } }}
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
