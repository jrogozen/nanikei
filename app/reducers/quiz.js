import _ from 'lodash'
import constants from 'config/constants'

const initState = () => ({
  status: constants.QUIZ_PENDING,
  possibleConjugations: [],
  selectedConjugations: [],
  verbs: [],
  currentIndex: 0,
  correct: 0,
  incorrect: 0
})

const quiz = (state = initState(), action = {}) => {
  let { payload, type } = action

  switch (type) {
    case constants.SET_POSSIBLE_CONJUGATIONS:
      return _.assign({}, state, {
        possibleConjugations: payload,
        selectedConjugations: payload
      })
    case constants.SET_SELECTED_CONJUGATIONS:
      return _.assign({}, state, {
        selectedConjugations: payload
      })
    case constants.SET_VERBS:
      return _.assign({}, state, {
        verbs: payload,
        status: constants.QUIZ_ACTIVE
      })
    case constants.SET_STATUS:
      return _.assign({}, state, {
        status: payload
      })
    case constants.INCREMENT_INDEX:
      return _.assign({}, state, {
        currentIndex: state.currentIndex + 1
      })
    case constants.LOG_ANSWER:
      return _.assign({}, state, {
        correct: payload ? state.correct + 1 : state.correct,
        incorrect: payload ? state.incorrect : state.incorrect + 1
      })
    case constants.RESET_QUIZ:
      return initState()
    default:
      return state
  }
}

export default quiz