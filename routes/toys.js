import { Router } from 'express'
import * as toysCtrl from '../controllers/toys.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// localhost:3000/breeds - GET
router.get("/", toysCtrl.index )
// localhost:3000/breeds/:id - GET
router.get("/:id", toysCtrl.show)
// localhost:3000/breeds/:id/edit
router.get("/:id/edit", isLoggedIn, toysCtrl.edit)

// localhost:3000/breeds - POST
router.post("/", isLoggedIn, toysCtrl.create)

// localhost:3000/breeds/:id/flip-aggressive - PATCH
router.patch("/:id/flip-aggressive", isLoggedIn, toysCtrl.switchFun)

// localhost:3000/breeds/:id - PUT
router.put("/:id", isLoggedIn, toysCtrl.update)

// localhost:3000/breeds/:id - DELETE
router.delete("/:id", isLoggedIn, toysCtrl.delete)

export {
  router
}