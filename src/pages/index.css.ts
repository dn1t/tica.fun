import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const heroSection = style({
  paddingTop: 180,
  paddingBottom: 96,
});

export const logo = style({
  width: 80,
  height: 80,
});

export const heroHeading = style({
  marginTop: 10,
  fontFamily: vars.fonts.display,
  fontWeight: 600,
  fontSize: 48,
  lineHeight: 1,
});

export const heroDescription = style({
  marginTop: 8,
  fontWeight: 500,
  fontSize: 32,
  color: vars.colors.gray.step11,
  lineHeight: 1.1,
});

export const projectsSection = style({
  display: 'flex',
  flexDirection: 'column',
});

export const projectsHeading = style({
  fontFamily: vars.fonts.display,
  fontWeight: 600,
  fontSize: 30,
  lineHeight: 1,
});

export const projectsGrid = style({
  display: 'grid',
});
