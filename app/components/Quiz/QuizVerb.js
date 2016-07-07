import React from 'react'

import { stringUtils } from 'app/utils/formatter'

require('scss/components/Quiz/QuizVerb')

const QuizVerb = React.createClass({
  propTypes: {
    verb: React.PropTypes.object
  },
  getDefaultProps() {
    verb: {}
  },
  shouldShowHiragana() {
    let { verb } = this.props

    return verb.hiragana !== verb.dictionary_form
  },
  render() {
    let { verb, currentConjugation } = this.props

    return (
      <div className="QuizVerb">
        <div className="verb-title">
          <span className="japanese">{verb.dictionary_form}</span>
          {this.shouldShowHiragana() && (<span className="hiragana japanese">({verb.hiragana})</span>)}
        </div>
        <div className="verb-sub-title">
          {verb.definition}
        </div>
        <div className="verb-small-title">
          <span className="japanese">{stringUtils.underScoreToTitle(currentConjugation)} conjugation</span>
        </div>
      </div>
    )
  }
})

export default QuizVerb