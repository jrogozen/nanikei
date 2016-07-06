import React from 'react'

import constants from 'config/constants'
import ConjugationSelector from 'app/components/Quiz/ConjugationSelector'
import NKButton from 'app/components/NKButton'
import QuizScore from 'app/components/Quiz/QuizScore'
import QuizQuestion from 'app/components/Quiz/QuizQuestion'

require('scss/components/Quiz/QuizCard')

const QuizCard = React.createClass({
  propTypes: {
    handleStart: React.PropTypes.func,
    startText: React.PropTypes.string,
    title: React.PropTypes.string,
    verbs: React.PropTypes.array
  },
  chooseDisplay() {
    let { selectedConjugations, startText, handleStart, currentIndex,
      status, verbs, handleReset, resetText } = this.props

    switch (status) {
      case constants.QUIZ_PENDING:
        return (
          <div>
            <ConjugationSelector />
            <NKButton handleClick={handleStart} text={startText}/>
          </div>
        )
      case constants.QUIZ_ACTIVE:
        return (
          <div>
            <QuizQuestion
              currentIndex={currentIndex}
              selectedConjugations={selectedConjugations}
              verbs={verbs}
            />
            <QuizScore />
          </div>
        )
      case constants.QUIZ_LOADING:
        return <h1>Loading Placeholder</h1>
      case  constants.QUIZ_RESULTS:
        return (
          <div>
            <h1>Quiz Over Placeholder</h1>
            <QuizScore />
            <NKButton handleClick={handleReset} text={resetText} />
          </div>
        )
      default:
        return <div />
    }
  },
  render() {
    let { title, handleReset } = this.props

    return (
      <div className="QuizCard">
        <h2 onClick={handleReset}>{title}</h2>
        <div className="quiz-content">
          {this.chooseDisplay()}
        </div>
      </div>
    )
  }
})

export default QuizCard