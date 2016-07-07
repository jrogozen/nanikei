import React from 'react'
import cx from 'classnames'

require('scss/components/NKButton')

const NKButton = React.createClass({
  propTypes: {
    embedded: React.PropTypes.bool,
    handleClick: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      embedded: false,
      text: 'Button Text',
      handleClick: () => {}
    }
  },
  getCss() {
    let { embedded } = this.props

    return cx({
      NKButton: true,
      embedded
    })
  },
  render() {
    let { text, handleClick } = this.props

    return (
      <div className={this.getCss()}>
        <button onClick={handleClick}>
          {text}
        </button>
      </div>
    )
  }
})

export default NKButton