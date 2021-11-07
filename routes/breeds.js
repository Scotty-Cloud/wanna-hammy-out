import { Router } from 'express'
import * as breedsCtrl from '../controllers/breeds.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// localhost:3000/breeds - GET
router.get('/', breedsCtrl.index )
// localhost:3000/breeds/:id - GET
router.get('/:id', breedsCtrl.show)
// localhost:3000/breeds/:id/edit
router.get('/:id/edit', isLoggedIn, breedsCtrl.edit)

// localhost:3000/breeds - POST
router.post('/', isLoggedIn, breedsCtrl.create)

// localhost:3000/breeds/:id/flip-aggressive - PATCH
router.patch("/:id/flip-aggressive", isLoggedIn, breedsCtrl.switchAggressive)

// localhost:3000/breeds/:id - PUT
router.put('/:id', isLoggedIn, breedsCtrl.update)

// localhost:3000/breeds/:id - DELETE
router.delete('/:id', isLoggedIn, breedsCtrl.delete)

export {
  router
}

