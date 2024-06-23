import { style } from '@vanilla-extract/css';
import { breakpoints, vars } from '../theme.css';

export const intro = style({
  maxWidth: vars.breakpoints.lg,
  width: '100%',
  padding: '0 72px',
  margin: 'auto',
  '@media': {
    [`(max-width: ${breakpoints.xs})`]: {
      padding: '0 36px',
    },
  },
});

export const logo = style({
  width: 80,
  height: 80,
  '@media': {
    [`(max-width: ${breakpoints.md})`]: {
      width: 64,
      height: 64,
    },
    [`(max-width: ${breakpoints.xs})`]: {
      width: 56,
      height: 56,
    },
  },
});

export const name = style({
  marginTop: 16,
  fontFamily: vars.fonts.display,
  fontWeight: 600,
  fontSize: 48,
  lineHeight: 1,
  '@media': {
    [`(max-width: ${breakpoints.md})`]: {
      marginTop: 8,
      fontSize: 40,
    },
    [`(max-width: ${breakpoints.xs})`]: {
      fontSize: 36,
    },
    [`(max-width: ${breakpoints['3xs']})`]: {
      fontSize: 30,
    },
  },
});

export const description = style({
  marginTop: 8,
  fontWeight: 500,
  fontSize: 32,
  color: vars.colors.gray.step11,
  lineHeight: 1.1,
  '@media': {
    [`(max-width: ${breakpoints.md})`]: {
      fontSize: 26,
    },
    [`(max-width: ${breakpoints.xs})`]: {
      fontSize: 22,
    },
    [`(max-width: ${breakpoints['3xs']})`]: {
      fontSize: 20,
    },
  },
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
  columnGap: 4,
  fontFamily: vars.fonts.mono,
  fontWeight: 500,
  fontSize: 24,
  color: vars.colors.gray.step11,
  textDecoration: `1.5px underline wavy ${vars.colors.gray.step9}`,
  textUnderlineOffset: 3,
  lineHeight: 1,
  '@media': {
    [`(max-width: ${breakpoints.md})`]: {
      fontSize: 20,
    },
    [`(max-width: ${breakpoints.xs})`]: {
      fontSize: 18,
    },
    [`(max-width: ${breakpoints['2xs']})`]: {
      fontSize: 16,
    },
  },
});
