import { style } from '@vanilla-extract/css';
import { vars } from '../../theme.css';

export const navWrapper = style({
  width: '100%',
  paddingTop: 20,
});

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: 8,
  width: 'max-content',
  height: 44,
  padding: '3px 16px',
  margin: '0 auto',
  backgroundColor: `color-mix(in srgb, ${vars.colors.gray.step3}, transparent 50%)`,
  border: `1px solid ${vars.colors.gray.step4}`,
  borderRadius: 22,
});

export const icon = style({});

export const menu = style({
  display: 'flex',
  height: '100%',
});

export const menuItem = style({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  padding: '0 12px',
  fontWeight: 500,
  fontSize: 16,
  lineHeight: 'unset',
  borderRadius: 18,
  selectors: {
    '&[data-selected]': {
      backgroundColor: vars.colors.gray.step1,
      border: `1px solid ${vars.colors.gray.step4}`,
    },
    "[data-theme='dark'] &[data-selected]": {
      backgroundColor: vars.colors.gray.step6,
    },
  },
});
