import { layer } from '@vanilla-extract/css';

const reset = layer('reset');
const theme = layer('theme');

const layers = { reset, theme };

export default layers;
