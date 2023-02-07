import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    position: relative;
    min-height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
  }

  h1 {
    font-size: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`