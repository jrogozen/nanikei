import React from 'react'

import ConjugationSelector from 'app/components/Quiz/ConjugationSelector'
import NKButton from 'app/components/NKButton'

const QuizCard = React.createClass({
  propTypes: {
    handleStart: React.PropTypes.func,
    startText: React.PropTypes.string,
    title: React.PropTypes.string,
    verbs: React.PropTypes.array
  },
  render() {
    let { title, startText, handleStart, verbs } = this.props

    return (
      <div className="QuizCard">
        <h2>{title}</h2>
        <ConjugationSelector />
        <NKButton handleClick={handleStart} text={startText}/>
          {verbs.map((verb) => {
            return (
              <ul key={verb.dictionary_form}>
                <li>dictionary: {verb.dictionary_form}</li>
                <li>hiragana: {verb.hiragana}</li>
                <li>polite non past: {verb.polite_non_past}</li>
              </ul>
            )
          })}
      </div>
    )
  }
})

export default QuizCard