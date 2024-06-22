import { globalStyle } from '@vanilla-extract/css';
import layers from './layers.css';
import { vars } from './theme.css';

globalStyle('*, ::before, ::after', {
  '@layer': {
    [layers.reset]: {
      boxSizing: 'border-box',
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: 'currentcolor',
    },
  },
});

globalStyle('html, :host', {
  '@layer': {
    [layers.reset]: {
      fontFamily: vars.fonts.sans,
      lineHeight: '1.15',
      WebkitTextSizeAdjust: '100%',
      MozTabSize: 4,
      tabSize: 4,
      WebkitTapHighlightColor: 'transparent',
    },
  },
});

globalStyle('body', {
  '@layer': {
    [layers.reset]: {
      margin: 0,
      lineHeight: 'inherit',
    },
  },
});

globalStyle('hr', {
  '@layer': {
    [layers.reset]: {
      height: 0,
      color: 'inherit',
      borderTopWidth: 1,
    },
  },
});

globalStyle('abbr[title]', {
  '@layer': {
    [layers.reset]: {
      textDecorationLine: 'underline',
      textDecorationStyle: 'dotted',
    },
  },
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  '@layer': {
    [layers.reset]: {
      fontSize: 'inherit',
      fontWeight: 'inherit',
    },
  },
});

globalStyle('a', {
  '@layer': {
    [layers.reset]: {
      color: 'inherit',
      textDecoration: 'inherit',
    },
  },
});

globalStyle('b, strong', {
  '@layer': {
    [layers.reset]: {
      fontWeight: 'bolder',
    },
  },
});

globalStyle('code, kbd, samp, pre', {
  '@layer': {
    [layers.reset]: {
      fontFamily: 'monospace',
      fontSize: '1em',
    },
  },
});

globalStyle('small', {
  '@layer': {
    [layers.reset]: {
      fontSize: '80%',
    },
  },
});

globalStyle('sub, sup', {
  '@layer': {
    [layers.reset]: {
      fontSize: '75%',
      lineHeight: '0',
      position: 'relative',
      verticalAlign: 'baseline',
    },
  },
});

globalStyle('sub', {
  '@layer': {
    [layers.reset]: {
      bottom: '-0.25em',
    },
  },
});

globalStyle('sup', {
  '@layer': {
    [layers.reset]: {
      top: '-0.5em',
    },
  },
});

globalStyle('table', {
  '@layer': {
    [layers.reset]: {
      textIndent: 0,
      borderColor: 'inherit',
      borderCollapse: 'collapse',
    },
  },
});

globalStyle('button, input, optgroup, select, textarea', {
  '@layer': {
    [layers.reset]: {
      fontFamily: 'inherit',
      fontSize: '100%',
      fontWeight: 'inherit',
      lineHeight: '1.15',
      letterSpacing: 'inherit',
      color: 'inherit',
      margin: 0,
      padding: 0,
    },
  },
});

globalStyle('button, select', {
  '@layer': {
    [layers.reset]: {
      textTransform: 'none',
    },
  },
});

globalStyle(
  "button, input:where([type='button'], [type='reset'], [type='submit'])",
  {
    '@layer': {
      [layers.reset]: {
        WebkitAppearance: 'button',
        backgroundColor: 'transparent',
        backgroundImage: 'none',
      },
    },
  },
);

globalStyle(':-moz-focusring', {
  '@layer': {
    [layers.reset]: {
      outline: 'auto',
    },
  },
});

globalStyle(':-moz-ui-invalid', {
  '@layer': {
    [layers.reset]: {
      boxShadow: 'none',
    },
  },
});

globalStyle('progress', {
  '@layer': {
    [layers.reset]: {
      verticalAlign: 'baseline',
    },
  },
});

globalStyle('::-webkit-inner-spin-button, ::-webkit-outer-spin-button', {
  '@layer': {
    [layers.reset]: {
      height: 'auto',
    },
  },
});

globalStyle("[type='search']", {
  '@layer': {
    [layers.reset]: {
      WebkitAppearance: 'textfield',
      outlineOffset: -2,
    },
  },
});

globalStyle('::-webkit-search-decoration', {
  '@layer': {
    [layers.reset]: {
      WebkitAppearance: 'none',
    },
  },
});

globalStyle('::-webkit-file-upload-button', {
  '@layer': {
    [layers.reset]: {
      WebkitAppearance: 'button',
      font: 'inherit',
    },
  },
});

globalStyle('summary', {
  '@layer': {
    [layers.reset]: {
      display: 'list-item',
    },
  },
});

globalStyle('blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre', {
  '@layer': {
    [layers.reset]: {
      margin: 0,
    },
  },
});

globalStyle('fieldset', {
  '@layer': {
    [layers.reset]: {
      margin: 0,
      padding: 0,
    },
  },
});

globalStyle('legend', {
  '@layer': {
    [layers.reset]: {
      padding: 0,
    },
  },
});

globalStyle('ol, ul, menu', {
  '@layer': {
    [layers.reset]: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
  },
});

globalStyle('dialog', {
  '@layer': {
    [layers.reset]: {
      padding: 0,
    },
  },
});

globalStyle('textarea', {
  '@layer': {
    [layers.reset]: {
      resize: 'vertical',
    },
  },
});

globalStyle('input::placeholder, textarea::placeholder', {
  '@layer': {
    [layers.reset]: {
      opacity: '1',
      color: '#7b7b7b',
    },
  },
});

globalStyle("button, [role='button']", {
  '@layer': {
    [layers.reset]: {
      cursor: 'pointer',
    },
  },
});

globalStyle(':disabled', {
  '@layer': {
    [layers.reset]: {
      cursor: 'default',
    },
  },
});

globalStyle('img, svg, video, canvas, audio, iframe, embed, object', {
  '@layer': {
    [layers.reset]: {
      display: 'block',
      verticalAlign: 'middle',
    },
  },
});

globalStyle('img, video', {
  '@layer': {
    [layers.reset]: {
      maxWidth: '100%',
      height: 'auto',
    },
  },
});

globalStyle('[hidden]', {
  '@layer': {
    [layers.reset]: {
      display: 'none',
    },
  },
});
