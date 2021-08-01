// import { Theme } from '@material-ui/core/styles/createTheme';
import { monetusTheme } from './muiThemes';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

export type MonetusCustomTheme = typeof monetusTheme;

declare module '@material-ui/core/styles/createTheme' {
  // allow configuration using `createTheme`
  export interface MonetusTheme extends MonetusCustomTheme {
    appDrawer: {
      width: React.CSSProperties['width'];
      breakpoint: Breakpoint;
    };
  }
}
