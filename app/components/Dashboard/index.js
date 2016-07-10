import React from 'react'
import { connect } from 'react-redux'

import ArticleCreator from 'app/components/Articles/ArticleCreator'

const Dashboard = React.createClass({
  propTypes: {

  },
  getDefaultProps() {

  },
  render() {
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        <ArticleCreator
          handleSubmit={() => {}}
        />
      </div>
    )
  }
})

export default connect()(Dashboard)