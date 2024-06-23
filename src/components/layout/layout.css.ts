import { style } from '@vanilla-extract/css';
import { vars } from '../../theme.css';

export const backgroundGradient = style({
  position: 'fixed',
  inset: 0,
  zIndex: -1,
  width: '100vw',
  height: '100vh',
  backgroundImage: `linear-gradient(to bottom right, ${vars.colors.blue.step3}, ${vars.colors.gray.step1}, ${vars.colors.violet.step3})`,
});

export const slotWrapper = style({
  maxWidth: vars.breakpoints.lg,
  padding: '0 16px',
  margin: '0 auto',
});
