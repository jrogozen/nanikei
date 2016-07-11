import constants from 'config/constants'
import api from 'app/utils/api'

const ArticlesActions = {
  fetchArticles: ({ category, limit }) => {
    return (dispatch) => {
      return api.articles({
        limit,
        category
      })
        .then((response) => {
          if (response.success && response.data) {
            return dispatch(ArticlesActions.setArticles(response.data))
          }
        })
    }
  },
  setArticles: (articles) => {
    return (dispatch) => {
      return dispatch({
        type: constants.SET_ARTICLES,
        payload: articles
      })
    }
  },
  setStatus: (status) => {
    return (dispatch) => {
      return dispatch({
        type: constants.SET_ARTICLES_STATUS,
        payload: status
      })
    }
  },
  postArticle: (article) => {
    return (dispatch) => {
      dispatch(ArticlesActions.setStatus(constants.ARTICLES_PENDING))

      // todo: add model usage
      return api.post.article(article)
        .then((response) => {
          if (response.success) {
            return dispatch(ArticlesActions.setStatus(constants.ARTICLES_LOADED))
          }
        })
    }
  }
}

export default ArticlesActions