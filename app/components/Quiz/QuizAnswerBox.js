import React from 'react'

import NKButton from 'app/components/NKButton'

const QuizAnswerBox = React.createClass({
  propTypes: {
    verb: React.PropTypes.object,
    verifyAnswer: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      verb: {},
      verifyAnswer: () => {}
    }
  },
  getInitialState() {
    return {
      userInput: ''
    }
  },
  render() {
    let { userInput } = this.state
    let { verifyAnswer } = this.props

    return (
      <div className="QuizAnswerBox">
        <input
          className="japanese"
          type="text"
          value={userInput}
          onChange={(e) => {
            this.setState({
              userInput: e.target.value
            })
          }}
        />
        <NKButton
          text="Submit"
          handleClick={verifyAnswer.bind(null, userInput)}
        />
      </div>
    )
  }
})

export default QuizAnswerBox