import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

import QuizActions from 'app/actions/QuizActions'
import { stringUtils } from 'app/utils/formatter'

require('scss/components/Quiz/ConjugationSelector')

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
  handleToggleAll(toggleOn) {
    let updatedConjugations = _.assign({}, this.state.conjugations)

    _.forEach(updatedConjugations, (value, conjugation) => {
      updatedConjugations[conjugation] = toggleOn
    })

    let updatedArray = this.mapObjToArray(updatedConjugations)

    this.setState({ conjugations: updatedConjugations })
    this.props.dispatch(QuizActions.setSelectedConjugations(updatedArray))
  },
  render() {
    let { conjugations } = this.state

    return (
      <form className="ConjugationSelector">
        <div className="toggle-all">
          <ul>
            <li onClick={this.handleToggleAll.bind(null, true)}>Toggle All</li>
            <li onClick={this.handleToggleAll.bind(null, false)}>Untoggle All</li>
          </ul>
        </div>
        <div className="toggles">
          <ul>
            {_.map(conjugations, (value, conjugation) => {
              return (
                <li key={conjugation} onClick={this.onValueChange.bind(this, conjugation)}>
                  <input type="checkbox" checked={value} onChange={this.onValueChange.bind(this, conjugation)}/>
                  <span className="japanese">{stringUtils.underScoreToTitle(conjugation)}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </form>
    )
  }
})

const mapStateToProps = (state) => ({
  possibleConjugations: state.quiz.possibleConjugations
})

export default connect(mapStateToProps)(ConjugationSelector)