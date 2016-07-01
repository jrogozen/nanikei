import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'app/containers/App'
import FrontPage from 'app/containers/FrontPage'

module.exports = (
  <Route component={App} path="/">
    <IndexRoute component={FrontPage} />
  </Route>
)