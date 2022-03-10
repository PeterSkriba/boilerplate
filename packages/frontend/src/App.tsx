import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

import routes from 'config/routes'

const App = () =>
  useRoutes([
    ...routes,
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ])

export default App
