// client side entry point
import _ from 'lodash'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './configureStore'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import App from './containers/App'
import rootReducer from './reducers'
import routes from './routes'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)

window.store = store

function createElement(Component, props) {
  props = _.assign(props, {
    store
  })

  return <Component {...props} />
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} createElement={createElement}/>
  </Provider>,
  document.getElementById('root')
)