import { Router } from 'express'
import * as breedsCtrl from '../controllers/breeds.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', breedsCtrl.index )

router.get('/:id', breedsCtrl.show)


router.post('/', isLoggedIn, breedsCtrl.create)

router.patch("/:id/flip-aggressive", isLoggedIn, breedsCtrl.switchAggressive)

export {
  router
}

