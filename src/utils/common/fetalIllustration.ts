const paletteByTrimester = {
  1: { bg: "#fde2e4", blob: "#f9a8d4", text: "#9d174d" },
  2: { bg: "#e0f2fe", blob: "#7dd3fc", text: "#0c4a6e" },
  3: { bg: "#dcfce7", blob: "#86efac", text: "#166534" },
} as const;

export const getFetalIllustration = (week: number, trimester: 1 | 2 | 3) => {
  const palette = paletteByTrimester[trimester];
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="220" height="140" viewBox="0 0 220 140">
  <rect width="220" height="140" rx="24" fill="${palette.bg}"/>
  <ellipse cx="92" cy="78" rx="42" ry="36" fill="${palette.blob}" opacity="0.85"/>
  <ellipse cx="138" cy="64" rx="28" ry="24" fill="${palette.blob}" opacity="0.7"/>
  <circle cx="150" cy="52" r="8" fill="#fff" opacity="0.6"/>
  <text x="18" y="30" font-family="'Pretendard','Noto Sans KR',sans-serif" font-size="14" font-weight="700" fill="${palette.text}">Week ${week}</text>
  <text x="18" y="54" font-family="'Pretendard','Noto Sans KR',sans-serif" font-size="12" fill="${palette.text}">태아 성장 스냅샷</text>
</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};
