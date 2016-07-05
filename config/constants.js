import _ from 'lodash'

const stringConstants = {
  'QUIZ_PENDING': 'QUIZ_PENDING',
  'QUIZ_LOADING': 'QUIZ_LOADING',
  'QUIZ_ACTIVE': 'QUIZ_ACTIVE',
  'QUIZ_RESULTS': 'QUIZ_RESULTS'
}

const dispatchConstants = {
  'SET_POSSIBLE_CONJUGATIONS': 'SET_POSSIBLE_CONJUGATIONS',
  'SET_SELECTED_CONJUGATIONS': 'SET_SELECTED_CONJUGATIONS',
  'RESET_QUIZ': 'RESET_QUIZ',
  'SET_VERBS': 'SET_VERBS',
  'SET_STATUS': 'SET_STATUS',
  'INCREMENT_INDEX': 'INCREMENT_INDEX',
  'LOG_ANSWER': 'LOG_ANSWER'
}

const valueConstants = {
  DEFAULT_LANGUAGE: 'japanese',
  DEFAULT_PORT: 8080,
  API_TARGET_DEV: 'http://localhost',
  API_TARGET_PROD: 'http://nanikei.herokuapp.com'
}

const constants = _.assign({}, stringConstants, dispatchConstants, valueConstants)

export default constants