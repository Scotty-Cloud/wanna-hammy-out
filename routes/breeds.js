import { Router } from 'express'
import * as breedsCtrl from '../controllers/breeds.js'

const router = Router()

router.get('/', breedsCtrl.index )

router.post('/', tacosCtrl.create)

export {
  router
}

