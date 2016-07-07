import React from 'react'

require('scss/components/Quiz/QuizProgressBar')

const QuizProgressBar = React.createClass({
  propTypes: {
    maxLength: React.PropTypes.number,
    currentIndex: React.PropTypes.number
  },
  getDefaultProps() {
    return {
      maxLength: 0,
      currentIndex: 0
    }
  },
  calculateWidth() {
    let { maxLength, currentIndex } = this.props

    return currentIndex / maxLength * 100 || '0%'
  },
  render() {

    return (
      <div className="QuizProgressBar">
        <div className="outline">
          <div className="filled" style={{ width: this.calculateWidth() }}>
          </div>
        </div>
      </div>
    )
  }
})

export default QuizProgressBar