import React from 'react'
import { connect } from 'react-redux'

import QuizActions from 'app/actions/QuizActions'
import QuizCard from 'app/components/Quiz/QuizCard'

const QuizWrapper = React.createClass({
  fetchVerbs() {
    let { dispatch, selectedConjugations } = this.props

    dispatch(QuizActions.fetchVerbs({
      language: 'japanese',
      conjugations: selectedConjugations
    }))
  },
  handleStart() {
    this.fetchVerbs()
  },
  render() {
    return (
      <QuizCard
        handleStart={this.handleStart}
        startText="スタート (start)"
        title="Conjugation Quiz"
        verbs={this.props.verbs}
      />
    )
  }
})

const mapStateToProps = (state) => ({
  selectedConjugations: state.quiz.selectedConjugations,
  verbs: state.quiz.verbs
})

export default connect(mapStateToProps)(QuizWrapper)