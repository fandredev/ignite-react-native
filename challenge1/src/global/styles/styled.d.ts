import 'styled-components'
import theme from './theme'


declare module 'styled-components' {
  type ThemeType = typeof theme & any

  export interface DefaultTheme extends ThemeType { }
}