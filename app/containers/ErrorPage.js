import React from 'react'

const ErrorPage = React.createClass({
  propTypes: {
    error: React.PropTypes.object
  },
  getDefaultProps() {
    return {
      error: {}
    }
  },
  render() {
    return (
      <html>
        <head>
          <title>nanikei</title>
        </head>
        <body>
          <div>
            <h1>Oops. It's an Embarassing Error!</h1>
            <pre>
              {this.props.error.stack}
            </pre>
          </div>
        </body>
      </html>
    )
  }
})

export default ErrorPage