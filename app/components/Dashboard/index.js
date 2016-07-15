import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

const Dashboard = React.createClass({
  propTypes: {

  },
  contextTypes: {
    router: React.PropTypes.object
  },
  getDefaultProps() {

  },
  render() {
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        <Link to="/admin/articles/create">New Artice</Link>
      </div>
    )
  }
})

export default connect()(Dashboard)