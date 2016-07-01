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
    let { language, conjugations } = queryParams
    conjugations = conjugations || ''

    return requester({
      method: 'get',
      path,
      queryParams: {
        language,
        conjugations: conjugations.join(',')
      }
    })
  }
}

export default api