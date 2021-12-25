import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      white: string
      grey: string
    }

    sizes: {}

    shadows: {}
  }
}
