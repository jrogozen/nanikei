import _ from 'lodash'
import fs from 'fs'
import path from 'path'

import { query } from '../db'

const handleError = (res, err) => {
  return res.status(500).send({
    success: false,
    error: err
  })
}

export default function verbs(router) {
  router.get('/verbs', (req, res, next) => {
    query(`create`)

    res.send({
      success: true,
      data: 'hello!'
    });
  })
}