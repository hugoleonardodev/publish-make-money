// import { Theme } from '@material-ui/core/styles/createTheme';
import { makeMoneyTheme } from './muiThemes';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

export type makeMoneyCustomTheme = typeof makeMoneyTheme;

declare module '@material-ui/core/styles/createTheme' {
  // allow configuration using `createTheme`
  export interface makeMoneyTheme extends makeMoneyCustomTheme {
    appDrawer: {
      width: React.CSSProperties['width'];
      breakpoint: Breakpoint;
    };
  }
}
