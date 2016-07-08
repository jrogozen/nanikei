import Promise from 'promise'
import path from 'path'
import chalk from 'chalk'
import { query } from './db'
import { parseCsv } from './utils/csvUtils'

function setup(tables) {
  const promises = [
    query("DROP SCHEMA public CASCADE; CREATE SCHEMA public; GRANT ALL ON SCHEMA public TO postgres; GRANT ALL ON SCHEMA public TO public; COMMENT ON SCHEMA public IS 'standard public schema'"),
  ]

  return Promise.all(promises)
}

function seedCsv(fileObj) {
  let parsedCsv = parseCsv(fileObj.file)
  let { headers, data } = parsedCsv

  // create the table
  let queryString = `CREATE TABLE ${fileObj.name}(id SERIAL PRIMARY KEY not null`

  headers.forEach((header) => {
    queryString = queryString.concat(`, ${header} TEXT`)
  })

  queryString = queryString.concat(')')

  return query(queryString)
    .then(() => {
      let promises = []

      data.forEach((row) => {
        let dataString = `INSERT INTO ${fileObj.name}(${headers.join(', ')}) values
          ('${row.join('\', \'')}')
        `

        promises.push(query(dataString))
      })

      return Promise.all(promises)
        .then(() => console.log(chalk.blue.bold('data successfully seeded')))
    })
}

function seed() {
  let createArticles = `CREATE TABLE articles(id SERIAL PRIMARY KEY not null, created_at bigint, updated_at bigint, active BOOLEAN, content TEXT, title TEXT, description TEXT, category TEXT)`

  return query(createArticles)
    .then(() => {
      let promises = []
      let article = require('server/db/json/article.json')
      let dataString = `INSERT INTO articles(title, description, created_at, updated_at, active, content, category) values
        ('${article.title}', '${article.description}', '${article.created_at}', '${article.updated_at}', '${article.active}', '${article.content}', '${article.category}')
      `

      promises.push(query(dataString))

      return Promise.all(promises)
        .then(() => console.log(chalk.blue.bold('articles seeded')))
    })
}

setup()
seedCsv(
  {
    file: path.join(__dirname, 'db', 'csv', 'japanese.csv'),
    name: 'japanese'
  }
)
seed()

// .then(() => process.exit())
