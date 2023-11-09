import { createGlobalStyle } from 'styled-components'
import { theme } from 'styles/Theme.styled'
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

  a:visited {
    color: inherit;
  }
  
  body {
    background: ${theme.background.light};
    font-family: Roboto, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-style: normal;
  }

`
