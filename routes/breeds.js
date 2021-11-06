import { Router } from 'express'
import * as breedsCtrl from '../controllers/breeds.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', breedsCtrl.index )

router.post('/', isLoggedIn, breedsCtrl.create)


export {
  router
}

