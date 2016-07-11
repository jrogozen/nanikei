import _ from 'lodash'
import fs from 'fs'
import path from 'path'

import { query } from '../db'
import constants from '../../config/constants'

export default function articles(router) {
  router.get('/articles', (req, res) => {
    let { category = 'conjugations', limit = 1 } = req.query

    query(`SELECT * from articles WHERE category='${category}' LIMIT ${limit}`)
      .then((data) => {
        if (data && !_.isEmpty(data.rows)) {
          res.send({
            success: true,
            data: data.rows
          })
        } else {
          throw new Error('No matching article')
        }
      })
      .catch((err) => res.send({ success: false, error: err}))
  })

  router.post('/articles', (req, res) => {
    let { category, title, description, active, content } = req.body
    let created_at = Date.now()
    let updated_at = Date.now()

    let newArticle = {
      category,
      title,
      description,
      active,
      content,
      created_at,
      updated_at
    }

    query(`INSERT INTO articles(title, description, active, created_at, updated_at, content, category) values
      ('${title}', '${description}', '${active}', '${created_at}', '${updated_at}', '${content}', '${category}')
    `)
      .then((data) => {
        if (data && data.rowCount === 1) {
          res.send({
            success: true,
            data: newArticle
          })
        }
      })
      .catch((err) => res.send({ success: false, error: err}))
  })
}