import React from 'react'
import { connect } from 'react-redux'

const QuizScore = React.createClass({
  propTypes: {

  },
  getDefaultProps() {
    return {}
  },
  render() {
    let { correct, incorrect } = this.props
    return (
      <div className="QuizScore">
        <p>Correct: {correct}</p>
        <p>Incorrect: {incorrect}</p>
      </div>
    )
  }
})

const mapStateToProps = (state) => ({
  correct: state.quiz.correct,
  incorrect: state.quiz.incorrect
})

export default connect(mapStateToProps)(QuizScore)