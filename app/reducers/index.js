import { combineReducers } from 'redux'
import app from './app'
import quiz from './quiz'
import articles from './articles'

const rootReducer = combineReducers({
  app,
  articles,
  quiz
})

export default rootReducer