import { globalStyle } from '@vanilla-extract/css';
import layers from './layers.css';
import { vars } from './theme.css';

globalStyle(':root', {
  '@layer': {
    [layers.theme]: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      colorScheme: 'light',
      fontSynthesis: 'none',
      textRendering: 'optimizeLegibility',
    },
  },
});

globalStyle("[data-theme='dark']", {
  '@layer': {
    [layers.theme]: {
      colorScheme: 'dark',
    },
  },
});

globalStyle('*::selection', {
  '@layer': {
    [layers.theme]: {
      backgroundColor: vars.colors.blue.step9,
      color: vars.colors.white,
    },
  },
});

globalStyle('body', {
  '@layer': {
    [layers.theme]: {
      minHeight: '100vh',
      backgroundColor: vars.colors.gray.step1,
    },
  },
});
