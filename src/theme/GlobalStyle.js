import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
    /* footer support */
    min-height: 100%;
    position: relative;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
    outline: none;
  }
`