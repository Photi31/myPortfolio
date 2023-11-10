import { createGlobalStyle } from "styled-components";
import { theme } from "styles/Theme.styled";
export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input,
  button,
  select,
  textarea,
  optgroup,
  option {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
    color: inherit;
  }
  
  ul {
    list-style-type: none;
  }
  
  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.background.dark || "#1F1F1F"};
    font-family: Roboto, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-style: normal;
  }

`;
