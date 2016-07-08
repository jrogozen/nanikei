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
  }
}

export default ArticlesActions