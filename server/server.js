import bodyParser from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import express from 'express'
import morgan from 'morgan'
import path from 'path'

import api from './api'
import renderer from './middleware/renderer'

require('./db')

// todo: need to figure out how to seed 1x
// if (process.env.SEED) {
  require('./seed')
// }

const DEBUG = process.env.NODE_ENV !== 'production'

const server = express()

server.set('env', DEBUG ? 'development' : 'production')
server.set('port', process.env.PORT || 8080)
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(cookieParser())
server.use(compression())

if (DEBUG) {
  const webpack = require('webpack')
  const webpackConfig = require('../webpack/webpack.config.dev-client.js')
  const compiler = webpack(webpackConfig)

  server.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: false,
    lazy: false,
    stats: {
      colors: true,
      hah: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }))
  server.use(morgan('dev'))
} else {
  server.use('/dist', express.static(path.resolve(__dirname, '../dist')))
  server.use('/images', express.static(path.resolve(__dirname, '../images')))
  server.use(morgan('tiny'))
}

server.use('/api', api)
server.use(renderer)

server.listen(server.get('port'), () => console.info(`Server running in ${server.get('env')} on port ${server.get('port')}`))