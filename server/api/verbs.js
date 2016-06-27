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
    let { limit, language } = req.query
    
    language = language || 'japanese'
    limit = limit || 20

    query(`SELECT * from ${language} ORDER BY random() LIMIT ${limit}`)
      .then((data) => {
        if (data && !_.isEmpty(data.rows)) {
          res.send({
            success: true,
            data: data.rows
          })
        } else {
          throw new Error('No matching verbs found')
        }
      })
      .catch((err) => {
        res.send({
          success: false,
          error: err
        })
      })
  })
}