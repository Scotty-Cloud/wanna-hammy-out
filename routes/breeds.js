import { Router } from 'express'
import * as breedsCtrl from '../controllers/breeds.js'

const router = Router()

router.get('/', breedsCtrl.index )

export {
  router
}

