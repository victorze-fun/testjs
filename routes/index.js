import 'express-async-errors'

import { Router } from 'express'

import { route as userRoute } from './user.route.js'

export const routes = Router()

routes.use('/users', userRoute)
routes.get('/', (_req, res) => res.render('index'))

routes.get('/welcome/:name/:nickname?', (req, res) => {
  const { name, nickname } = req.params

  if (nickname) {
    res.send(`Welcome ${name}, your nick is ${nickname}`)
  } else {
    res.send(`Welcome ${name}`)
  }
})
