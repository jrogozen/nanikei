import React from 'react'

require('scss/containers/ContentPageWrapper')

const ContentPageWrapper = React.createClass({
  render() {
    return (
      <div className="ContentPageWrapper">
        <div className="content-page-main">
          {React.cloneElement(this.props.children)}
        </div>
      </div>
    )
  }
})

export default ContentPageWrapper