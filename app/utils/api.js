import requester from 'app/utils/requester'

const api = {
  conjugations: (queryParams) => {
    let path = 'api/verbs/conjugations'

    return requester({
      method: 'get',
      path,
      queryParams
    })
  },
  verbs: (queryParams = {}) => {
    let path = 'api/verbs'
    let { language = '', conjugations = '', limit = '' } = queryParams

    return requester({
      method: 'get',
      path,
      queryParams: {
        language,
        limit,
        conjugations: conjugations.join(',')
      }
    })
  },
  articles: (queryParams) => {
    let path = 'api/articles'

    return requester({
      method: 'get',
      path,
      queryParams
    })
  }
}

export default api