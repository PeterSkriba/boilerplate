import React from 'react'

// Layouts
import { Layout } from 'layouts'

// Pages
import { Home } from 'pages'

export default [
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/', element: <Home /> }],
  },
]
