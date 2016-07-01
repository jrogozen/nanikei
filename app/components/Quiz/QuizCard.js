import React from 'react'

import ConjugationSelector from 'app/components/Quiz/ConjugationSelector'

const QuizCard = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    startText: React.PropTypes.string
  },
  render() {
    let { title, startText } = this.props

    return (
      <div className="QuizCard">
        <h2>{title}</h2>
        <ConjugationSelector />
      </div>
    )
  }
})

export default QuizCard