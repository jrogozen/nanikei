import _ from 'lodash'
import constants from 'config/constants'

const initState = () => ({
  status: '',
  articles: {}
})

const articles = (state = initState(), action = {}) => {
  let { payload, type } = action

  switch (type) {
    case constants.SET_ARTICLES:
      let mergedArticles = _.assign({}, state.articles)

      payload.forEach((article) => {
        mergedArticles[article.id] = article
      })

      return _.assign({}, state, {
        articles: mergedArticles
      })
    default:
      return state
  }
}

export default articles