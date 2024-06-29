import { style } from '@vanilla-extract/css';
import { breakpoints, vars } from '../theme.css';

export const introWrapper = style({
  width: '100%',
  height: '100dvh',
  padding: 8,
});

export const intro = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  backgroundImage: `linear-gradient(120deg, ${vars.colors.blue.step5}, ${vars.colors.blue.step2}, ${vars.colors.violet.step2}, ${vars.colors.violet.step5})`,
  borderRadius: 10,
  selectors: {
    "[data-theme='dark'] &": {
      backgroundImage: `linear-gradient(120deg, ${vars.colors.blue.step3}, ${vars.colors.blue.step1}, ${vars.colors.violet.step1}, ${vars.colors.violet.step3})`,
    },
  },
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: vars.breakpoints.md,
  padding: '0 30px',
});

export const description = style({
  fontWeight: 450,
  fontSize: 36,
  color: vars.colors.gray.step11,
  lineHeight: 1.25,
  '@media': {
    [`(max-width: ${breakpoints.md})`]: {
      fontSize: 32,
    },
    [`(max-width: ${breakpoints.xs})`]: {
      fontSize: 28,
    },
    [`(max-width: ${breakpoints['3xs']})`]: {
      fontSize: 26,
    },
  },
});

export const focused = style({
  fontWeight: 600,
  color: vars.colors.foreground,
});

export const ctaWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  columnGap: 16,
  marginTop: 24,
});

export const cta = style({
  display: 'inline-flex',
  alignItems: 'center',
  columnGap: 6,
  fontFamily: vars.fonts.mono,
  fontWeight: 500,
  fontSize: 30,
  color: vars.colors.gray.step11,
  textDecorationThickness: 3,
  textDecorationLine: 'underline',
  textDecorationStyle: 'solid',
  textDecorationColor: vars.colors.gray.step9,
  textUnderlineOffset: 3,
  lineHeight: 1,
  transitionProperty: 'color',
  transitionDuration: '0.15s',
  transitionTimingFunction: 'ease-in-out',
  ':hover': {
    color: vars.colors.gray.step12,
  },
  '@media': {
    [`(max-width: ${breakpoints.md})`]: {
      fontSize: 26,
    },
    [`(max-width: ${breakpoints.xs})`]: {
      fontSize: 24,
    },
    [`(max-width: ${breakpoints['2xs']})`]: {
      fontSize: 22,
    },
  },
});

export const ctaIcon = style({
  width: 26,
  height: 26,
  '@media': {
    [`(max-width: ${breakpoints.md})`]: {
      width: 22,
      height: 22,
    },
    [`(max-width: ${breakpoints.xs})`]: {
      width: 20,
      height: 20,
    },
    [`(max-width: ${breakpoints['2xs']})`]: {
      width: 18,
      height: 18,
    },
  },
});

export const projectName = style({
  marginTop: 16,
  fontFamily: vars.fonts.display,
  fontWeight: 600,
  fontSize: 36,
  lineHeight: 1,
});
