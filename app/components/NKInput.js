import React from 'react'
import cx from 'classnames'

require('scss/components/NKInput')

const NKInput = React.createClass({
  propTypes: {},
  getDefaultProps() {
    return {
      japanese: true,
      value: '',
      handleChange: () => {}
    }
  },
  useJapaneseClass() {
    let { japanese } = this.props

    return cx({ 'japanese': japanese })
  },
  render() {
    let { value, handleChange } = this.props

    return (
      <div className="NKInput">
        <input
          className={this.useJapaneseClass}
          ref="Input"
          type="text"
          value={value}
          onChange={handleChange}
        />
      </div>
    )
  }
})

export default NKInput