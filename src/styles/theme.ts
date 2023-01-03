import * as typography from './typography';
import colors from './colors';

const theme = {
  colors,
  typography,
};

export type Theme = typeof theme;

export default theme;
