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
  fetchVerbs: ({ language, conjugations, limit }) => {
    return (dispatch) => {
      dispatch(QuizActions.setStatus(constants.QUIZ_LOADING))

      return api.verbs({ language, conjugations, limit })
        .then((response) => {
          if (response.success && response.data) {
            dispatch(QuizActions.setVerbs(response.data))
            return dispatch(QuizActions.setStatus(constants.QUIZ_ACTIVE))
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
        type: constants.SET_STATUS,
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
  nextVerb: () => {
    return (dispatch, getState) => {
      const state = getState()
      let verbLength = state.quiz.verbs.length
      let currentIndex = state.quiz.currentIndex

      if (currentIndex >= verbLength - 1) {
        return dispatch(QuizActions.setStatus(constants.QUIZ_RESULTS))
      } else {
        return dispatch({
          type: constants.INCREMENT_INDEX
        })
      }
    }
  },
  logAnswer(correct) {
    return (dispatch) => {
      return dispatch({
        type: constants.LOG_ANSWER,
        payload: correct
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