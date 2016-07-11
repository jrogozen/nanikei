import React from 'react'
import { connect } from 'react-redux'

import ArticlesActions from 'app/actions/ArticlesActions'
import ArticleCreator from 'app/components/Articles/ArticleCreator'

const Dashboard = React.createClass({
  propTypes: {

  },
  contextTypes: {
    router: React.PropTypes.object
  },
  getDefaultProps() {

  },
  submitArticle(article) {
    let { dispatch } = this.props
    let { router } = this.context

    return dispatch(ArticlesActions.postArticle(article))
      .then(() => {
        router.push('/')
      })
  },
  render() {
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        <ArticleCreator
          handleSubmit={this.submitArticle}
        />
      </div>
    )
  }
})

export default connect()(Dashboard)