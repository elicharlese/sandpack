import { createStitches } from "@stitches/react";

import { palette } from "./styles/palette";
import { fontFamilies, fontWeights } from "./styles/typography";

const SCREEN_SIZES = {
  sm: 375,
  md: 768,
  lg: 1440,
  xl: 1920
}

export const { globalCss, getCssText, styled } = createStitches({
  media: {
    bp1: `(min-width: ${SCREEN_SIZES.md}px)`,
    bp2: `(min-width: ${SCREEN_SIZES.lg}px)`,
    bp3: `(min-width: ${SCREEN_SIZES.xl}px)`,
  },
  theme: {
    colors: palette,
    fontWeights,
    fonts: fontFamilies,
  },
});