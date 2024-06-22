import { style } from '@vanilla-extract/css';
import { vars } from '../../theme.css';

export const slotWrapper = style({
  maxWidth: vars.breakpoints.lg,
  padding: '0 16px',
  margin: '0 auto',
});
