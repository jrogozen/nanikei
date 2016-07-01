import React from 'react'
import { connect } from 'react-redux'

import QuizActions from 'app/actions/QuizActions'
import QuizWrapper from 'app/components/Quiz/QuizWrapper'

const FrontPage = React.createClass({
  statics: {
    serverRouteWillMount(reactContext) {
      let { dispatch } = reactContext.store

      return dispatch(QuizActions.fetchConjugations('japanese'))
    }
  },
  render: function() {
    return (
      <div className="FrontPage container">
        <QuizWrapper />
      </div>
    )
  }
})

export default connect()(FrontPage)