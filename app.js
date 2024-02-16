import path from 'path'

import express from 'express'

import { routes } from './routes/index.js'

const app = express()

const BASE_DIR = path.resolve('')

app.set('view engine', 'pug')
app.set('views', path.join(BASE_DIR, 'app', 'views'))

app.use(express.static(path.join(BASE_DIR, 'public')))
app.use(express.urlencoded({ extended: false }))

app.use('/', routes)

export default app
