import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

export const globalStyle = css`
  :root {
    --max-width: 1060px;
    --font-color: #333;
    --sub-font-color: #999;
    --active-font-color: #258bf7;
    --filter-font-color: #2886fa;
    --filter-border-color: #e1e2e3;
    --filter-background-color: #f8f8fa;
    --filter-background-hover: #f9f9f9;
    --filter-button-background: #0092fc;
    --filter-button-border: #0092fc;
    --button-font-color: #fff;
    --button-background-color: #238ff4;
    --button-container-border: #eee;
    --icon-close-color: #bbb;
    --base-background-color: #f2f2f2;
  }
`;

const GlobalStyles = createGlobalStyle`
    ${reset};
    ${globalStyle};
    * {
        box-sizing: border-box;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
        font-size: 14px;
    }
    button {
        all: unset;
        cursor: pointer;
    }
`;

export default GlobalStyles;
