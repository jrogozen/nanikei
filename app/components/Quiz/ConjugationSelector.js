import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

import QuizActions from 'app/actions/QuizActions'
import { stringUtils } from 'app/utils/formatter'

const ConjugationSelector = React.createClass({
  propTypes: {
    possibleConjugations: React.PropTypes.array
  },
  getDefaultProps() {
    return {
      possibleConjugations: []
    }
  },
  getInitialState() {
    return {
      conjugations: this.mapArrayToObj(this.props.possibleConjugations)
    }
  },
  mapArrayToObj(array) {
    let obj = {}

    array.forEach((val) => {
      obj[val] = true
    })

    return obj
  },
  mapObjToArray(obj) {
    let arr = []

    _.forEach(obj, (val, key) => {
      if (val) {
        arr.push(key)
      }
    })

    return arr
  },
  onValueChange(conjugation) {
    let updatedConjugations = _.assign({}, this.state.conjugations)

    updatedConjugations[conjugation] = !updatedConjugations[conjugation]

    this.setState({ conjugations: updatedConjugations })

    let updatedArray = this.mapObjToArray(updatedConjugations)

    this.props.dispatch(QuizActions.setSelectedConjugations(updatedArray))
  },
  render() {
    let { conjugations } = this.state

    return (
      <form className="conjugation-selector">
        <ul>
          {_.map(conjugations, (value, conjugation) => {
            return (
              <li key={conjugation}>
                <input type="checkbox" checked={value} onChange={this.onValueChange.bind(this, conjugation)}/>
                {stringUtils.underScoreToTitle(conjugation)}
              </li>
            )
          })}
        </ul>
      </form>
    )
  }
})

const mapStateToProps = (state) => ({
  possibleConjugations: state.quiz.possibleConjugations
})

export default connect(mapStateToProps)(ConjugationSelector)