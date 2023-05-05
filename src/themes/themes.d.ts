import 'styled-components';
import { ThemeColors } from 'types/theme';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    colors: ThemeColors;
  }
}