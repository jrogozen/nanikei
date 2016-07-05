import React from 'react'

import NKButton from 'app/components/NKButton'

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

    this.setState({
      userInput: ''
    })

    this.props.verifyAnswer(this.state.userInput)
  },
  render() {
    let { correctedAnswer } = this.props
    return (
      <div className="QuizAnswerBox">
        <input
          className="japanese"
          type="text"
          value={this.state.userInput}
          onChange={(e) => {
            this.setState({
              userInput: e.target.value
            })
          }}
        />
        {correctedAnswer && (
          <p style={{ fontSize: '18px', color: 'red', fontWeight: 'bold' }}>
            {correctedAnswer}
          </p>
        )}
        <NKButton
          text="Submit"
          handleClick={this.handleSubmit}
        />
      </div>
    )
  }
})

export default QuizAnswerBox