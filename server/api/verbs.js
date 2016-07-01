import _ from 'lodash'
import fs from 'fs'
import path from 'path'

import { query } from '../db'
import constants from '../../config/constants'

const handleError = (res, err) => {
  return res.status(500).send({
    success: false,
    error: err
  })
}

const requireValue = (value, i) => {
  return `${i === 0 ? ' WHERE' : ' AND'} ${value} IS NOT NULL AND ${value} <> '' AND ${value} <> 'X'`
}

export default function verbs(router) {
  router.get('/verbs', (req, res, next) => {
    let { limit, language, conjugations } = req.query
    
    language = language || constants.DEFAULT_LANGUAGE
    limit = limit || 20

    let sql = `SELECT * from ${language}`

    if (conjugations) {
      conjugations.split(',').forEach((conjugation, i) => {
        sql += requireValue(conjugation, i)
      })
    }

    sql += ` ORDER BY random() LIMIT ${limit}`

    query(sql)
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

  router.get('/verbs/conjugations', (req, res, next) => {
    let { language } = req.query

    language = language || constants.DEFAULT_LANGUAGE

    query(`SELECT column_name from INFORMATION_SCHEMA.COLUMNS where TABLE_NAME='${language}'`)
      .then((data) => {
        if (data && !_.isEmpty(data.rows)) {
          let columns = data.rows.map((column) => {
            // todo: extract this
            if (column && column.column_name !== 'id' && column.column_name !== 'definition'
                && column.column_name !== 'dictionary_form' && column.column_name !== 'hiragana') {
              return column.column_name
            }
          }).filter((columnName) => columnName)

          res.send({
            success: true,
            data: columns
          })
        } else {
          throw new Error('No matching columns found')
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