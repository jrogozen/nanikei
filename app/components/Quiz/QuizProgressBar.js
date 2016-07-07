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

    let percent = currentIndex / maxLength * 100 || '0'

    return `${percent}%`
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