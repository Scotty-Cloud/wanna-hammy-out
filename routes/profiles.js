import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


router.get('/', isLoggedIn, )


export {
  router
}