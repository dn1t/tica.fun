import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';
import { getColors, getVarContract } from './utils/colors';

const [lightColors, darkColors] = getColors('gray');

const fonts = {
  display: "Onest, 'Pretendard Variable', sans-serif",
  sans: "'Pretendard Variable', sans-serif",
  mono: "'JetBrains Mono', 'Pretendard Variable', sans-serif",
};

const theme = { colors: lightColors, fonts };

export const vars = createGlobalThemeContract({
  colors: getVarContract(lightColors, 'color'),
  fonts: getVarContract(fonts, 'font'),
});

createGlobalTheme(':root', vars, theme);
createGlobalTheme("[data-theme='dark']", vars, {
  ...theme,
  colors: darkColors,
});
