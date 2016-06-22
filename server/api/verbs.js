import _ from 'lodash'
import fs from 'fs'
import path from 'path'

const handleError = (res, err) => {
  return res.status(500).send({
    success: false,
    error: err
  })
}

export default function verbs(router) {
  router.get('/verbs', (req, res, next) => {
    res.send({
      success: true,
      data: 'hello!'
    });
  })
}