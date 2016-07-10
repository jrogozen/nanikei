import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AdminPage from 'app/containers/AdminPage'
import App from 'app/containers/App'
// import BlogPage from 'app/containers/BlogPage'
import ConjugationsPage from 'app/containers/ConjugationsPage'
import FrontPage from 'app/containers/FrontPage'

module.exports = (
  <Route component={App} path="/">
    <IndexRoute component={FrontPage} />
    <Route path="conjugations" component={ConjugationsPage} />
    <Route path="admin" component={AdminPage} />
    {/*<Route path="blog" component={BlogPage} />*/}
  </Route>
)