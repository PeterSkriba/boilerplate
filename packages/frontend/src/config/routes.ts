// Layouts
import { Layout } from 'pages'

// Pages
import { Home } from 'pages'

export default [
  {
    base: '',
    subRoutes: [
      {
        path: '/',
        component: Home,
        layout: Layout,
        exact: true,
      },
    ],
  },
]
