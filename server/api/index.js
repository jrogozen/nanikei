import express from 'express'
import verbs from './verbs'
import articles from './articles'

const router = new express.Router()

verbs(router)
articles(router)

export default router