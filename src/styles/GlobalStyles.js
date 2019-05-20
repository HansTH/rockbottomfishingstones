import { createGlobalStyle } from 'styled-components';
import { maxWidth } from '../styles/utils';
import { ThemeColors } from '../styles/elements';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };

  html{
    /* scroll-behavior: smooth; */
    font-size: 16px;

    ${maxWidth.small`
      font-size: 13px;
    `}

    ${maxWidth.medium`
      font-size: 15px;
    `}
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.4;
    background-color: ${ThemeColors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  };

  a, a:link, a:visited {
    text-decoration: none;
  };

  ul{
    list-style: none;
  }
`;
