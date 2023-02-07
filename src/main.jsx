import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Theme from './theme/Theme'
import { GlobalStyle } from './theme/GlobalStyle'
import { Provider } from 'react-redux'
import store from './state/app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)