import React from 'react'
import { connect } from 'react-redux'

import requester from 'app/utils/requester'

const FrontPage = React.createClass({
  componentDidMount() {
    requester({
      method: 'get',
      path: 'api/verbs',
      queryParams: 'korean'
    })
  },
  render: function() {
    return (
      <div className="FrontPage container">
        <h2>Front Pages</h2>
      </div>
    )
  }
})

export default connect()(FrontPage)