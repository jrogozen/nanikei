import constants from 'config/constants'
import api from 'app/utils/api'

const QuizActions = {
  fetchConjugations: (language) => {
    return (dispatch) => {
      return api.conjugations({ language })
        .then((response) => {
          if (response.success && response.data) {
            return dispatch(QuizActions.setPossibleConjugations(response.data))
          }
        })
    }
  },
  fetchVerbs: ({ language, conjugations }) => {
    return (dispatch) => {
      dispatch(QuizActions.setStatus(constants.QUIZ_ACTIVE))

      return api.verbs({ language, conjugations })
        .then((response) => {
          if (response.success && response.data) {
            dispatch(QuizActions.setVerbs(response.data))
          }
        })
    }
  },
  setPossibleConjugations: (conjugations) => {
    return (dispatch) => {
      return dispatch({
        type: constants.SET_POSSIBLE_CONJUGATIONS,
        payload: conjugations
      })
    }
  },
  setSelectedConjugations: (conjugations) => {
    return (dispatch) => {
      return dispatch({
        type: constants.SET_SELECTED_CONJUGATIONS,
        payload: conjugations
      })
    }
  },
  setStatus: (status) => {
    return (dispatch) => {
      return dispatch({
        type: constants.SET_DISPATCH,
        payload: status
      })
    }
  },
  setVerbs: (verbs) => {
    return (dispatch) => {
      return dispatch({
        type: constants.SET_VERBS,
        payload: verbs
      })
    }
  },
  reset: () => {
    return (dispatch) => {
      dispatch({
        type: constants.RESET_QUIZ
      })
    }
  }
}

export default QuizActions