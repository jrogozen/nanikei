import React from 'react'

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
        <div className="verb-info">
          <div className="verb-title">
            Verb: <span className="japanese">{verb.dictionary_form}({verb.hiragana})</span>
            <p>
              Conjugate to: <span className="japanese">{currentConjugation}</span>
            </p>
          </div>
          <div className="verb-sub-title">
            Definition: {verb.definition}
          </div>
        </div>
      </div>
    )
  }
})

export default QuizVerb