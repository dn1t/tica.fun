import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';
import { getColors, getVarContract } from './utils/colors';

const [lightColors, darkColors] = getColors('gray', 'blue', 'violet');

const fonts = {
  display: "Onest, 'Pretendard Variable', sans-serif",
  sans: "'Pretendard Variable', sans-serif",
  mono: "'JetBrains Mono', 'Pretendard Variable', sans-serif",
};

export const breakpoints = {
  '3xs': '383px',
  '2xs': '447px',
  xs: '511px',
  sm: '639px',
  md: '767px',
  lg: '1023px',
  xl: '1279px',
  '2xl': '1535px',
};

const theme = { colors: lightColors, fonts, breakpoints };

export const vars = createGlobalThemeContract({
  colors: getVarContract(lightColors, 'color'),
  fonts: getVarContract(fonts, 'font'),
  breakpoints: getVarContract(breakpoints, 'breakpoint'),
});

createGlobalTheme(':root', vars, { ...theme });
createGlobalTheme("[data-theme='dark']", vars, {
  ...theme,
  colors: darkColors,
});
