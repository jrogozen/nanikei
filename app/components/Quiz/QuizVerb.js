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
            Verb: {verb.dictionary_form}({verb.hiragana})
            <p>
              Conjugate to: {currentConjugation}
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