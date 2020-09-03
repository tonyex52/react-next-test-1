import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body, html, #__next {
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;
