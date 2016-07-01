import React from 'react'
import { connect } from 'react-redux'

import QuizActions from 'app/actions/QuizActions'
import QuizCard from 'app/components/Quiz/QuizCard'

const QuizWrapper = React.createClass({
  fetchVerbs() {
    let { dispatch } = this.props

    dispatch(QuizActions.fetchVerbs('japanese'))
  },
  render() {
    return (
      <QuizCard
        title="Conjugation Quiz"
        startText="スタート (start)"
      />
    )
  }
})

export default connect()(QuizWrapper)