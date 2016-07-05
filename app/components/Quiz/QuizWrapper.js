import React from 'react'
import { connect } from 'react-redux'

import QuizActions from 'app/actions/QuizActions'
import QuizCard from 'app/components/Quiz/QuizCard'

const QuizWrapper = React.createClass({
  fetchVerbs() {
    let { dispatch, selectedConjugations } = this.props

    return dispatch(QuizActions.fetchVerbs({
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
        currentIndex={this.props.currentIndex}
        handleStart={this.handleStart}
        selectedConjugations={this.props.selectedConjugations}
        startText="スタート (start)"
        status={this.props.status}
        title="Conjugation Quiz"
        verbs={this.props.verbs}
      />
    )
  }
})

const mapStateToProps = (state) => ({
  currentIndex: state.quiz.currentIndex,
  selectedConjugations: state.quiz.selectedConjugations,
  status: state.quiz.status,
  verbs: state.quiz.verbs
})

export default connect(mapStateToProps)(QuizWrapper)