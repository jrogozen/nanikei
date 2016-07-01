import requester from 'app/utils/requester'

const api = {
  conjugations: (queryParams) => {
    let path = 'api/verbs/conjugations'

    return requester({
      method: 'get',
      path,
      queryParams
    })
  }
}

export default api