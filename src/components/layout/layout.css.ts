import { style } from '@vanilla-extract/css';
import { vars } from '../../theme.css';

export const body = style({
  display: 'flex',
  flexDirection: 'column',
});

export const backgroundGradient = style({
  position: 'fixed',
  inset: 0,
  zIndex: -1,
  width: '100vw',
  height: '100vh',
  backgroundImage: `linear-gradient(to bottom right, ${vars.colors.blue.step4}, ${vars.colors.gray.step1}, ${vars.colors.violet.step4})`,
  opacity: 0.85,
});
