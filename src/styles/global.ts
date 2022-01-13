import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
  css
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyle: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Poppins Light'),
       url('/fonts/poppins-300.woff2') format('woff2')
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Poppins Regular'),
       url('/fonts/poppins-regular.woff2') format('woff2')
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local('Poppins SemiBold'),
       url('/fonts/poppins-600.woff2') format('woff2')
}
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::before,
  &::after {
    box-sizing: inherit;
  }
 }

 ${({ theme, removeBg }) => css`
   html {
     font-size: 62.5%;
   }

   body {
     font-family: ${theme.font.family};
     font-size: ${theme.font.sizes.medium};

     ${!removeBg &&
     css`
       background-color: ${theme.colors.mainBg};
     `}
   }
 `}
`
export default GlobalStyle
