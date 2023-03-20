import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    --color-primary: #0097A8;
    --color-secondary: #6AA88F;
    --color-border: lightgrey;
  }
  h1 {
    color: var(--color-primary);
    font-weight: 500;
    margin: 50px auto;
  }
  h2 {
    color: var(--color-primary);
    font-size: 1.3em;
    font-weight: 500;
    margin: 20px 0;
  }
  h3 {
    color: var(--color-primary);
    font-size: 1.1em;
    font-weight: 500;
    margin: 20px auto;
  }
  h4 {
    margin: 5px auto;
  }
  p {
    margin: auto 0;
  }
`;

export default GlobalStyle;