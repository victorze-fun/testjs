import { Router } from 'express'

import { userController } from '../app/controllers/index.js'

export const route = Router()

route.get('/', userController.index)
route.get('/:id', userController.show)
