/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import { monetusTheme } from '../themes/muiThemes';

export type StyledTheme = typeof monetusTheme;

declare module 'styled-components' {
  export interface StyledComponents extends StyledTheme {}
}
