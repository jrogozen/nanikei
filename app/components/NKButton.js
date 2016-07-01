import React from 'react'

const NKButton = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    handleClick: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      text: 'Button Text',
      handleClick: () => {}
    }
  },
  render() {
    let { text, handleClick } = this.props

    return (
      <div className="NKButton">
        <button onClick={handleClick}>
          {text}
        </button>
      </div>
    )
  }
})

export default NKButton