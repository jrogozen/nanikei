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
      currentConjugation: selectedConjugations[array.getRandom(selectedConjugations)]
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
      currentConjugation: selectedConjugations[array.getRandom(selectedConjugations)]
    })
  },
  matchQuestionAndAnswer(userInput) {
    let { currentIndex, dispatch, verbs } = this.props
    let { currentConjugation } = this.state
    let currentVerb = verbs[currentIndex]
    let isCorrect = currentVerb[currentConjugation] === userInput

    dispatch(QuizActions.logAnswer(isCorrect))
    dispatch(QuizActions.nextVerb())
  },
  render() {
    let { currentIndex, verbs } = this.props
    let currentVerb = verbs[currentIndex]

    return (
      <div className="QuizQuestion">
        <QuizVerb
          currentConjugation={this.state.currentConjugation}
          verb={currentVerb}
        />
        <QuizAnswerBox
          verb={currentVerb}
          verifyAnswer={this.matchQuestionAndAnswer}
        />
      </div>
    )
  }
})

export default connect()(QuizQuestion)