import 'styled-components';
import { ThemeColors } from 'types/theme';


declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    colors: ThemeColors;
  }
}