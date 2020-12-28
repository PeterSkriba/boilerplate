import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import routes from 'config/routes'

const App = () => {
  return (
    <Switch>
      {routes?.map((route, routeIdx) =>
        route?.subRoutes?.map((subroute, subrouteIdx) => (
          <Route
            key={`route-${routeIdx}-${subrouteIdx}`}
            path={route.base + subroute.path}
            exact={subroute.exact}
          >
            <subroute.layout>
              <subroute.component />
            </subroute.layout>
          </Route>
        ))
      )}

      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default App
