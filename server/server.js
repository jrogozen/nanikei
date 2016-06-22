import bodyParser from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import express from 'express'
import morgan from 'morgan'
import path from 'path'

import api from './api'
// import isomorpher from './middleware/isomorpher'

// require('./db')

let DEBUG;

if (__DEV__) {
  DEBUG = true;
} else {
  DEBUG = false;
}

const server = express()

server.set('env', DEBUG ? 'development' : 'production')
server.set('port', process.env.PORT || 8080)
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(cookieParser())
server.use(compression())

if (DEBUG) {
  const webpack = require('webpack')
  const webpackConfig = require('../../webpack.config.babel.js')
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

  server.use(require('webpack-hot-middleware')(compiler, {
    log: console.log,
    path: '/__webpack_hmr'
  }))
} else {
  server.use(express.static(path.resolve(__dirname, '../dist')))
  server.use(morgan('combined'))
}

server.use('/api', api)
// server.use(isomorpher)

server.listen(server.get('port'), () => {
  console.info(`Server running in ${server.get('env')} on port ${server.get('port')}`)
})