import React from 'react'
import { connect } from 'react-redux'

import ArticlesActions from 'app/actions/ArticlesActions'
import ArticleCreator from 'app/components/Articles/ArticleCreator'

const CreateArticlesPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  submitArticle(article) {
    let { dispatch } = this.props
    let { router } = this.context

    return dispatch(ArticlesActions.postArticle(article))
      .then(() => {
        router.push('/admin')
      })
  },
  render() {
    return (
      <div className="CreateArticlesPage">
        <ArticleCreator handleSubmit={this.submitArticle} />
      </div>
    )
  }
})

export default connect()(CreateArticlesPage)