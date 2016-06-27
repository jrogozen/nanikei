import Promise from 'promise'
import chalk from 'chalk'

export const query = (client) => {
  return (sql, values) => {
    return new Promise((resolve, reject) => {
      client.query(sql, values, (err, result) => {
        if (err) {
          console.log(chalk.red.bold('error running SQL', err))
          console.log('tried sql query:', sql, values)
          reject(err)
        }

        return resolve(result)
      })
    })
  }
}