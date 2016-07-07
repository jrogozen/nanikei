import React from 'react'

import NKButton from 'app/components/NKButton'
import NKInput from 'app/components/NKInput'
import QuizProgressBar from 'app/components/Quiz/QuizProgressBar'

require('scss/components/Quiz/QuizAnswerBox')

const QuizAnswerBox = React.createClass({
  propTypes: {
    correctedAnswer: React.PropTypes.string,
    verb: React.PropTypes.object,
    verifyAnswer: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      correctedAnswer: '',
      verb: {},
      verifyAnswer: () => {}
    }
  },
  getInitialState() {
    return {
      userInput: ''
    }
  },
  componentDidMount() {
    window.addEventListener('keypress', this.handleNonClickSubmit)
  },
  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleNonClickSubmit)
  },
  handleNonClickSubmit(e) {
    let key = e.which || e.keyCode

    if (key === 13) {
      this.handleSubmit()
    }
  },
  handleSubmit() {
    if (!this.state.userInput) {
      return false
    }

    this.props.verifyAnswer(this.state.userInput)

    this.setState({
      userInput: ''
    })

  },
  render() {
    let { correctedAnswer, currentIndex, maxLength } = this.props

    return (
      <div className="QuizAnswerBox">
        <div className="form-wrapper">
          <NKInput
            japanese
            value={this.state.userInput}
            handleChange={(event) => {
              this.setState({
                userInput: event.target.value
              })
            }}
          />
          <NKButton
            embedded
            text={<i className="material-icons">subdirectory_arrow_right</i>}
            handleClick={this.handleSubmit}
          />
        </div>
        <QuizProgressBar maxLength={maxLength} currentIndex={currentIndex} />
        {correctedAnswer && !this.state.userInput.length &&(
          <p style={{ fontSize: '18px', color: 'red', fontWeight: 'bold' }}>
            {correctedAnswer}
          </p>
        )}
      </div>
    )
  }
})

export default QuizAnswerBox