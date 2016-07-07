import React from 'react'

require('scss/components/Quiz/QuizVerb')

const QuizVerb = React.createClass({
  propTypes: {
    verb: React.PropTypes.object
  },
  getDefaultProps() {
    verb: {}
  },
  render() {
    let { verb, currentConjugation } = this.props

    return (
      <div className="QuizVerb">
        <div className="verb-title">
          <span className="japanese">{verb.dictionary_form}</span>
          <p className="japanese hiragana">({verb.hiragana})</p>
        </div>
        <div className="verb-sub-title">
          {verb.definition}
        </div>
        <div className="verb-body">
          <p>
            (<span className="japanese">{currentConjugation}</span>)
          </p>
        </div>
      </div>
    )
  }
})

export default QuizVerb