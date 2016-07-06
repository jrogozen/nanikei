import React from 'react'
import { connect } from 'react-redux'

require('scss/containers/App')

const App = React.createClass({
  render: function() {
    return (
      <div id="App" className="App">
        {React.cloneElement(this.props.children)}
      </div>
    )
  }
})

export default connect()(App)