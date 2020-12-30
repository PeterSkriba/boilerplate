import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router } from 'react-router-dom'

import client from 'apollo'
import App from './App'

import 'styles/global.css'

render(
  <ApolloProvider client={client as any}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
