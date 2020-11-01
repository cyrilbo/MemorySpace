import { ThemeProps as BasicThemeProps } from 'styled-components';
import * as styledComponents from 'styled-components/native';
import { Theme } from '../theme';

export type ThemeProps = BasicThemeProps<Theme>;

const {
  default: styled,
  css,
  ThemeProvider,
  ThemeContext,
} = (styledComponents as unknown) as styledComponents.ReactNativeThemedStyledComponentsModule<
  Theme
>;

export { css, ThemeProvider, ThemeContext };
export default styled;