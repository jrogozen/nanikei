import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'app/containers/App'
import FrontPage from 'app/containers/FrontPage'
// import BlogPage from 'app/containers/BlogPage'
import ConjugationsPage from 'app/containers/ConjugationsPage'

module.exports = (
  <Route component={App} path="/">
    <IndexRoute component={FrontPage} />
    <Route path="conjugations" component={ConjugationsPage} />
    {/*<Route path="blog" component={BlogPage} />*/}
  </Route>
)