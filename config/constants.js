import _ from 'lodash'

const stringConstants = {

}

const dispatchConstants = {

}

const valueConstants = {
  DEFAULT_LANGUAGE: 'japanese',
  DEFAULT_PORT: 8080,
  API_TARGET_DEV: 'http://localhost',
  API_TARGET_PROD: 'http://nanikei.herokuapp.com'
}

const constants = _.assign({}, stringConstants, dispatchConstants, valueConstants)

export default constants