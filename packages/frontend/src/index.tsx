import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import client from 'apollo'
import App from './App'
import { GlobalStyles, theme } from 'styles'

render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
)
