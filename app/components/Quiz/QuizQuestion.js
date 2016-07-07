import React from 'react'
import { connect } from 'react-redux'

import QuizActions from 'app/actions/QuizActions'
import QuizVerb from 'app/components/Quiz/QuizVerb'
import QuizAnswerBox from 'app/components/Quiz/QuizAnswerBox'
import { array } from 'app/utils/genericUtils'

const QuizQuestion = React.createClass({
  propTypes: {
  },
  getDefaultProps() {
  },
  getInitialState() {
    let { selectedConjugations } = this.props
    return {
      currentConjugation: selectedConjugations[array.getRandom(selectedConjugations)],
      correctedAnswer: ''
    }
  },
  componentDidUpdate(prevProps) {
    if (prevProps.currentIndex !== this.props.currentIndex) {
      this.setConjugation()
    }
  },
  setConjugation() {
    let { selectedConjugations } = this.props

    this.setState({
      currentConjugation: selectedConjugations[array.getRandom(selectedConjugations)],
      correctedAnswer: ''
    })
  },
  matchQuestionAndAnswer(userInput) {
    let { currentIndex, dispatch, verbs } = this.props
    let { currentConjugation } = this.state
    let currentVerb = verbs[currentIndex]
    let isCorrect = currentVerb[currentConjugation] === userInput

    dispatch(QuizActions.logAnswer(isCorrect))

    if (isCorrect) {
      dispatch(QuizActions.nextVerb())
    } else {
      this.setState({
        correctedAnswer: currentVerb[currentConjugation]
      })
    }
  },
  render() {
    let { currentIndex, verbs } = this.props
    let { correctedAnswer } = this.state
    let currentVerb = verbs[currentIndex]

    return (
      <div className="QuizQuestion">
        <QuizVerb
          currentConjugation={this.state.currentConjugation}
          verb={currentVerb}
        />
        <QuizAnswerBox
          correctedAnswer={correctedAnswer}
          currentIndex={currentIndex}
          maxLength={verbs.length}
          verb={currentVerb}
          verifyAnswer={this.matchQuestionAndAnswer}
        />
      </div>
    )
  }
})

export default connect()(QuizQuestion)