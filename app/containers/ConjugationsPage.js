import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

import ArticlesActions from 'app/actions/ArticlesActions'

const ConjugationsPage = React.createClass({
  statics: {
    serverRouteWillMount(reactContext) {
      let { dispatch } = reactContext.store

      return dispatch(ArticlesActions.fetchArticles({
        category: 'conjugations',
        limit: 100
      }))
    }
  },
  render() {
    return (
      <div>
        <h1>ConjugationsPage</h1>
        {_.map(this.props.articles, (article) => {
          return (
            <ul>
              <li>{article.title}</li>
              <li>{article.description}</li>
              <li>{article.category}</li>
              <li>{article.content}</li>
            </ul>
          )
        })}
      </div>
    )
  }
})

const mapStateToProps = (state) => ({
  articles: state.articles.articles
})

export default connect(mapStateToProps)(ConjugationsPage)