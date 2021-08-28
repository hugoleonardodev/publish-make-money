/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import { makeMoneyTheme } from '../themes/muiThemes';

export type StyledTheme = typeof makeMoneyTheme;

declare module 'styled-components' {
  export interface StyledComponents extends StyledTheme {}
}
